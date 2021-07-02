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
    // Get the database query from the UrlAlias class.
    $query = parent::query();

    // Add our condition to filter for only node paths.
    $query->condition('ua.source', 'node/%', 'LIKE');

    // Return the modified query.
    return $query;
  }

  public function prepareRow(Row $row) {
    // Get the source field from the row.
    $source = $row->getSourceProperty('source');

    // If it matches node/nodeID...
    if (preg_match('/node\/[0-9]+/', $source)) {
      // Get the node ID from the string.
      $nid = substr($source, 5);

      // Provide it to the migration as the "nid" field.
      $row->setSourceProperty('nid', $nid);
    }

    // return the result.
    return parent::prepareRow($row);
  }

}
