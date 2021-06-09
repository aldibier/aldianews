<?php

namespace Drupal\al_dia_news_general\Plugin\Block;

use Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\Component\Serialization\Json;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormState;
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
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $user = \Drupal::currentUser();
    $items = [];
    $items[] = [
        '#theme' => 'anonymous_comment_form',
    ];
    $items[] = [
        '#markup' => t('<p class="text-anonymous-comment">Join the discussion! Leave a comment.</p>'),
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
        '#markup' => $this->t('<span class="text-anonymous-comment">or</span>'),
    ];
    $items[] = [
        '#type' => 'link',
        '#title' => $this->t('REGISTER'),
        '#url' => Url::fromRoute('user.register'),
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
        '#markup' => $this->t('<span class="text-anonymous-comment">to comment.</span>'),
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
