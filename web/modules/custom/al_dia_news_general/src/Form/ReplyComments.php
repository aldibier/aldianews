<?php

namespace Drupal\al_dia_news_general\Form;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Url;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Entity\EntityFormBuilderInterface;
use Drupal\Core\Render\RendererInterface;
use Drupal\Core\Session\AccountProxy;

/**
 * Render json node.
 */
class ReplyComments extends FormBase {


   /**
   * The entity field manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The EntityFormBuilder.
   *
   * @var \Drupal\Core\Entity\EntityFormBuilder
   */
  protected $entityFormBuilder;

  /**
   * The renderer service.
   *
   * @var \Drupal\Core\Render\RendererInterface
   */
  protected $renderer;

  /**
   * A proxied implementation of AccountInterface.
   *
   * @var \Drupal\Core\Session\AccountProxy
   */
  protected $accountProxy;

  /**
   * {@inheritdoc}
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, EntityFormBuilderInterface $entity_form_builder, RendererInterface $renderer, AccountProxy $account_proxy
  ) {
    $this->entityTypeManager = $entity_type_manager;
    $this->entityFormBuilder = $entity_form_builder;
    $this->renderer = $renderer;
    $this->accountProxy = $account_proxy;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager'),
      $container->get('entity.form_builder'),
      $container->get('renderer'),
      $container->get('current_user')
    );
  }

  /**
   * {@inheritdoc}
   *
   * @codeCoverageIgnore
   */
  public function getFormId() {
    return 'al_dia_news_reply_comments';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, $data = null) {
    if ($this->accountProxy->isAuthenticated()) {

      $form['data'] = [
        '#type' => 'hidden',
        '#value' => $data,
      ];
      $form['submit'] = [
        '#type' => 'submit',
        '#value' => $this->t('REPLY'),
        '#name' => 'comment_reply_' . $data['pid'], 
        '#submit' => ['::submitAjax'],
        '#ajax' => [
          'callback' => '::wrapperComment',
          'wrapper' => 'form-comments-' . $data['pid'],
        ],
        '#attributes' => [
          'class' => [
            'form-comments-' . $data['pid'],
          ],
        ],
      ];
  
      $form['container'] = [
        '#type' => 'container',
        '#attributes' => [
          'id' => [
            'form-comments-' . $data['pid'],
          ],
        ],
      ];
      if ($form_state->get('send_comment')) {
      //Show the actual reply box.
        if ($data) {
          $form['container']['comment'] = [
            '#type' => 'textarea',
            '#required' => TRUE,
          ];
      
          $form['container']['submit_post'] = [
            '#type' => 'submit',
            '#value' => $this->t('POST ANSWER'),
            '#submit' => ['::submitComment'],
            '#name' => 'post_answer_' . $data['pid'],
          ];
          
        }
      }
    } 
    $form_state->setRequestMethod('POST');
    $form_state->setCached(TRUE);
    
  //$entity_id = null, $pid = null, $entity_type = null, $field_name = null
      return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {

  }
  /**
   * {@inheritdoc}
   */
  public function submitComment(array &$form, FormStateInterface $form_state) {
    $data = $form_state->getValue('data');
    $comment = $this->entityTypeManager->getStorage('comment')->create([
      'entity_id' => $data['entity_id'],
      'pid' => $data['pid'],
      'entity_type' => $data['entity_type'],
      'field_name' => $data['field_name'],
      'uid' => $this->accountProxy->id(),
      'mail' => $this->accountProxy->getEmail(),
    ]);
    $comment->set('field_comment_body', $form_state->getValue('comment'));
    //$comment->comment_body->format = 'full_html';
    $comment->save();
    ksm($form_state->getTriggeringElement()['#name']);
    ksm($form_state->getValue('data'));
    
  }
  /**
   * {@inheritdoc}
   */
  public function submitAjax(array &$form, FormStateInterface $form_state) {
    $form_state->set('send_comment', TRUE);
    $form_state->setRebuild();
  }
  /**
   * {@inheritdoc}
   */
  public function wrapperComment(array &$form, FormStateInterface $form_state) {
    return $form['container'];
  }


}