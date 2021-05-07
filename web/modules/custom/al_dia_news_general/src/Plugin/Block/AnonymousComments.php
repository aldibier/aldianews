<?php

namespace Drupal\al_dia_news_general\Plugin\Block;

use Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\Component\Serialization\Json;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormState;
use Drupal\Core\Database\Connection;
use Drupal\Core\Form\FormBuilder;
use Drupal\Core\Block\BlockBase;

/**
 * Class AnonymousComments.
 *
 * @Block(
 *   id = "anonymous_comments",
 *   admin_label = @Translation("Anonymous Comments"),
 * )
 */

class AnonymousComments extends  BlockBase implements ContainerFactoryPluginInterface {

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
    $user = \Drupal::currentUser();
    $items = [];
      $items[] = [
        '#markup' => '<p class="text-anonymous-comment">We don’t want to miss what you have to say. Please,</p>',
      ];
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
        '#markup' => '<span class="text-anonymous-comment">or</span>',
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
        '#markup' => '<span class="text-anonymous-comment">to comment</span>',

      ];

    
      //$form['comment_form'] = $this->entityFormBuilder->getForm($comment);
    return [
      '#theme' => 'item_list',
      '#items' => $items,
      '#cache' => ["max-age" => 0],
      '#attributes' => [
        'class' => [
          'block-comments-anonymous',
        ],
      ],

    ];
  }
  

}