<?php

namespace Drupal\al_dia_news_general\Plugin\Block;

use Drupal\Core\Url;
use Drupal\node\Entity\Node;
use Drupal\Component\Serialization\Json;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Form\FormState;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Session\AccountProxyInterface;


/**
 * Class MenuUserItem.
 *
 * @Block(
 *   id = "menu_user_item",
 *   admin_label = @Translation("Menu User Item"),
 * )
 */

class MenuUserItem extends  BlockBase implements ContainerFactoryPluginInterface {


/**
   * Variable para consultar datos del admin.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;
  
/**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, AccountProxyInterface $user) {
    $this->currentUser = $user;
    parent::__construct($configuration, $plugin_id, $plugin_definition);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('current_user')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $items = [];
    if ($this->currentUser->isAuthenticated()) {
        $user_name = $this->currentUser->getAccountName();

        $items[] = [
            '#markup' => $user_name,
            '#attributes' => [
                'class' => [
                    'author-comment',
                ],
            ],
        ];
        $items[] = [
          '#type' => 'link',
          '#title' => $this->t('Change password'),
          '#url' => Url::fromRoute('user.pass'),
          '#attributes' => [
              'class' => [
              'use-ajax',
              'user-pass',
              ],
              'data-dialog-type' => 'modal',
              'data-dialog-options' => Json::encode(['dialogClass' => 'popup-login'],['width' => 550]),
          ],
      ];
        $items[] = [
          '#type' => 'link',
          '#title' => $this->t('Log out'),
          '#url' => Url::fromRoute('user.logout'),
          '#attributes' => [
              'class' => [
              'log-out',
              ],
          ],
      ];
      
    }else{
        $items[] = [
            '#type' => 'link',
            '#title' => $this->t('LOG IN'),
            '#url' => Url::fromRoute('user.login'),
            '#attributes' => [
                'class' => [
                'use-ajax',
                'log-in',
                ],
                'data-dialog-type' => 'modal',
                'data-dialog-options' => Json::encode(['dialogClass' => 'popup-login'],['width' => 550]),
            ],
        ];
    }
    
    return [
      '#theme' => 'item_list',
      '#items' => $items,
      '#cache' => ["max-age" => 0],
      '#attributes' => [
        'class' => [
          'user-account-menu',
        ],
      ],
    ];
  }
  

}