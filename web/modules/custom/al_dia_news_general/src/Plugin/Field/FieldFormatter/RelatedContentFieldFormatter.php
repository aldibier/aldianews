<?php

namespace Drupal\al_dia_news_general\Plugin\Field\FieldFormatter;

use Drupal\Component\Utility\Html;
use Drupal\Core\Field\FieldItemInterface;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Plugin implementation of the 'related_content_field_formatter' formatter.
 *
 * @FieldFormatter(
 *   id = "related_content_field_formatter",
 *   label = @Translation("Related content field formatter"),
 *   field_types = {
 *     "text_with_summary"
 *   }
 * )
 */
class RelatedContentFieldFormatter extends FormatterBase {

  /**
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      // Implement default settings.
    ] + parent::defaultSettings();
  }

  /**
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    return [
      // Implement settings form.
    ] + parent::settingsForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary = [];
    // Implement settings summary.

    return $summary;
  }

  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];

    foreach ($items as $delta => $item) {
      $elements[$delta] = ['#markup' => $this->addRelatedContent($this->viewValue($item)) ];
    }

    return $elements;
  }

  /**
   * Generate the output appropriate for one field item.
   *
   * @param \Drupal\Core\Field\FieldItemInterface $item
   *   One field item.
   *
   * @return string
   *   The textual output generated.
   */
  protected function viewValue(FieldItemInterface $item) {
    // The text value has no text format assigned to it, so the user input
    // should equal the output, including newlines.
    return nl2br(Html::escape($item->value));
  }

  public function addRelatedContent($value){

    $strBody = $value;
    $count = substr_count($strBody, '<div data-embed-button="related_content">');

    $block_id = 'views_block__related_content_block_1';

    $con = \Drupal\block\BlockViewBuilder::lazyBuilder($block_id, 'full_html');
    $d   = \Drupal::service('renderer')->renderPlain($con);
    $html_block = $d->__toString();

    $newHtml = $this->newHtml($strBody, $html_block);

    return $newHtml;

  }

  public function newHtml($html_body, $html_block){
      
    $dom= Html::load($html_body);
  
    $count_related = 0;
    foreach($dom->getElementsByTagName('div') as $item){
      $count_related++;
    }
  
    $count_p = 0;
    foreach($dom->getElementsByTagName('p') as $item){
      $count_p++;
    }
  
  
    $position = intval($count_p / 2);
        
    if($count_p != 1){
      if($count_p % 2 == 0){    
        $par = true;
      }else{
        $par = false;
        $position = $position + 1;
      }
    }else{
      $par = null;
    }
  
        
    //$dom->getElementsByTagName('p')->item(0)->nodeValue = $dom->getElementsByTagName('p')->item(0)->nodeValue."[related-content]";
    //if($count_related == 0){
  
      $count = 1;
      foreach ($dom->getElementsByTagName('p') as $paragraph) {
        if ($position == $count){
          //$paragraph->parentNode->removeChild($paragraph);
          $paragraph->nodeValue = $paragraph->nodeValue."[related-content]";
        }
        $count++;
      }
          
      $html = $dom->saveHtml();
          
      $related_content = "</p><div data-embed-button='related_content'>". $html_block ."</div>";
          
      $html = str_replace("[related-content]</p>", $related_content, $html);
          
      return $html;
  
      //}else{
  
        //return false;
  
      //}
  }


}
