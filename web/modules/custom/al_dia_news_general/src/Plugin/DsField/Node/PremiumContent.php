<?php

namespace Drupal\al_dia_news_general\Plugin\DsField\Node;

use Drupal\ds\Plugin\DsField\DsFieldBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Url;
use Drupal\Core\Form\FormState;
use Drupal\Core\Form\FormBuilder;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Entity\EntityFormBuilderInterface;




/**
 * Plugin that renders the author of a Documentos.
 *
 * @DsField(
 *   id = "premium_content_display_custom",
 *   title = @Translation("Custom display Premium Content"),
 *   entity_type = "node"
 * )
 */
class PremiumContent extends DsFieldBase {

  /**
   * The form builder.
   *
   * @var \Drupal\Core\Form\FormBuilder
   */
  protected $formBuilder;
    /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

    /**
   * The entity form builder
   *
   * @var \Drupal\Core\Entity\EntityManagerInterface.
   */
  protected $entityFormBuilder;

  /**
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, FormBuilder $form_builder, EntityTypeManagerInterface $entity_type_manager, EntityFormBuilderInterface $entityFormBuilder
  ) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->formBuilder = $form_builder;
    $this->entityTypeManager = $entity_type_manager;
    $this->entityFormBuilder = $entityFormBuilder;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('form_builder'),
      $container->get('entity_type.manager'),
      $container->get('entity.form_builder')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    //$form_state = (new FormState());
    //$form = $this->formBuilder->getFormId('user_register_form', $form_state);

    // $entity = $this->entityTypeManager->getStorage('user')->create(array());
    // $formObject = $this->entityTypeManager
    //   ->getFormObject('user', 'register')
    //   ->setEntity($entity);
    // $form = $this->formBuilder->getForm($formObject);
    // $variables['register_form'] = \Drupal::service('renderer')->render($form);
    // $variables['#prefix'] = "Hola";

    $build = array();

    $account = $this->entityTypeManager->getStorage('user') ->create(array());
    $build['form'] = $this->entityFormBuilder->getForm($account, 'register');

    $build['form']['account']['mail']['#description'] = t('');
    $build['form']['actions']['submit']['#value'] = t('REGISTER FOR FREE');

    //kint($build['form']['account']);
    // $entity = $this->entity();
    // $uid= $entity->getOwnerId();
    // $uid= $entity->uid->entity;
    // $items = [];
    // $items[] = [
    //     '#type' => 'link',
    //     '#title' => $this->t('REGISTER'),
    //     '#url' => Url::fromRoute('user.register'),
    //     '#attributes' => [
    //       'class' => [
    //         'use-ajax',
    //         'login-anonymous-comment',
    //       ],
    //       'data-dialog-type' => 'modal',
    //       'data-dialog-options' => Json::encode(['dialogClass' => 'popup-edit-comment'],['width' => 550]),
    //     ],
    //   ];
    //ksm($uid->getAccountName());
    return $build;
  }
  
}