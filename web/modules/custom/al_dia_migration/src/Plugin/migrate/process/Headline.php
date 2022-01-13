<?php

namespace Drupal\al_dia_migration\Plugin\migrate\process;

use Drupal\migrate\ProcessPluginBase;
use Drupal\migrate\MigrateExecutableInterface;
use Drupal\migrate\Row;
use Drupal\node\Entity\Node;
use Drupal\Component\Utility\Html;
use Drupal\Component\Utility\Unicode;

/**
 *
 * @MigrateProcessPlugin(
 *   id = "headline",
 *   handle_multiples = TRUE
 * )
 */
class Headline extends ProcessPluginBase {

  /**
   * {@inheritdoc}
   */
  public function transform($value, MigrateExecutableInterface $migrate_executable, Row $row, $destination_property) {

    //$nid= $row->getSourceProperty("nid");
    //$node = Node::load(10744);
    //$value = str_replace("%[[{%}]]%",'aly',$value);
    
    $tmp = $row->get('field_banner_headline');

    if(isset($tmp[0]['value'])){
      $output = $tmp[0]['value'];
    }
    else{
      $output = $value;
    }
    //dump($row->getSource());
    return Unicode::truncate(trim(Html::decodeEntities($output)), 20, TRUE, TRUE);;
  }

}