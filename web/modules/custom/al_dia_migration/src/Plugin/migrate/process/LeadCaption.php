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
 *   id = "leadcaption"
 * )
 *
 * To do custom value transformations use the following:
 *
 * @code
 * field_text:
 *   plugin: leadcaption
 *   source: text
 * @endcode
 *
 */
class LeadCaption extends ProcessPluginBase {
  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {
    //dump($value);
    // remove HTML tags and trim to 170 chars
    $value = Unicode::truncate(trim(Html::decodeEntities(strip_tags($value))), 255, TRUE, TRUE);
    
    return $value;
  }
}