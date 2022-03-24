<?php

namespace Drupal\al_dia_news_general\Plugin\Field\FieldFormatter;

use Drupal\Core\Datetime\DrupalDateTime;
use Drupal\Core\Field\FieldItemListInterface;
use Drupal\Core\Field\Plugin\Field\FieldFormatter\TimestampAgoFormatter;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Plugin implementation of the 'Time ago' formatter for 'datetime' fields.
 *
 * @FieldFormatter(
 *   id = "datetime_time_ago_custom",
 *   label = @Translation("Time ago al dia"),
 *   field_types = {
 *     "datetime"
 *   }
 * )
 */
class TimeAgoFormatterCustom extends TimestampAgoFormatter {

  use StringTranslationTrait;
  /**
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = [];
    foreach ($items as $delta => $item) {
      $date = $item->date;
      $output = [];
      if (!empty($item->date)) {
        $output = $this->formatDate($date);
      }
      $elements[$delta] = $output;
    }
    return $elements;
  }

  /**
   * Formats a date/time as a time interval.
   *
   * @param \Drupal\Core\Datetime\DrupalDateTime|object $date
   *   A date/time object.
   *
   * @return array
   *   The formatted date/time string using the past or future format setting.
   */
  protected function formatDate(DrupalDateTime $date) {
    $fecha = new \DateTime();
    $dateDifference = $date->diff($fecha);
    $days = $dateDifference->days;
    $class = $days < 8 ? 'container-content__date lightned' : 'container-content__date';
    return [
      '#prefix' => "<div class='$class'><p>",
      '#suffix' => '</p></div>',
      '#markup' => $this->t('@date @singular left to apply', [
        '@date' => $days,
        '@singular' => $days == 1 ? $this->t('day') : $this->t('days'),
      ]),
    ];
  }

}
