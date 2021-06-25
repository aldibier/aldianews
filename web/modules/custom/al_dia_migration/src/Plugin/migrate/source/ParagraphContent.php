<?php

namespace Drupal\al_dia_migration\Plugin\migrate\source; 

use Drupal\migrate\Row;  
use Drupal\migrate_drupal\Plugin\migrate\source\d7\FieldableEntity; 

/**  
* paragraph_content source.  
*  
* @MigrateSource(  
*   id = "paragraph_content"  
* )  
*/  
class ParagraphContent extends FieldableEntity { 

    /**  
     * {@inheritdoc}  
    */  
    public function query() {  
    // Select node in its last revision.  
        $query = $this->select('paragraphs_item', 'fci')  
        ->fields('fci', [  
        'item_id',  
        'field_card_title_related_covers',  
        'revision_id',  
        ]); 
        dump("aquiiiiiiiiiiii");
        if (isset($this->configuration['field_card_title_related_covers'])) {
            dump($this->configuration['field_card_title_related_covers']);  
            $query->innerJoin('field_data_' . $this->configuration['field_card_title_related_covers'], 'fd', 'fd.' . $this->configuration['field_card_title_related_covers'] . '_value = fci.item_id');  
            $query->fields('fd',  
            ['entity_type',  
                'bundle',  
                'entity_id',  
                $this->configuration['field_card_title_related_covers'] . '_revision_id',  
            ]);  
            dump("aquiiiiiiiiiiii22222222222");
            $query->condition('fci.field_card_title_related_covers', $this->configuration['field_card_title_related_covers']); 

        } 

        return $query;  
    } 

    /**  
     * {@inheritdoc}  
    */  
    public function prepareRow(Row $row) { 

        // If field specified, get field revision ID so there aren't issues mapping.  
        if (isset($this->configuration['field_card_title_related_covers'])) {  
            dump("wwwwwwwwwwwwwwwrow");
            $row->setSourceProperty('revision_id', $row->getSourceProperty($this->configuration['field_card_title_related_covers'] . '_revision_id'));  
        } 

            // Get field API field values.  
        foreach (array_keys($this->getFields('paragraphs_item', 'contact')) as $field) { 
            dump("aquiiiii fieldsss");
            $item_id = $row->getSourceProperty('item_id');  
            $revision_id = $row->getSourceProperty('revision_id');  
            $row->setSourceProperty($field, $this->getFieldValues('paragraphs_item', $field, $item_id, $revision_id)); 

        }  
        return parent::prepareRow($row);  
    } 

    /**  
     * {@inheritdoc}  
    */  
    public function fields() {  
        dump("fieldss functinnn");
        $fields = [  
            'item_id' => $this->t('Item ID'),  
            'revision_id' => $this->t('Revision ID'),  
            'field_card_title_related_covers' => $this->t('Name of field'),  
        ];  
        return $fields;  
    } 

    /**  
     * {@inheritdoc}  
    */  
    public function getIds() {  
        dump("getsssids");
        $ids['item_id']['type'] = 'integer';  
        $ids['item_id']['alias'] = 'fci';  
        return $ids;  
    } 
} 