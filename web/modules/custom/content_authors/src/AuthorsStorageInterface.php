<?php

namespace Drupal\content_authors;

use Drupal\Core\Entity\ContentEntityStorageInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Language\LanguageInterface;
use Drupal\content_authors\Entity\AuthorsInterface;

/**
 * Defines the storage handler class for Authors entities.
 *
 * This extends the base storage class, adding required special handling for
 * Authors entities.
 *
 * @ingroup content_authors
 */
interface AuthorsStorageInterface extends ContentEntityStorageInterface {

  /**
   * Gets a list of Authors revision IDs for a specific Authors.
   *
   * @param \Drupal\content_authors\Entity\AuthorsInterface $entity
   *   The Authors entity.
   *
   * @return int[]
   *   Authors revision IDs (in ascending order).
   */
  public function revisionIds(AuthorsInterface $entity);

  /**
   * Gets a list of revision IDs having a given user as Authors author.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The user entity.
   *
   * @return int[]
   *   Authors revision IDs (in ascending order).
   */
  public function userRevisionIds(AccountInterface $account);

  /**
   * Counts the number of revisions in the default language.
   *
   * @param \Drupal\content_authors\Entity\AuthorsInterface $entity
   *   The Authors entity.
   *
   * @return int
   *   The number of revisions in the default language.
   */
  public function countDefaultLanguageRevisions(AuthorsInterface $entity);

  /**
   * Unsets the language for all Authors with the given language.
   *
   * @param \Drupal\Core\Language\LanguageInterface $language
   *   The language object.
   */
  public function clearRevisionsLanguage(LanguageInterface $language);

}
