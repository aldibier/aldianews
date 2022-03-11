<?php

namespace Drupal\al_dia_migration\Plugin\migrate\process;

use Drupal\migrate\MigrateException;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\Row;
use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\Unicode;


/**
 * Perform custom value transformations to the Lead Field.
 *
 * @MigrateProcessPlugin(
 *   id = "type_thought_leaders"
 * )
 *
 * To do custom value transformations use the following:
 *
 * @code
 * field_text:
 *   plugin: lead
 *   source: text
 * @endcode
 *
 */
class TypeThoughtLeaders extends ProcessPluginBase {
  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    
    // remove HTML tags and trim to 170 chars
    //$value = Unicode::truncate(trim(Html::decodeEntities(strip_tags($value))), 20, TRUE, TRUE);
    $category= $row->getSourceProperty("field_topics")[0]['tid'];
    dump($category);
    dump($row->getSourceProperty("nid"));
    dump("ss");
    if($category==1){
      $value = 1;
    }
    else{
      $value = '';
    }

    return $value;
  }
}