<?php

/**
 * @file Clase para la gestión de la migración de campos de procesos dentro de bogota Tribunal Eclesiastico
 */

namespace Drupal\al_dia_migration\Plugin\migrate\source;

use Drupal\migrate\Plugin\migrate\source\SqlBase;
use Drupal\migrate\Row;
use Drupal\Core\Database;
use Drupal\migrate_drupal\Plugin\migrate\source\d7\FieldableEntity;


/**
 * Minimalistic example for a SqlBase source plugin.
 *
 * @MigrateSource(
 *   id = "print_edition",
 * )
 */
class PrintEdition extends FieldableEntity
{

  /**
   * {@inheritdoc}
   */
  public function query()
  {
    $query = $this->select('node', 'n')
      ->fields('n',[
        'nid',
        'title',
        'uid',
        'status',
        'created',
        'changed',
        'tnid',
        'promote',
        'translate',
        'uuid',
        'type'
      ]);
    $query->fields('n', ['nid']);
    $query->condition('n.type', 'print_edition');
    //$query->addField('b', 'body_value');
    //$query->innerJoin('field_data_body', 'b', 'n.nid=b.entity_id');
    //$query->fields('b',[
    //  'body_value',
    //]);
    
    //$query->condition('n.type', 'print_edition');
    //$query->addField('b', 'body_value');
    //$query->innerJoin('field_data_body', 'b', 'n.nid=b.entity_id');
    //$query->fields('b',['body_value']);
    //$query->fields('app', ['id', 'nombre', 'codigo', 'sala_reparto', 'observacion_id', 'fecha_creacion', 'auditor_id']);
    //$query->addField('app', 'id', 'nid');

    //$query->leftJoin('admin_procesos_proceso', 'app', 'n.nid = app.id');
    //$query->leftJoin('admin_procesos_observacionproceso', 'apo', 'app.observacion_id = apo.id'); 

    return $query;
  }

  /**
   * {@inheritdoc}
   */
  public function fields()
  {
    $fields = [
    'nid' => $this->t('nid'),
    // 'owner_site_id' => $this->t('owner_site_id'),
  ];
   
      return $fields;
  }

  /**
   * {@inheritdoc}
   */
  public function getIds()
  {
    return [
      'nid' => [
        'type' => 'integer',
        //'alias' => 'e',
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function prepareRow(Row $row)
  {
    // In migrate source plugins, the migrate database is easy.
    // Example: $this->select('your_table').
    // Getting to the Drupal 8 db requires a little more code.
    $drupalDb = \Drupal\Core\Database\Database::getConnection('default', 'default');
    
    $paragraphs = [];
    $results = $drupalDb->select('migrate_map_paragraph', 'mmipp')
    ->fields('mmipp', ['destid1', 'destid2'])
    ->condition('mmipp.sourceid2', $row->getSourceProperty('nid'), '=')
    ->execute()
    ->fetchAll();
   

    foreach (array_keys($this->getFields('node', 'print_edition')) as $field) { 
      $entity_id = $row->getSourceProperty('nid');  
      $row->setSourceProperty($field, $this->getFieldValues('node', $field, $entity_id)); 
    }   

    if (!empty($results)) {
        foreach ($results as $result) {
            // destid1 in the map table is the nid.
            // destid2 in the map table is the entity revision id.
            $paragraphs[] = [
                  'target_id' => $result->destid1,
                  'target_revision_id' => $result->destid2,
            ];
        }
    }


    // Set a source property that can be referenced in yml.
    // Source properties can be named however you like.
    $row->setSourceProperty('prepare_multiple_paragraphs', $paragraphs);

    return parent::prepareRow($row);
  }
}
