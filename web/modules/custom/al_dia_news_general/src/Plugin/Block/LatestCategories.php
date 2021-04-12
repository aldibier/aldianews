<?php

namespace Drupal\al_dia_news_general\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Database\Connection;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Datetime\DateFormatter;

use Drupal\Core\Entity\EntityTypeManagerInterface;

/**
 * Class LatestCategories.
 *
 * @Block(
 *   id = "latest_categories",
 *   admin_label = @Translation("LatestCategories"),
 * )
 */
class LatestCategories extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * Variable para formatear conexion con la base de datos.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;
  /**
   * Variable para formatear fecha.
   *
   * @var \Drupal\Core\Datetime\DateFormatter
   */
  protected $dateFormat;
  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, Connection $connection, EntityTypeManagerInterface $entity_type_manager) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->database = $connection;
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('database'),
      $container->get('entity_type.manager')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {

    $database = \Drupal::database();
    $query1 = $database->select('node_field_data', 'n');
    $query1->innerJoin("node__field_category", "c", "n.nid = c.entity_id");
    $query1->condition("n.type", "news", "=");
    $query1->orderBy("n.created", "DESC");
    $query1->range(0, 1);
    $results = $query1->execute()->fetchCol();

    foreach ($results as $result) {

      $user = $this->entityTypeManager->getStorage('node')->load($result->nid);
      $render_controller = $this->entityTypeManager->getViewBuilder($user->getEntityTypeId());
      $mode = $render_controller->view($user, 'categories_home');
    }
      $return = [
        '#theme' => 'item_list',
        '#cache' => ["max-age" => 0],
      ];

    return $return;
  }

}