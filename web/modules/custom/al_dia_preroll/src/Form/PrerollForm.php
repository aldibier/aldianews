<?php
/**
 * @file
 * Contains Drupal\al_dia_preroll\Form\Preroll.
 */

namespace Drupal\al_dia_preroll\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

class PrerollForm extends ConfigFormBase {

  /**
   * @return string[]
   */
  protected function getEditableConfigNames() {
    return ['al_dia_preroll.adminsettings'];
  }

  /**
   * @return string
   */
  public function getFormId() {
    return 'al_dia_preroll_form';
  }

  /**
   * @param array $form
   * @param FormStateInterface $form_state
   * @return array
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('al_dia_preroll.adminsettings');
    $vasts = $config->get('vast');
    $form['#attached']['library'][] = 'core/drupal.ajax';
    $form['#tree'] = TRUE;

    $form['tags'] = [
      '#type' => 'fieldset',
      '#prefix' => '<div id="fieldset-wrapper">',
      '#suffix' => '</div>',
    ];

    if (empty($vasts)) {
      $form['tags']['initial_message'] = array(
        '#type' => 'markup',
        '#markup' => '<p>No tag has been added</p>',
      );
    }

    if (count($vasts) > 0) {
      $form['tags']['random_order'] = [
        '#type' => 'checkbox',
        '#title' => $this->t('Random order'),
        '#default_value' => $config->get('random_order') ?? FALSE
      ];
    }

    $i = 0;
    foreach ($vasts as $vast) {
      ++$i;
      $form['tags']['vast_' . $i] = [
        '#type' => 'details',
        '#title' => $this->t("Vast " . $i)
      ];

      $form['tags']['vast_' . $i]['path_vast_' . $i] = [
        '#type' => 'textarea',
        '#rows' => 2,
        '#title' => $this->t('Generated vast tag'),
        '#default_value' => $vast['path_vast_' . $i]
      ];

      $form['tags']['vast_' . $i]['pos_vast_' . $i] = [
        '#type' => 'number',
        '#title' => $this->t('Position vast tag should be played back'),
        '#default_value' => $vast['pos_vast_' . $i]
      ];

      if (!isset($vast['sub_vast_' . $i]) || count($vast['sub_vast_' . $i]) <= 0) {
        $form['tags']['vast_' . $i]['initial_message'] = array(
          '#type' => 'markup',
          '#markup' => '<p>No sub tags has been added</p>',
        );
      }

      $j = 0;
      if (isset($vast['sub_vast_' . $i])) {
        foreach ($vast['sub_vast_' . $i] as $subVast) {
          ++$j;
          $form['tags']['vast_' . $i]['sub_vast_' . $j] = [
            '#type' => 'details',
            '#title' => $this->t("Sub vast " . $j)
          ];

          $form['tags']['vast_' . $i]['sub_vast_' . $j]['path_sub_vast_' . $j] = [
            '#type' => 'textarea',
            '#rows' => 2,
            '#title' => $this->t('Generated vast tag'),
            '#default_value' => $subVast['path_sub_vast_' . $j]
          ];

          $form['tags']['vast_' . $i]['sub_vast_' . $j]['pos_sub_vast_' . $j] = [
            '#type' => 'number',
            '#title' => $this->t('Position vast tag should be played back'),
            '#default_value' => $subVast['pos_sub_vast_' . $j]
          ];
        }
      }
      $this->buildButtonsAddAndRem($form['tags']['vast_' . $i], 'sub_vast__' . $i . '__' . $j, 'sub vast');
    }

    $this->buildButtonsAddAndRem($form['tags'], 'vast', 'vast');

    return parent::buildForm($form, $form_state);
  }

  /**
   * @param array $form
   * @param FormStateInterface $form_state
   */
  public function addOneTag(array &$form, FormStateInterface $form_state) {
    $element = explode('__', $form_state->getTriggeringElement()['#name']);
    $config = $this->config('al_dia_preroll.adminsettings');
    $vast = $config->get('vast');
    if ($element[0] == 'add_vast') {
      $count = count($vast);
      $vast['vast_' . ($count + 1)] = [
        'path_vast_' . ($count + 1) => "",
        'pos_vast_' . ($count + 1) => ""
      ];
      array_push($vast);
    }
    else {
      $vast["vast_$element[1]"]["sub_vast_$element[1]"][] = [
        "path_sub_vast_" . ($element[2] + 1) => "",
        "pos_sub_vast_" . ($element[2] + 1) => ""
      ];
      array_push($vast);
    }

    $config->set('vast', $vast)->save();
    $form_state->setRebuild(TRUE);
  }

  /**
   * @param array $form
   * @param FormStateInterface $form_state
   */
  public function remOneTag(array &$form, FormStateInterface $form_state) {
    $element = explode('__', $form_state->getTriggeringElement()['#name']);
    $config = $this->config('al_dia_preroll.adminsettings');
    $vast = $config->get('vast');
    if ($element[0] == 'rem_vast') {
      unset($vast['vast_' . (count($vast))]);
    }
    else {
      unset($vast["vast_$element[1]"]["sub_vast_$element[1]"][$element[2] - 1]);
    }

    $config->set('vast', $vast)->save();
    $form_state->setRebuild(TRUE);
  }

  /**
   * @param array $form
   * @param FormStateInterface $form_state
   * @return mixed
   */
  public function updateTagCallback(array &$form, FormStateInterface $form_state) {
    return $form['tags'];
  }

  /**
   * @param $form_container
   * @param $name
   * @param $valueButton
   */
  public function buildButtonsAddAndRem(&$form_container, $name, $valueButton) {
    $form_container['addtag'] = [
      '#type' => 'submit',
      '#value' => $this->t("Add $valueButton"),
      '#submit' => ['::addOneTag'],
      '#name' => "add_{$name}",
      '#button_type' => 'primary',
      '#ajax' => [
        'callback' => '::updateTagCallback',
        'wrapper' => 'fieldset-wrapper',
        'speed' => 10000
      ],
    ];

    $form_container['remtag'] = [
      '#type' => 'submit',
      '#value' => $this->t("Remove the last $valueButton"),
      '#submit' => ['::remOneTag'],
      '#name' => "rem_{$name}",
      '#weight' => 100,
      '#ajax' => [
        'callback' => '::updateTagCallback',
        'wrapper' => 'fieldset-wrapper',
      ],
    ];
  }

  /**
   * @param array $form
   * @param FormStateInterface $form_state
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $config = $this->config('al_dia_preroll.adminsettings');
    $vast = [];
    foreach ($form_state->getValue('tags') as $key => $tag) {
      if (strpos($key, 'vast_') !== FALSE) {
        $vast[$key] = $tag;
      }
    }
    $config->set('vast', $vast)
      ->set('random_order', $form_state->getValue('tags')['random_order'])
      ->save();

    parent::submitForm($form, $form_state);
  }

}
