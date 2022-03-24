<?php

namespace Drupal\al_dia_news_general\Plugin\DsField\Node;

use Drupal\ds\Plugin\DsField\DsFieldBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Url;
use Drupal\Core\Form\FormState;
use Drupal\Core\Form\FormBuilder;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Entity\EntityFormBuilderInterface;




/**
 * Recorta título a 40
 *
 * @DsField(
 *   id = "trim_title",
 *   title = @Translation("Trim title"),
 *   entity_type = "node"
 * )
 */
class TrimTitle extends DsFieldBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $entity = $this->entity();
    $title = $entity->getTitle();

    return [
      '#type' => 'html_tag',
      '#tag' => 'h3',
      '#value' => strlen($title) > 40 ? text_summary($title, NULL, 40) . "..." : $title
    ];
  }

}
