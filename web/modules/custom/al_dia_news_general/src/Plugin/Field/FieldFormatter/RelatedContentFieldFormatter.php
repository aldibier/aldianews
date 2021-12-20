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
 *   label = @Translation("Insert Related content"),
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

      $elements[$delta] = [
        '#type' => 'processed_text',
        '#text' => $this->addRelatedContent($item->value, $entity),
        '#format' => $item->format,
        '#langcode' => $item
          ->getLangcode(),
      ];

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

    $newContent = "";

    // Only valid to node Entity
    if($entity->getEntityType()->id() == 'node'){

      $nodeId = $entity->id();

      // get taxonomy tags ids
      $tags = $entity->get('field_tags')->getValue();
      $target_ids = [];

      foreach ($tags as $tag) {
        $target_ids[] = $tag['target_id'];
      }

      $tags_list = implode('+', $target_ids);

      // get view ids of related content according to node bundle
      switch ($entity->getType()) {
        case 'thought_leaders':
          $view_id = 'related_content_thought_leaders';
          $view_display = 'block_1';

          break;

        default:
          $view_id = 'related_content';
          $view_display = 'block_1';
          break;
      }

      // get view
      $view = \Drupal\views\Views::getView($view_id);
      $view->setDisplay($view_display);
      $view->setArguments([$nodeId, $tags_list]);
      //dsm($tags_list);

      $title = $view->getTitle();
      // Render.
      $render = $view->render();
      // get count results
      $q = $view->query->query()->countQuery()->execute()->fetchAssoc();
      $count = reset($q);

      // If this content doesn't have related content, return original content
      if($count == 0){
        return $value;
      }

      $the_title_render_array = [
        '#markup' => '<h2>'.t('@title', ['@title'=> $title]).'</h2>',
      ];

      $variables['content']['view_title'] = $the_title_render_array;
      $variables['content']['view_output'] = $render;

      $rendered =  \Drupal::service('renderer')->render($variables);

      // the view is inserted in content
      $newContent = $this->newHtml($value, $rendered);
    }


    return $newContent;

  }

  /**
   * Get and count paragraphs in field and insert related content HTML
   *
   * @param $html_body string
   * @param $view string
   */
  public function newHtml($html_body, $related_content){

    $dom= Html::load($html_body);

    // get count paragraphs
    $count_p = count($dom->getElementsByTagName('p'));

    // get paragraph position, divided by 3
    $position = intval($count_p / 3);

    if($count_p == 1 || $count_p == 2){
      $position_ad = $position_related = 1;
    }
    elseif ($count_p == 3){
      $position_ad = 1;
      $position_related = 2;
    }
    elseif ($count_p == 4 || $count_p == 5){
      $position_ad = 2;
      $position_related = 3;
    }
    elseif($count_p >= 6){
      $position_ad = $position;
      $position_related = $position * 2;
    }


    // insert a token into html to be replaced
    $count = 1;
    foreach ($dom->getElementsByTagName('p') as $paragraph) {

      if ($position_ad == $count){
        $paragraph->nodeValue = $paragraph->nodeValue."[ad]";
      }

      if ($position_related == $count){
        $paragraph->nodeValue = $paragraph->nodeValue."[related-content]";
      }

      $count++;
    }

    $html = $dom->saveHtml();

    $ad = "</p><!-- /66060234/internal-section-body -->
    <div id='div-gpt-ad-1639705123281-0' style='min-width: 320px; min-height: 60px;'>
      <script>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1639705123281-0'); });
      </script>
    </div>";
    $content = "</p><div data-embed-button='related_content'>". $related_content ."</div>";

    // HTML to return
    $html = str_replace("[ad]</p>", $ad, $html);
    $html = str_replace("[related-content]</p>", $content, $html);

    return $html;

  }
  /**
   * Render a new BLock AD from Gamw
   *
   * @return string
   */
  public function getBlockAd(){
    $entityManager = \Drupal::service('entity_type.manager');

    $block = $entityManager->getStorage('block')->load('gamwadvertisement_22');
    $renderBlock = $entityManager->getViewBuilder('block')->view($block);
    $block_content = \Drupal::service('renderer')->renderPlain($renderBlock);

    return $block_content;
  }

}
