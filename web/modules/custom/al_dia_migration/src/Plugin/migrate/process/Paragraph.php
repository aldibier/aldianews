<?php

namespace Drupal\al_dia_migration\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;
use Drupal\node\Entity\Node;
use Drupal\Core\Database\Database;
use Drupal\Core\Entity\EntityTypeManagerInterface;

/**
 *
 * @MigrateProcessPlugin(
 *   id = "paragraph",
 *   handle_multiples = TRUE
 * )
 */


class Paragraph extends ProcessPluginBase {
  
  /** 
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Constructs a Display Suite field plugin.
   */
  public function __construct($configuration, $plugin_id, $plugin_definition, EntityTypeManagerInterface $entity_type_manager) {
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
      $container->get('entity_type.manager')
    );
  }

  /**
   * {@inheritdoc}
   */

  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    
    foreach($value as $item){
      Database::setActiveConnection('migrate');
      $db = Database::getConnection();
      $query = $db->select('node', 'n');
      $query->addField('n', 'title');
      $query->addField('ft', 'field_topics_tid');
      $query->innerJoin('field_data_field_topics', 'ft', 'n.nid=ft.entity_id');
      $query->addField('img', 'field_image_fid');
      $query->innerJoin('field_data_field_image', 'img', 'n.nid=img.entity_id');
      $query->condition('n.nid', $item["target_id"], '=');
      $results = $query->execute()->fetchObject();
      Database::setActiveConnection();
      dump($results);
      $paragraph = $this->entityTypeManager->getStorage('paragraph')>create([
        'title' => 'Algo',
      ]);
      $paragraph->save();      

    }

    return [];
  }  
}