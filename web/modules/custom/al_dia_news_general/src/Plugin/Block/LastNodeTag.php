<?php

namespace Drupal\al_dia_news_general\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\views\Views;
use Symfony\Component\HttpFoundation\RequestStack;
use Drupal\Core\Database\Connection;
/**
 * Class LastNodeTag.
 *
 * @Block(
 *   id = "last_node_tag",
 *   admin_label = @Translation("LastNodeTag"),
 * )
 */
class LastNodeTag extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Requeststack service.
   *
   * @var \Symfony\Component\HttpFoundation\RequestStack
   */
  public $requestStack;

  /**
   * Variable para formatear conexion con la base de datos.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, EntityTypeManagerInterface $entity_type_manager, RequestStack $requestStack, Connection $connection) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->entityTypeManager = $entity_type_manager;
    $this->requestStack = $requestStack;
    $this->database = $connection;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('entity_type.manager'),
      $container->get('request_stack'),
      $container->get('database')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $id_node =  $this->requestStack->getParentRequest()->get('node') ?? FALSE;
    if ($id_node) {
      $node = $this->entityTypeManager->getStorage('node')->load($id_node);
      if ($node) {
        $render_controller = $this->entityTypeManager->getViewBuilder($node->getEntityTypeId());
        $mode = $render_controller->view($node, 'first_category_home'); //selecciono el modo de visualización en news, first_category_home
        $return["main"] = $mode;
      }
    }
    else {
      $current_path = \Drupal::service('path.current')->getPath();
      $path_args = explode('/', $current_path);
      $tax_id = $path_args[3];
      $language = \Drupal::languageManager()->getCurrentLanguage()->getId();
      $query1 = $this->database->select('node_field_data', 'n');
      $query1->fields("n", ["nid", "created"]);
      $query1->innerJoin("node__field_tags", "c", "n.nid = c.entity_id");
      $query1->condition("n.type", "news", "=");
      $query1->condition("c.field_tags_target_id", $tax_id);
      $query1->condition("n.status", 1, "=");
      $query1->condition("n.langcode", $language, "=");
      $query1->orderBy("n.created", "DESC");
      $results = $query1->execute()->fetchObject();

      $node = $this->entityTypeManager->getStorage('node')->load($results->nid);
      if ($node) {
        $render_controller = $this->entityTypeManager->getViewBuilder($node->getEntityTypeId());
        $mode = $render_controller->view($node, 'first_category_home'); //selecciono el modo de visualización en news, first_category_home
        $return["main"] = $mode;
      }
    }
    $return['#cache'] = ["max-age" => 0];
    return $return;
  }

}
