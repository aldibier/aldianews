<?php

namespace Drupal\al_dia_trending\Plugin\Block;

use Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\Component\Serialization\Json;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormState;
use Drupal\Core\Block\BlockBase;

/**
 * Class TrendingBlock.
 *
 * @Block(
 *   id = "anonymous_comments",
 *   admin_label = @Translation("Trending Block"),
 * )
 */

class TrendingBlock extends  BlockBase implements ContainerFactoryPluginInterface {



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
        '#markup' => '<p class="text-anonymous-comment">We don’t want to miss what you have to say. Please,</p>',
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
