<?php

namespace Drupal\al_dia_news_general\Plugin\DsField\Comment;

use Drupal\ds\Plugin\DsField\DsFieldBase;
use Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\Component\Serialization\Json;

/**
 * Plugin that renders the author of a Documentos.
 *
 * @DsField(
 *   id = "comment_display_custom",
 *   title = @Translation("Custom display comment"),
 *   entity_type = "comment"
 * )
 */
class Comments extends DsFieldBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $entity = $this->entity();
    $user = \Drupal::currentUser();
    $items = [];
    // Check for permission.
    if ($user->hasPermission('administer comments')) {
      $items[] = [
        '#type' => 'link',
        '#title' => $this->t('Delete'),
        '#url' => Url::fromRoute('entity.comment.delete_form', [
          'comment' => $entity->id(),
        ]),
        '#attributes' => [
          'class' => [
            'delete-comment',
          ],
        ],
      ];
      $items[] = [
        '#type' => 'link',
        '#title' => $this->t('Edit'),
        '#url' => Url::fromRoute('entity.comment.edit_form', [
          'comment' => $entity->id(),
        ]),
        '#attributes' => [
          'class' => [
            'edit-comment',
          ],
        ],
      ];
    }

    $items[] = [
    '#type' => 'link',
    '#title' => $this->t('Comment'),
    '#url' => Url::fromRoute('comment.reply', [
        'pid' => $entity->id(),
        'entity_type' => $entity->getCommentedEntityTypeId(),
        'entity' => $entity->getCommentedEntityId(),
        'field_name' => $entity->getFieldName(),
    ]),
    '#attributes' => [
        'class' => [
        'use-ajax',
        'edit-comment',
        ],
        'data-dialog-type' => 'modal',
        'data-dialog-options' => Json::encode(['width' => 550]),
    ],
    ];

    return [
      '#theme' => 'item_list',
      '#items' => $items,
    ];
  }

}