<?php

namespace Drupal\al_dia_migration\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;
use Drupal\node\Entity\Node;

/**
 *
 * @MigrateProcessPlugin(
 *   id = "debugger",
 *   handle_multiples = TRUE
 * )
 */
class Debugger extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {

    //$nid= $row->getSourceProperty("nid");
    //$node = Node::load(10744);
    dump($row);

    //dump($row->getSource());
    return false;
  }

}