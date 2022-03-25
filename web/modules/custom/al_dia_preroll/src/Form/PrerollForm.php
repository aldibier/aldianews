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
     * {@inheritdoc}  
     */ 
    protected function getEditableConfigNames()
    {
        return [
            'al_dia_preroll.adminsettings',
        ];
    }

    /**  
     * {@inheritdoc}  
     */
    public function getFormId()
    {
        return 'al_dia_preroll_form';
    }

    /**  
     * {@inheritdoc}  
     */
    public function buildForm(array $form, FormStateInterface $form_state){
        $config = $this->config('al_dia_preroll.adminsettings');
        $form['#attached']['library'][] = 'core/drupal.ajax';
        $form['#tree'] = TRUE;

        $form['tags'] = [
            '#type' => 'fieldset',
            '#prefix' => '<div id="fieldset-wrapper">',
            '#suffix' => '</div>',
        ];

        $number_of_tags = $config->get('number_of_tags');
   
        if (empty($number_of_tags)) {
            $number_of_tags = 1;
            $this->config('al_dia_preroll.adminsettings')
            ->set('number_of_tags',1)
            ->save();
        }

        for($i = 1;$i <= $number_of_tags;$i++){

            $form['tags']['label_'.$i] = [
                '#type' => 'html_tag',
                '#tag' => 'h2',
                '#value' => $this
                    ->t('Vast '.$i),
            ];
          
            $form['tags']['path_vast_'.$i] = [
                '#type' => 'textarea',
                '#title' => $this->t('Generated vast tag'),
                '#default_value' => $config->get("path_vast_$i")
            ];

            $form['tags']['pos_vast_'.$i] = [
                '#type' => 'number',
                '#title' => $this->t('Position vast tag should be played back'),
                '#default_value' => $config->get("pos_vast_$i")
            ];

        }   

        $form['tags']['addtag'] = [
            '#type' => 'submit',
            '#value' => $this->t('Add one more'),
            '#submit' => ['::addOneTag'],
            '#ajax' => [
                'callback' => '::updateTagCallback',
			    'wrapper' => 'fieldset-wrapper',
			    'method' => 'replace',
                'speed' => 10000
            ],
        ];

        $form['tags']['remtag'] = [
            '#type' => 'submit',
            '#value' => $this->t('Remove the last'),
            '#submit' => ['::remOneTag'],
            '#weight' => 100,
            '#ajax' => [
              'callback' => '::updateTagCallback',
              'wrapper' => 'fieldset-wrapper',
              'method' => 'replace',
            ],
        ];

        return parent::buildForm($form,$form_state);

    }

    /**  
     * {@inheritdoc}  
     */
    public function addOneTag(array &$form, FormStateInterface $form_state) {
       $config = $this->config('al_dia_preroll.adminsettings');
       $number_of_tags = $config->get('number_of_tags');

       $this->config('al_dia_preroll.adminsettings')->set('number_of_tags',$number_of_tags + 1)->save();
       $form_state->setRebuild(TRUE);
    }

    /**  
     * {@inheritdoc}  
     */
    public function remOneTag(array &$form, FormStateInterface $form_state) {
        $config = $this->config('al_dia_preroll.adminsettings');
        $number_of_tags = $config->get('number_of_tags');

        $this->config('al_dia_preroll.adminsettings')
        ->set("path_vast_$number_of_tags","")
        ->save();

        $this->config('al_dia_preroll.adminsettings')
            ->set("pos_vast_$number_of_tags","")
            ->save();

        $this->config('al_dia_preroll.adminsettings')->set('number_of_tags', $number_of_tags - 1)->save();
        $form_state->setRebuild(TRUE);
    }

    /**  
     * {@inheritdoc}  
     */
    public function updateTagCallback(array &$form, FormStateInterface $form_state) {
        return $form['tags'];
    }

    /**  
     * {@inheritdoc}  
     */
    public function submitForm(array &$form, FormStateInterface $form_state)
    {
        parent::submitForm($form,$form_state);

        $config = $this->config('al_dia_preroll.adminsettings');
        $tags = $config->get('number_of_tags');

        for($i = 1;$i <= $tags;$i++ ){

            $this->config('al_dia_preroll.adminsettings')
            ->set("path_vast_$i",$form_state->getValue('tags')["path_vast_$i"])
            ->save();

            $this->config('al_dia_preroll.adminsettings')
                ->set("pos_vast_$i",$form_state->getValue('tags')["pos_vast_$i"])
                ->save();

        }

        $this->config('al_dia_preroll.adminsettings')
        ->set('number_of_tags_save',$tags)
        ->save();
        
    }

}