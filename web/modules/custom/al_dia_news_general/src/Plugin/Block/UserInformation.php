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
use Drupal\Core\Link;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Class UserInformation.
 *
 * @Block(
 *   id = "user_information",
 *   admin_label = @Translation("User information"),
 * )
 */

class UserInformation extends  BlockBase implements ContainerFactoryPluginInterface {


  /**
   * Variable para consultar datos del admin.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;


  /**
   * Requeststack service.
   *
   * @var \Symfony\Component\HttpFoundation\RequestStack
   */
  public $requestStack;
  
/**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, AccountProxyInterface $user, RequestStack $requestStack) {
    $this->currentUser = $user;
    $this->requestStack = $requestStack;
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
      $container->get('current_user'),
      $container->get('request_stack')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $modal =  $this->requestStack->getParentRequest()->get('modal') ?? FALSE;
    $items = [];
    if ($this->currentUser->isAuthenticated()) {
      //$user_name = $this->currentUser->getAccountName();
      $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
      $r_period = $user->field_first_name->value;
      $last_name = $user->field_last_name->value;      
      $email_user = $user->getEmail();

      $items[] = [
          '#markup' => $r_period. $last_name,
          '#attributes' => [
              'class' => [
                  'author-comment',
              ],
          ],
      ];
      $items[] = [
        '#markup' => $email_user,
        '#attributes' => [
            'class' => [
                'account-comment',
            ],
        ],
      ];
      $items[] = [
        '#type' => 'link',
        '#title' => $this->t('Edit'),
        '#url' => Url::fromRoute('entity.user.edit_form', [ 
          'user' => $user->id(), 
        ]),
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
        '#title' => $this->t('Cancel my Account'),
        '#url' => Url::fromRoute('entity.user.cancel_form', [ 
          'user' => $user->id(), 
        ]),
        '#attributes' => [
            'class' => [
            'use-ajax',
            'user-pass',
            ],
            'data-dialog-type' => 'modal',
            'data-dialog-options' => Json::encode(['dialogClass' => 'popup-login'],['width' => 550]),
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