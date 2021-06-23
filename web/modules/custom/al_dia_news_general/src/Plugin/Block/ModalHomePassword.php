<?php
/**
 * @file
 * Contains \Drupal\custom_modal\Plugin\Block\ModalBlock.
 */

namespace Drupal\al_dia_news_general\Plugin\Block;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Url;
use Drupal\Core\Link;
use Drupal\Component\Serialization\Json;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;

/**
 * Provides a 'Modal' Block
 *
 * @Block(
 *   id = "modal_home_password",
 *   admin_label = @Translation("Modal Home Password"),
 * )
 */
class ModalHomePassword extends BlockBase implements ContainerFactoryPluginInterface {

    /**
   * Requeststack service.
   *
   * @var \Symfony\Component\HttpFoundation\RequestStack
   */
  public $requestStack;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, RequestStack $requestStack) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->requestStack = $requestStack;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('request_stack')
    );
  }
  /**
   * {@inheritdoc}
   */
  public function build() {
    $modal =  $this->requestStack->getParentRequest()->get('modal') ?? FALSE;
    if ($modal) {
        $link_url = Url::fromRoute('al_dia_news_general.modal');
        $link_url->setOptions([
          'attributes' => [
            'class' => ['use-ajax', 'button', 'button--small'],
            'data-dialog-type' => 'modal',
            'data-dialog-options' => Json::encode(['width' => 400]),
          ]
        ]);
        return [
            '#type' => 'markup',
            '#markup' => Link::fromTextAndUrl(t('Open modal'), $link_url)->toString(),
            '#attached' => ['library' => ['core/drupal.dialog.ajax']],
            '#cache' => ["max-age" => 0]
        ];
    }
    else {
        return [
            '#cache' => ["max-age" => 0]
        ];
    } 

  }
}