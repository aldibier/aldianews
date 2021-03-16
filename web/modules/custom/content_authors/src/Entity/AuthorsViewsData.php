<?php

namespace Drupal\content_authors\Entity;

use Drupal\views\EntityViewsData;

/**
 * Provides Views data for Authors entities.
 */
class AuthorsViewsData extends EntityViewsData {

  /**
   * {@inheritdoc}
   */
  public function getViewsData() {
    $data = parent::getViewsData();

    // Additional information for Views integration, such as table joins, can be
    // put here.
    return $data;
  }

}
