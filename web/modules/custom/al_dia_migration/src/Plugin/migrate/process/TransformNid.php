<?php

namespace Drupal\al_dia_migration\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;
use Drupal\node\Entity\Node;

/**
 *
 * @MigrateProcessPlugin(
 *   id = "transform_nid",
 *   handle_multiples = TRUE
 * )
 */
class TransformNid extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {

    //$nid= $row->getSourceProperty("nid");
    //$node = Node::load(10744);
    if(is_array($value)){
      $new_value = $value[0];
    }
    else{
      $new_value = $value;
    }
    //dump($row->getSource());
    return $new_value;
  }

}