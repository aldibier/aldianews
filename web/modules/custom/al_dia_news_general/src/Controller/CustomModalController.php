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
      $options = [
        'dialogClass' => 'popup-class-user-information',
        'width' => '50%',
      ];
    }
    elseif ($type == 'home') {
      $output = $this->home();
      $title = $this->t('YOU JUST HAVE RESET YOUR PASSWORD SUCCESSFULLY');
      $options = [
        'dialogClass' => 'popup-class-restore-pwd',
        'width' => '50%',
      ];
    }
    elseif ($type == 'cancel') {
      $output = $this->cancel();
      $title = $this->t('YOU HAVE CANCELED YOUR ACCOUNT');
      $options = [
        'dialogClass' => 'popup-class-cancel-account',
        'width' => '50%',
      ];
    }
    $response = new AjaxResponse();
    $response->addCommand(new OpenModalDialogCommand($title, $output, $options));

    return $response;
  }
  public function home() {
    return [
      '#markup' => $this->t('<p class="pop-up-home-reset">Keep exploring the best content of the Latino multicultural experience.</p><p class="close-button-modal">OK</p>'),
    ];
  }
  public function cancel() {
    return [
      '#markup' => $this->t('<p class="pop-up-home-cancel-account">You can continue enjoying the best of the American Latino experience through our standart content on the website.</p><p class="close-button-modal">OK</p>'),
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

      $items['info'] = [
        '#type' => 'container',
        '#weight' => 100000,
        '#attributes' => [
          'class' => [
              'name-user-info',
          ],
        ],
      ];
      $items['info'][] = [
          '#markup' => $r_period . " ".$last_name,
          '#attributes' => [
              'class' => [
                  'info-user-popup',
              ],
          ],
      ];
      $items['container'] = [
        '#type' => 'container',
        '#weight' => 100000,
        '#attributes' => [
          'class' => [
              'container-email-edit',
          ],
        ],
      ];
      $items['container'][] = [
        '#markup' => $email_user,
        '#attributes' => [
          'class' => [
              'email-user-popup',
              'email-info'
          ],
        ],
      ];
      $items['container'][] = [
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
            'data-dialog-options' => Json::encode(['dialogClass' => 'edit-info-user'],['width' => 550]),
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
            'cancel-account-modal',
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
