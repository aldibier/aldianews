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
    $tid = $this->matchZone($request, $config->get('zones') ?? []) ?? $config->get('default_tid');

    $url = Url::fromRoute('entity.taxonomy_term.canonical', ['taxonomy_term' => $tid])
      ->toString(TRUE)
      ->getGeneratedUrl();

    $response = new RedirectResponse($url, 302);
    $response->headers->set('Cache-Control', 'private, no-store');
    return $response;
  }

  /**
   * Returns the term ID of the enabled zone that holds the reader ZIP code.
   */
  protected function matchZone(Request $request, array $zones) {
    if ($request->headers->get('CF-IPCountry') !== 'US') {
      return NULL;
    }
    // CF-Postal-Code comes from the "Add visitor location headers" managed
    // transform; US values can be ZIP+4.
    $postal_code = substr(trim((string) $request->headers->get('CF-Postal-Code')), 0, 5);
    if (!preg_match('/^\d{5}$/', $postal_code)) {
      return NULL;
    }
    foreach ($zones as $zone) {
      if (!empty($zone['enabled']) && in_array($postal_code, $zone['postal_codes'] ?? [], TRUE)) {
        return $zone['tid'];
      }
    }
    return NULL;
  }

}
