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
use Drupal\Core\Url;
use Drupal\Core\Link;
use Drupal\Component\Serialization\Json;
use Drupal\node\NodeInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;



class AboutAlDiaWebform extends ControllerBase {

    /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * {@inheritdoc}
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->entityTypeManager = $entity_type_manager;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
        $container->get('entity_type.manager')
    );
  }

  public function sponsorship (NodeInterface $node = NULL) {
    $webform = $this->entityTypeManager->getStorage('webform')->load("sponsorship_upcoming_event");
    $webform->entity_type = 'node';
    $webform->entity_id = $node->id();
    $webform = $webform->getSubmissionForm();

    return $webform;
  }

  public function register (NodeInterface $node = NULL) {
    $webform = $this->entityTypeManager->getStorage('webform')->load("register");
    $webform->entity_type = 'node';
    $webform->entity_id = $node->id();
    $webform = $webform->getSubmissionForm();

    return $webform;
  }

}