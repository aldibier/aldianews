<?php

/**
 * @file
 * CustomModalController class.
 */

namespace Drupal\al_dia_news_general\Controller;

use Drupal\Core\Ajax\AjaxResponse;
use Drupal\Core\Ajax\OpenModalDialogCommand;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Render\RendererInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;
use Drupal\Component\Serialization\Json;
use Drupal\user\Entity\User;


class CustomModalController extends ControllerBase {



  /**
   * Variable para consultar datos del admin.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * {@inheritdoc}
   */
  public function __construct(AccountProxyInterface $user) {
    $this->currentUser = $user;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('current_user')
    );
  }

  public function modal($type) {
    $options = [
      'dialogClass' => 'popup-dialog-class',
      'width' => '50%',
    ];
    if ($type == 'user') {
      $output = $this->userInformation();
      $title = $this->t('ACCOUNT INFORMATION');
    }
    elseif ($type == 'home') {
      $output = $this->home();
      $title = $this->t('YOU JUST HAVE RESET YOUR PASSWORD SUCCESSFULLY');
    }
    $response = new AjaxResponse();
    $response->addCommand(new OpenModalDialogCommand($title, $output, $options));

    return $response;
  }
  public function home() {
    return [
      '#markup' => '<p>Keep exploring the best content of the Latino multicultural experience.</p><button name="close-modal">OK</button>'
    ];
  }
  public function userInformation() {
    $items = [];
    if ($this->currentUser->isAuthenticated()) {
      //$user_name = $this->currentUser->getAccountName();
      $user = User::load($this->currentUser->id());
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
            'data-dialog-options' => Json::encode(['dialogClass' => 'popup-edit-user'],['width' => 550]),
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
            'data-dialog-options' => Json::encode(['dialogClass' => 'popup-cancel-account'],['width' => 550]),
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