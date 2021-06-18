<?php

namespace Drupal\al_dia_rechpack\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\group\Entity\GroupInterface;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Database\Connection;
use Drupal\Core\Session\AccountProxy;
use Drupal\Core\Mail\MailManagerInterface;
use Drupal\Core\Render\RendererInterface;


/**
 * Render json node.
 */
class ReturnPayPal extends ControllerBase {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * Variable para formatear conexion con la base de datos.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;

  /**
   * A proxied implementation of AccountInterface.
   *
   * @var \Drupal\Core\Session\AccountProxy
   */
  protected $accountProxy;

  /**
   * The mail manager.
   *
   * @var \Drupal\Core\Mail\MailManagerInterface
   */
  protected $mailManager;

  /**
   * The renderer service.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * {@inheritdoc}
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, Connection $connection, AccountProxy $account_proxy, MailManagerInterface $mail_manager, RendererInterface $renderer) {
    $this->entityTypeManager = $entity_type_manager;
    $this->database = $connection;
    $this->accountProxy = $account_proxy;
    $this->mailManager = $mail_manager;
    $this->renderer = $renderer;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager'),
      $container->get('database'),
      $container->get('current_user'),
      $container->get('plugin.manager.mail'),
      $container->get('renderer')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function url(Request $request = NULL) {
    $id = $request->get('subscription_id');
    $user = $this->entityTypeManager->getStorage('user')->load($this->accountProxy->id());
    $id_user = $this->accountProxy->id();
    //$email_user = $this->accountProxy->getEmail();
    //ksm($id_user);
    //Consulto id del usuario que coincida con el id de la suscripción de la ruta
    $query = $this->database->select('user__field_id_subscription', 'ufis');
    $query->fields("ufis", ["entity_id"]);
    $query->condition("ufis.entity_id", $id_user, "=");
    $results = $query->execute()->fetchObject();

    if ($results) {
      $email_user = $this->accountProxy->getEmail();
      //ksm($email_user);
    }
    if ($email_user) {
      //email
      $module = 'al_dia_rechpack';
      $key = 'return_paypal_active';
      $to = $email_user;
      $theme = [
        '#theme' => 'return_paypal_active_mail',
        '#email' => $email_user,
      ];
      $theme_message = $this->renderer->renderPlain($theme);
      $stylesheet = file_get_contents(drupal_get_path('module', 'al_dia_rechpack') . '/dist/css/remail.css');
      $params['message'] = $theme_message;
      $params['title'] = 'Thank you for Subscribe at Al Día News';
      $params['css'] = $stylesheet;
      $this->mailManager->mail($module, $key, $to, "es", $params, NULL, TRUE);
    }
    return [
      '#theme' => 'return_paypal_active',
      '#email' => $email_user,
    ];

  }

    /**
   * {@inheritdoc}
   */
  public function cancel(Request $request = NULL) {

    return [];
  }

}