<?php

namespace Drupal\al_dia_news_general\Cache\Context;

use Drupal\Core\Cache\CacheableMetadata;
use Drupal\Core\Cache\Context\CacheContextInterface;

/**
 * Class MobileDetectCacheContext.
 */
class MobileDetectCacheContext implements CacheContextInterface {

  /**
   * Constructs a new MobileDetectCacheContext object.
   */
  public function __construct() {

  }

  /**
   * {@inheritdoc}
   */
  public static function getLabel() {
    return t('Mobile Detect');
  }

  /**
   * {@inheritdoc}
   */
  public function getContext() {
    $md = \Drupal::service('mobile_detect');
    if ($md->isMobile() || $md->isTablet()) {
      return TRUE;
    }
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheableMetadata() {
    return new CacheableMetadata();
  }


}