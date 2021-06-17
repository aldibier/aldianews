<?php

namespace Drupal\al_dia_rechpack\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class RechPack WS Settings form.
 */
class ServicesForm extends ConfigFormBase {

  /**
   * Constructs a \Drupal\system\ConfigFormBase object.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The factory for configuration objects.
   */
  public function __construct(ConfigFactoryInterface $config_factory) {
    $this->setConfigFactory($config_factory);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('config.factory')
    );
  }

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'al_dia_rechpack.services_form',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'services_form_settings_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('al_dia_rechpack.services_form');

    $description = $this->t('Trial Months');
    $form['services_trial_months'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Number of trial months'),
      '#default_value' => $config->get('services_trial_months'),
      '#description' => $description,
    ];

    $description = $this->t('Return URL');
    $form['services_return_url'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Subscription return url'),
      '#default_value' => $config->get('services_return_url'),
      '#description' => $description,
    ];
    $description = $this->t('Unsubscribe Url');
    $form['services_unsubscribe_url'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Unsubscribe Url'),
      '#default_value' => $config->get('services_unsubscribe_url'),
      '#description' => $description,
    ];


    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('al_dia_rechpack.services_form');
    $form_state->cleanValues();
    $config->setData($form_state->getValues());
    $config->save();
    parent::submitForm($form, $form_state);
  }

}
