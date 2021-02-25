<?php

namespace Drupal\content_authors\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class AuthorsTypeForm.
 */
class AuthorsTypeForm extends EntityForm {

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);

    $authors_type = $this->entity;
    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label'),
      '#maxlength' => 255,
      '#default_value' => $authors_type->label(),
      '#description' => $this->t("Label for the Authors type."),
      '#required' => TRUE,
    ];

    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $authors_type->id(),
      '#machine_name' => [
        'exists' => '\Drupal\content_authors\Entity\AuthorsType::load',
      ],
      '#disabled' => !$authors_type->isNew(),
    ];

    /* You will need additional form elements for your custom properties. */

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $authors_type = $this->entity;
    $status = $authors_type->save();

    switch ($status) {
      case SAVED_NEW:
        $this->messenger()->addMessage($this->t('Created the %label Authors type.', [
          '%label' => $authors_type->label(),
        ]));
        break;

      default:
        $this->messenger()->addMessage($this->t('Saved the %label Authors type.', [
          '%label' => $authors_type->label(),
        ]));
    }
    $form_state->setRedirectUrl($authors_type->toUrl('collection'));
  }

}
