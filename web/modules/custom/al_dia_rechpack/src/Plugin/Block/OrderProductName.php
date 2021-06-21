<?php

namespace Drupal\al_dia_rechpack\Plugin\Block;

use Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\Component\Serialization\Json;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormState;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Path\CurrentPathStack;
use Drupal\Core\Entity\EntityTypeManagerInterface;


/**
 * Class OrderProductName.
 *
 * @Block(
 *   id = "order_product_name",
 *   admin_label = @Translation("Order product Name"),
 * )
 */

class OrderProductName extends  BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Protected currentPath variable.
   *
   * @var \Drupal\Core\Path\CurrentPathStack
   */
  protected $currentPath;

   /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;


/**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, CurrentPathStack $currentPath, EntityTypeManagerInterface $entity_type_manager) {
    $this->currentPath = $currentPath;
    $this->entityTypeManager = $entity_type_manager;
    parent::__construct($configuration, $plugin_id, $plugin_definition);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('path.current'),
      $container->get('entity_type.manager')

    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $current_path = $this->currentPath->getPath();
    $new_url = explode("/", $current_path);
    $order = $this->entityTypeManager->getStorage('commerce_order')->load($new_url[2]);
    $items = $order->getItems();
    foreach ($items as $item) {
      $variation = $item->getPurchasedEntity();
      if ($variation) {
        $product = $variation->getProduct();
        if ($product) {
          $name = $product->getTitle();
        }
      }
    }
    return [
      '#cache' => ["max-age" => 0],
      '#markup' => '<span class="your-order-subscribe">YOUR ORDER: </span>'. $name,
    ];
  }


}
