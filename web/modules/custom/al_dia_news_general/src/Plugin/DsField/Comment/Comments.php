<?php

namespace Drupal\al_dia_news_general\Plugin\DsField\Comment;

use Drupal\ds\Plugin\DsField\DsFieldBase;
use Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\Component\Serialization\Json;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormState;
use Drupal\Core\Database\Connection;
use Drupal\Core\Form\FormBuilder;

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
   * Consulta a la base de datos.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $dataBase;

  /**
   * The form builder.
   *
   * @var \Drupal\Core\Form\FormBuilder
   */
  protected $formBuilder;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, Connection $data_base, FormBuilder $form_builder
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->dataBase = $data_base;
    $this->formBuilder = $form_builder;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('database'),
      $container->get('form_builder')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $entity = $this->entity();
    $user = \Drupal::currentUser();
    $items = [];
    if ($user->isAuthenticated()) {
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
              'use-ajax',
            ],

          'data-dialog-type' => 'modal',
          'data-dialog-options' => Json::encode(['dialogClass' => 'popup-delete-comment'],['width' => 550]),
        ],
        ];
        $items[] = [
          '#type' => 'link',
          '#title' => $this->t('EDIT'),
          '#url' => Url::fromRoute('entity.comment.edit_form', [
            'comment' => $entity->id(),
          ]),
          '#attributes' => [
            'class' => [
              'use-ajax',
              'edit-comment',
            ],
            'data-dialog-type' => 'modal',
            'data-dialog-options' => Json::encode(['dialogClass' => 'popup-edit-comment'],['width' => 550]),
          ],
        ];
        // $items[] = [
        //   '#type' => 'link',
        //   '#title' => $this->t('Edit'),
        //   '#url' => Url::fromRoute('entity.comment.edit_form', [
        //     'comment' => $entity->id(),
        //   ]),
        //   '#attributes' => [
        //     'class' => [
        //       'edit-comment',
        //     ],
        //   ],
        // ];
        $items[] = [
          '#markup' => '<div class="container-reply"></div>',
        ];
        $items[] = [
          '#markup' => $this->t('<span class="container-show-hide"><span class="show">SEE </span><span class="hide">HIDE </span><span class="num"></span> ANSWERS</span>'),
          '#attributes' => [
            'class' => [
              'show-hide-comment',
            ],
          ],
        ];
      }
    }else {
      $items[] = [
        '#type' => 'link',
        '#title' => $this->t('LOG IN'),
        '#url' => Url::fromRoute('user.login'),
        '#attributes' => [
          'class' => [
            'use-ajax',
            'login-anonymous-comment',
          ],
          'data-dialog-type' => 'modal',
          'data-dialog-options' => Json::encode(['dialogClass' => 'popup-login'],['width' => 550]),
        ],
      ];

      $items[] = [
        '#markup' => $this->t('<span class="text-anonymous-comment">or</span>'),
      ];

      $items[] = [
        '#type' => 'link',
        '#title' => $this->t('REGISTER'),
        '#url' => Url::fromRoute('user.register'),
        '#attributes' => [
          'class' => [
            'use-ajax',
            'register-anonymous-comment',
          ],
          'data-dialog-type' => 'modal',
          'data-dialog-options' => Json::encode(['dialogClass' => 'register-popup'],['width' => 550]),
        ],
      ];

      $items[] = [
        '#markup' => $this->t('<span class="text-anonymous-comment">to reply</span>'),
      ];

      $items[] = [
        '#markup' => $this->t('<span class="container-show-hide"><span class="show">SEE </span><span class="hide">HIDE </span><span class="num"></span> ANSWERS</span>'),
        '#attributes' => [
          'class' => [
            'show-hide-comment',
          ],
        ],
      ];
    }


    $query = $this->dataBase->select('comment_field_data', 'c');
    $query->addField("c", "cid");
    $query->innerJoin("comment_field_data", "p", "c.pid = p.cid");
    $query->innerJoin("comment_field_data", "a", "p.pid = a.cid");
    $query->condition("c.cid", $entity->id(), "=");
    $result = $query->execute()->fetchObject();

    if(!$result){
      // $comment = $this->entityTypeManager->getStorage('comment')->create([
      //   'entity_id'=> $entity->getCommentedEntityId(),
      //   'pid'=> $entity->id(),
      //   'entity_type'=> $entity->getCommentedEntityTypeId(),
      //   'field_name'=> $entity->getFieldName()
      // ]);
      // $form = $this->entityFormBuilder->getForm($comment);
      // $form['actions']['submit']['#value'] = $this->t("POST ANSWER");
      $items[] = $this->formBuilder->getForm('Drupal\al_dia_news_general\Form\ReplyComments', [
        'entity_id'=> $entity->getCommentedEntityId(),
        'pid'=> $entity->id(),
        'entity_type'=> $entity->getCommentedEntityTypeId(),
        'field_name'=> $entity->getFieldName()
      ]);
    }

      //$form['comment_form'] = $this->entityFormBuilder->getForm($comment);
    return [
      '#theme' => 'item_list',
      '#items' => $items,
      '#cache' => ["max-age" => 0],

    ];
  }

}
