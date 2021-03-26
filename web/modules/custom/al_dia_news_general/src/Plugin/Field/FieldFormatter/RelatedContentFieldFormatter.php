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
      $entity = $item->getEntity();
      $elements[$delta] = ['#markup' => $this->addRelatedContent($item->value, $entity) ];
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

  /**
   * Insert related content view to field
   * 
   * @param $value string
   * 
   */

  public function addRelatedContent($value, $entity){

    $strBody = $value;
    $nodeId = $entity->id();
    $tags = $entity->get('field_tags')->getValue();
    $target_ids = array();

    foreach ($tags as $value) {
      $target_ids[] = $value['target_id'];
    }

    $tags_list = implode(',', $target_ids);
    $view = views_embed_view('related_content', 'block_1', $nodeId, $tags_list);

    $rendered =  \Drupal::service('renderer')->render($view);

    $newContent = $this->newHtml($strBody, $rendered);

    return $newContent;

  }
  
  /**
   * Get and count paragraphs in field and insert related content HTML
   * 
   * @param $html_body string
   * @param $view string
   */
  public function newHtml($html_body, $view){
      
    $dom= Html::load($html_body);

    // get count paragraphs
    $count_p = count($dom->getElementsByTagName('p'));
  
    // get paragraph position
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
    
    // insert a token into html to be replaced
    $count = 1;
    foreach ($dom->getElementsByTagName('p') as $paragraph) {
      if ($position == $count){
        $paragraph->nodeValue = $paragraph->nodeValue."[related-content]";
      }
      $count++;
    }
          
    $html = $dom->saveHtml();

    // get view title 
    $view_title = \Drupal\views\Views::getView('related_content');
    $view_title->setDisplay('block_1');
    $displayTitle = $view_title->getTitle();

    $related_content = "</p><div data-embed-button='related_content'><h2>" . $displayTitle. "</h2>". $view ."</div>";
      
    // HTML to return
    $html = str_replace("[related-content]</p>", $related_content, $html);
          
    return $html;
  
  }


}
