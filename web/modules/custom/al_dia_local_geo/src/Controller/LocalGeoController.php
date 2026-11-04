<?php

namespace Drupal\al_dia_local_geo\Controller;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Sends the reader to the Local category page of their area.
 */
class LocalGeoController extends ControllerBase {

  /**
   * Constructs a LocalGeoController object.
   */
  public function __construct(ConfigFactoryInterface $config_factory) {
    $this->configFactory = $config_factory;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory')
    );
  }

  /**
   * Redirects to the area page matching the Cloudflare postal code header.
   */
  public function redirectToArea(Request $request) {
    $config = $this->config('al_dia_local_geo.settings');
    $country = (string) $request->headers->get('CF-IPCountry');
    // CF-Postal-Code comes from the "Add visitor location headers" managed
    // transform; US values can be ZIP+4.
    $postal_code = substr(trim((string) $request->headers->get('CF-Postal-Code')), 0, 5);
    $zone = $this->matchZone($country, $postal_code, $config->get('zones') ?? []);
    $tid = $zone['tid'] ?? $config->get('default_tid');

    $url = Url::fromRoute('entity.taxonomy_term.canonical', ['taxonomy_term' => $tid])
      ->toString(TRUE)
      ->getGeneratedUrl();

    $response = new RedirectResponse($url, 302);
    $response->headers->set('Cache-Control', 'private, no-store');
    // Lets testers see what was detected; it only echoes the requester's own
    // location.
    $response->headers->set('X-Local-Geo', sprintf('country=%s; zip=%s; zone=%s', $country ?: '-', $postal_code ?: '-', $zone['label'] ?? 'default'));
    return $response;
  }

  /**
   * Returns the enabled zone that holds the reader ZIP code, if any.
   */
  protected function matchZone(string $country, string $postal_code, array $zones) {
    if ($country !== 'US' || !preg_match('/^\d{5}$/', $postal_code)) {
      return NULL;
    }
    foreach ($zones as $zone) {
      if (!empty($zone['enabled']) && in_array($postal_code, $zone['postal_codes'] ?? [], TRUE)) {
        return $zone;
      }
    }
    return NULL;
  }

}
