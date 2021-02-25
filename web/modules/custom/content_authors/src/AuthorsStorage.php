<?php

namespace Drupal\content_authors;

use Drupal\Core\Entity\Sql\SqlContentEntityStorage;
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
class AuthorsStorage extends SqlContentEntityStorage implements AuthorsStorageInterface {

  /**
   * {@inheritdoc}
   */
  public function revisionIds(AuthorsInterface $entity) {
    return $this->database->query(
      'SELECT vid FROM {authors_revision} WHERE id=:id ORDER BY vid',
      [':id' => $entity->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function userRevisionIds(AccountInterface $account) {
    return $this->database->query(
      'SELECT vid FROM {authors_field_revision} WHERE uid = :uid ORDER BY vid',
      [':uid' => $account->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function countDefaultLanguageRevisions(AuthorsInterface $entity) {
    return $this->database->query('SELECT COUNT(*) FROM {authors_field_revision} WHERE id = :id AND default_langcode = 1', [':id' => $entity->id()])
      ->fetchField();
  }

  /**
   * {@inheritdoc}
   */
  public function clearRevisionsLanguage(LanguageInterface $language) {
    return $this->database->update('authors_revision')
      ->fields(['langcode' => LanguageInterface::LANGCODE_NOT_SPECIFIED])
      ->condition('langcode', $language->getId())
      ->execute();
  }

}
