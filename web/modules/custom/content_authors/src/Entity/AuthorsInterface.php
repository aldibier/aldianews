<?php

namespace Drupal\content_authors\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\RevisionLogInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\Core\Entity\EntityPublishedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining Authors entities.
 *
 * @ingroup content_authors
 */
interface AuthorsInterface extends ContentEntityInterface, RevisionLogInterface, EntityChangedInterface, EntityPublishedInterface, EntityOwnerInterface {

  /**
   * Add get/set methods for your configuration properties here.
   */

  /**
   * Gets the Authors name.
   *
   * @return string
   *   Name of the Authors.
   */
  public function getName();

  /**
   * Sets the Authors name.
   *
   * @param string $name
   *   The Authors name.
   *
   * @return \Drupal\content_authors\Entity\AuthorsInterface
   *   The called Authors entity.
   */
  public function setName($name);

  /**
   * Gets the Authors creation timestamp.
   *
   * @return int
   *   Creation timestamp of the Authors.
   */
  public function getCreatedTime();

  /**
   * Sets the Authors creation timestamp.
   *
   * @param int $timestamp
   *   The Authors creation timestamp.
   *
   * @return \Drupal\content_authors\Entity\AuthorsInterface
   *   The called Authors entity.
   */
  public function setCreatedTime($timestamp);

  /**
   * Gets the Authors revision creation timestamp.
   *
   * @return int
   *   The UNIX timestamp of when this revision was created.
   */
  public function getRevisionCreationTime();

  /**
   * Sets the Authors revision creation timestamp.
   *
   * @param int $timestamp
   *   The UNIX timestamp of when this revision was created.
   *
   * @return \Drupal\content_authors\Entity\AuthorsInterface
   *   The called Authors entity.
   */
  public function setRevisionCreationTime($timestamp);

  /**
   * Gets the Authors revision author.
   *
   * @return \Drupal\user\UserInterface
   *   The user entity for the revision author.
   */
  public function getRevisionUser();

  /**
   * Sets the Authors revision author.
   *
   * @param int $uid
   *   The user ID of the revision author.
   *
   * @return \Drupal\content_authors\Entity\AuthorsInterface
   *   The called Authors entity.
   */
  public function setRevisionUserId($uid);

}
