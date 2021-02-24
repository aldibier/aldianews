<?php

namespace Drupal\content_authors\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBundleBase;

/**
 * Defines the Authors type entity.
 *
 * @ConfigEntityType(
 *   id = "authors_type",
 *   label = @Translation("Authors type"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\content_authors\AuthorsTypeListBuilder",
 *     "form" = {
 *       "add" = "Drupal\content_authors\Form\AuthorsTypeForm",
 *       "edit" = "Drupal\content_authors\Form\AuthorsTypeForm",
 *       "delete" = "Drupal\content_authors\Form\AuthorsTypeDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\content_authors\AuthorsTypeHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "authors_type",
 *   admin_permission = "administer site configuration",
 *   bundle_of = "authors",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/authors_type/{authors_type}",
 *     "add-form" = "/admin/structure/authors_type/add",
 *     "edit-form" = "/admin/structure/authors_type/{authors_type}/edit",
 *     "delete-form" = "/admin/structure/authors_type/{authors_type}/delete",
 *     "collection" = "/admin/structure/authors_type"
 *   }
 * )
 */
class AuthorsType extends ConfigEntityBundleBase implements AuthorsTypeInterface {

  /**
   * The Authors type ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The Authors type label.
   *
   * @var string
   */
  protected $label;

}
