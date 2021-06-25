<?php

namespace Drupal\al_dia_migration\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;
use Drupal\node\Entity\Node;

/**
 *
 * @MigrateProcessPlugin(
 *   id = "image_relation",
 *   handle_multiples = TRUE
 * )
 */
class ImageRelation extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {

    //dump($value[0]["fid"]);  
    //dump($value);
    if(isset($value[0]["fid"])){
        return $value[0]["fid"];
    }
    
    return false;
  }

}