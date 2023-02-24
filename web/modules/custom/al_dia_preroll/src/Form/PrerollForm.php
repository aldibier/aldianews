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
    $campaigns = $config->get('campaigns');
    $form['#attached']['library'][] = 'core/drupal.ajax';
    $form['#tree'] = TRUE;

    $form['tags'] = [
      '#type' => 'fieldset',
      '#prefix' => '<div id="fieldset-wrapper">',
      '#suffix' => '</div>',
    ];

    if (empty($campaigns)) {
      $form['tags']['initial_message'] = array(
        '#type' => 'markup',
        '#markup' => '<p>No campaign has been added</p>',
      );
    }

    if (count($campaigns) > 0) {
      $form['tags']['random_order'] = [
        '#type' => 'checkbox',
        '#title' => $this->t('Campaign random order'),
        '#default_value' => $config->get('random_order') ?? FALSE
      ];
    }

    $i = 0;
    foreach ($campaigns as $campaign) {
      $form['tags']['campaign_' . $i] = [
        '#type' => 'details',
        '#title' => $this->t("Campaign " . ($i + 1))
      ];

      if (!isset($campaign['vast']) || count($campaign['vast']) <= 0) {
        $form['tags']['campaign_' . $i]['initial_message'] = array(
          '#type' => 'markup',
          '#markup' => '<p>No vast has been added</p>',
        );
      }
      else {

        $form['tags']['campaign_' . $i]['turn_off_campaign'] = [
          '#type' => 'checkbox',
          '#title' => $this->t('Turn off campaign'),
          '#default_value' => $campaign['turn_off_campaign'] ?? FALSE
        ];

        $form['tags']['campaign_' . $i]['pos_campaign'] = [
          '#type' => 'number',
          '#title' => $this->t('Order play back of campaign'),
          '#default_value' => $campaign['pos_campaign'] ?? ''
        ];

        $form['tags']['campaign_' . $i]['random_order'] = [
          '#type' => 'checkbox',
          '#title' => $this->t('Vast random order'),
          '#default_value' => $campaign['random_order'] ?? FALSE
        ];

        $form['tags']['campaign_' . $i]['middle_video'] = [
          '#type' => 'textarea',
          '#rows' => 2,
          '#title' => $this->t('Middle video'),
          '#default_value' => $campaign['middle_video'] ?? ''
        ];
      }

      $j = 0;
      if (isset($campaign['vast'])) {
        foreach ($campaign['vast'] as $vast) {
          $form['tags']['campaign_' . $i]['vast'][$j] = [
            '#type' => 'details',
            '#title' => $this->t("Vast " . ($j + 1))
          ];

          $form['tags']['campaign_' . $i]['vast'][$j]['path_vast'] = [
            '#type' => 'textarea',
            '#rows' => 2,
            '#title' => $this->t('Generated vast tag'),
            '#default_value' => $vast['path_vast'] ?? ''
          ];

          $form['tags']['campaign_' . $i]['vast'][$j]['pos_vast'] = [
            '#type' => 'number',
            '#title' => $this->t('Priority play back of vast'),
            '#default_value' => $vast['pos_vast'] ?? ''
          ];
          $j++;
        }
      }
      $this->buildButtonsAddAndRem($form['tags']['campaign_' . $i], 'vast__' . $i . '__' . ($j - 1), 'vast');
      $i++;
    }

    $this->buildButtonsAddAndRem($form['tags'], 'campaign', 'campaign');

    $form['browser_storage'] = [
      '#type' => 'number',
      '#title' => $this->t('Reset browser storage (in hours)'),
      '#min' => 0,
      '#step' => 1,
      '#default_value' => $config->get('browser_storage') ?? FALSE
    ];

    return parent::buildForm($form, $form_state);
  }

  /**
   * @param array $form
   * @param FormStateInterface $form_state
   */
  public function addOneTag(array &$form, FormStateInterface $form_state) {
    $element = explode('__', $form_state->getTriggeringElement()['#name']);
    $config = $this->config('al_dia_preroll.adminsettings');
    $campaigns = $config->get('campaigns');
    if ($element[0] == 'add_campaign') {
      $count = count($campaigns);
      $campaigns['campaign_' . $count] = [
        'turn_off_campaign' => FALSE,
        'random_order' => FALSE,
        'pos_campaign' => "",
        'middle_video' => ""
      ];
      array_push($campaigns);
    }
    else {
      $campaigns["campaign_$element[1]"]["vast"][] = [
        "path_vast" => "",
        "pos_vast" => ""
      ];
      array_push($campaigns);
    }

    $config->set('campaigns', $campaigns)->save();
    $form_state->setRebuild(TRUE);
  }

  /**
   * @param array $form
   * @param FormStateInterface $form_state
   */
  public function remOneTag(array &$form, FormStateInterface $form_state) {
    $element = explode('__', $form_state->getTriggeringElement()['#name']);
    $config = $this->config('al_dia_preroll.adminsettings');
    $campaigns = $config->get('campaigns');
    if ($element[0] == 'rem_campaign') {
      unset($campaigns['campaign_' . (count($campaigns) - 1)]);
    }
    else {
      unset($campaigns["campaign_$element[1]"]["vast"][$element[2]]);
    }

    $config->set('campaigns', $campaigns)->save();
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
    $tags = $form_state->getValue('tags');

    $vast = [];
    foreach ($tags as $key => $tag) {
      if (strpos($key, 'campaign_') !== FALSE) {
        $vast[$key] = $tag;
      }
    }
    $config->set('campaigns', $vast)
      ->set('random_order', $form_state->getValue('tags')['random_order'] ?? FALSE)
      ->set('browser_storage',$form_state->getValue('browser_storage')?? 0)
      ->save();

    parent::submitForm($form, $form_state);
  }

}
