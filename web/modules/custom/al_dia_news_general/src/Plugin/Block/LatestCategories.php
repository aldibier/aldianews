<?php

namespace Drupal\al_dia_news_general\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Database\Connection;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Cache\CacheBackendInterface;
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
   * The cache backend.
   *
   * @var \Drupal\Core\Cache\CacheBackendInterface
   */
  protected $cache;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, Connection $connection, EntityTypeManagerInterface $entity_type_manager, CacheBackendInterface $cache) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->database = $connection;
    $this->entityTypeManager = $entity_type_manager;
    $this->cache = $cache;
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
      $container->get('entity_type.manager'),
      $container->get('cache.data')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {

    $query1 = $this->database->select('node_field_data', 'n');
    $query1->fields("n", ["nid", "created"]);
    $query1->addField("t", "parent_target_id");
    $query1->addField("tt", "parent_target_id");
    $query1->innerJoin("node__field_category", "c", "n.nid = c.entity_id");
    $query1->innerJoin("taxonomy_term__parent", "t", "c.field_category_target_id = t.entity_id");
    $query1->leftJoin("taxonomy_term__parent", "tt", "t.parent_target_id = tt.entity_id");
    $query1->condition("n.type", "news", "=");
    $query1->condition("c.field_category_target_id", 123, "<>");
    $query1->orderBy("n.created", "DESC");
    $query1->range(0, 1);
    $results = $query1->execute()->fetchObject();
    $return["main"] = [
      "#type" => "container",
      '#attributes' => [
        'class' => 'main-news',
      ],
    ];
    $category = [];
    $nids = [];
    if ($results) {
      $nids[] = $results->nid;
      if ($results->tt_parent_target_id) {
        $category[] = $results->tt_parent_target_id;
      }
      else {
        $category[] = $results->parent_target_id;
      }
      $user = $this->entityTypeManager->getStorage('node')->load($results->nid);
      $render_controller = $this->entityTypeManager->getViewBuilder($user->getEntityTypeId());
      $mode = $render_controller->view($user, 'categories_home');
      $return["main"]["main"] = $mode; 
    }
    $query2 = $this->database->select('node_field_data', 'n');
    $query2->fields("n", ["nid", "created"]);
    $query2->addField("t", "parent_target_id");
    $query2->addField("tt", "parent_target_id");
    $query2->innerJoin("node__field_category", "c", "n.nid = c.entity_id");
    $query2->innerJoin("taxonomy_term__parent", "t", "c.field_category_target_id = t.entity_id");
    $query2->leftJoin("taxonomy_term__parent", "tt", "t.parent_target_id = tt.entity_id");
    $query2->condition("n.type", "news", "=");
    $query2->condition("t.parent_target_id", $category, "NOT IN");
    $query2->condition("tt.parent_target_id", $category, "NOT IN");
    $query2->condition("c.field_category_target_id", 123, "<>");
    $query2->orderBy("n.created", "DESC");
    $query2->range(0, 1);
    $results = $query2->execute()->fetchObject();

    $return["second"] = [
      "#type" => "container",
      '#attributes' => [
        'class' => 'second-news',
      ],
    ];
    if ($results) {
      $nids[] = $results->nid;
      if ($results->tt_parent_target_id) {
        $category[] = $results->tt_parent_target_id;
      }
      else {
        $category[] = $results->parent_target_id;
      }
      $user = $this->entityTypeManager->getStorage('node')->load($results->nid);
      $render_controller = $this->entityTypeManager->getViewBuilder($user->getEntityTypeId());
      $mode = $render_controller->view($user, 'category_next_4');
      $return["second"]["one"] = $mode; 
    }
    $query3 = $this->database->select('node_field_data', 'n');
    $query3->fields("n", ["nid", "created"]);
    $query3->addField("t", "parent_target_id");
    $query3->addField("tt", "parent_target_id");
    $query3->innerJoin("node__field_category", "c", "n.nid = c.entity_id");
    $query3->innerJoin("taxonomy_term__parent", "t", "c.field_category_target_id = t.entity_id");
    $query3->leftJoin("taxonomy_term__parent", "tt", "t.parent_target_id = tt.entity_id");
    $query3->condition("n.type", "news", "=");
    $query3->condition("t.parent_target_id", $category, "NOT IN");
    $query3->condition("tt.parent_target_id", $category, "NOT IN");
    $query3->condition("c.field_category_target_id", 123, "<>");
    $query3->orderBy("n.created", "DESC");
    $query3->range(0, 1);
    $results = $query3->execute()->fetchObject();

    if ($results) {
      $nids[] = $results->nid;
      $user = $this->entityTypeManager->getStorage('node')->load($results->nid);
      $render_controller = $this->entityTypeManager->getViewBuilder($user->getEntityTypeId());
      $mode = $render_controller->view($user, 'category_next_4');
      $return["second"]["two"] = $mode; 
    }
    $this->cache->set("nids_home", $nids, CacheBackendInterface::CACHE_PERMANENT);
    $return['#cache'] = ["max-age" => 0];

    return $return;
  }

}