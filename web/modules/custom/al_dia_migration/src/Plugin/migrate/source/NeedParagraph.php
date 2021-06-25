<?php

namespace Drupal\al_dia_migration\Plugin\migrate\source;

use Drupal\migrate\Plugin\migrate\source\SqlBase;
use Drupal\migrate\Row;
use Drupal\migrate_drupal\Plugin\migrate\source\d7\FieldableEntity;

/**
 * Minimalistic example for a SqlBase source plugin.
 *
 * @MigrateSource(
 *   id = "need_paragraph",
 * )
 */
class NeedParagraph extends FieldableEntity {

    /**
     * {@inheritdoc}
     */
    public function query() {
    // Source data is queried from 'curling_games' table.
        $query = $this->select('node ', 'n')
        ->fields('n', [
            'nid',  
            'title',
            'type',
            ]);
          
        if (isset($this->configuration['field_name_name'])) {
            $query->innerJoin('field_data_' . $this->configuration['field_name_name'], 'fa', 'fa.' . $this->configuration['field_name_name'] . '_target_id = n.nid');
    
            $query->fields('fa', [
                'entity_type',  
                'bundle',  
                'entity_id',  
                $this->configuration['field_name_name'] . '_target_id',  
            ]);  
            //$query->condition('n.nid', $this->configuration['field_name_name']); 
        } 
        dump($query);
        return $query;
    }

    /**
     * {@inheritdoc}
     */
    public function prepareRow(Row $row) {

        if (isset($this->configuration['field_name_name'])) {  
            $row->setSourceProperty('revision_id', $row->getSourceProperty($this->configuration['field_name_name'] . '_revision_id'));  
        } 
        
        foreach (array_keys($this->getFields('node', 'article')) as $field) { 
            dump($field);
            $entity_id = $row->getSourceProperty($this->configuration['field_name_name'] . '_target_id');  
            $revision_id = $row->getSourceProperty('revision_id');  
            $row->setSourceProperty($field, $this->getFieldValues('node', $field, $entity_id, $revision_id)); 
        } 
        $date = $row->getSourceProperty('date');
        $time = $row->getSourceProperty('time');
        $datetime = $date . 'T' . $time . ':00';
        $row->setSourceProperty('datetime', $datetime);
       
        return parent::prepareRow($row);
    }

    /**
     * {@inheritdoc}
     */
    public function fields() {
        $fields = [
        'nid' => $this->t('nid' ),
        'title'   => $this->t('title' ),
        'type'    => $this->t('type'),
        ];
        return $fields;
    }

    /**
     * {@inheritdoc}
     */
    public function getIds() {

        return [
            'nid' => [
                'type' => 'integer',
                'alias' => 'ffa',
            ],
            'entity_id' => [
                'type' => 'integer',
                'alias' => 'ffa',
            ],
        ];
    }
}