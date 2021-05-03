<?php

namespace Drupal\al_dia_news_general\Plugin\DsField\Comment;

use Drupal\ds\Plugin\DsField\DsFieldBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;

/**
 * Plugin that renders the author of a Documentos.
 *
 * @DsField(
 *   id = "comment_author_display_custom",
 *   title = @Translation("Custom display comment author"),
 *   entity_type = "comment"
 * )
 */
class CommentAuthor extends DsFieldBase {


  /**
   * {@inheritdoc}
   */
  public function build() {
    $entity = $this->entity();
    //$uid= $entity->getOwnerId();
    $uid= $entity->uid->entity;

    //ksm($uid->getAccountName());
    return [
        '#markup' => $uid->getAccountName(),
        '#attributes' => [
            'class' => [
              'author-comment',
            ],
          ],
    ];   
  }
  
}