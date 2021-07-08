<?php

namespace Drupal\al_dia_migration\Plugin\migrate\source;

use Drupal\path\Plugin\migrate\source\UrlAliasBase;
use Drupal\migrate\Row;


/**
 * URL aliases source from database.
 *
 * @MigrateSource(
 *   id = "urls_redirect",
 *   source_module = "path"
 * )
 */
class UrlsRedirect extends UrlAliasBase {

  /**
   * {@inheritdoc}
   */
  public function fields() {

    $fields = parent::fields();
    $fields['source'] = $this->t('The internal system path.');
    $fields['alias'] = $this->t('The path alias.'); 
      
    return $fields;
  }

  public function query() {
    
    $query = parent::query();
    $query->groupBy('ua.source');
    $query->condition('ua.source', 'node/%', 'LIKE');

    return $query;
  }

  public function prepareRow(Row $row) {
    
    $source = $row->getSourceProperty('source');
    if (preg_match('/node\/[0-9]+/', $source)) {
      $nid = substr($source, 5);
      $row->setSourceProperty('nid', $nid);
    }

    return parent::prepareRow($row);
  }

}
