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
 *   id = "lead"
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
class Lead extends ProcessPluginBase {
  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    //dump($value);
    // remove HTML tags and trim to 170 chars
    $value = Unicode::truncate(trim(Html::decodeEntities(strip_tags($value))), 20, TRUE, TRUE);
    
    return $value;
  }
}