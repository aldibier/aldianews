<?php

/**
 * @file
 * Contains authors.page.inc.
 *
 * Page callback for Authors entities.
 */

use Drupal\Core\Render\Element;

/**
 * Prepares variables for Authors templates.
 *
 * Default template: authors.html.twig.
 *
 * @param array $variables
 *   An associative array containing:
 *   - elements: An associative array containing the user information and any
 *   - attributes: HTML attributes for the containing element.
 */
function template_preprocess_authors(array &$variables) {
  // Fetch Authors Entity Object.
  $authors = $variables['elements']['#authors'];

  // Helpful $content variable for templates.
  foreach (Element::children($variables['elements']) as $key) {
    $variables['content'][$key] = $variables['elements'][$key];
  }
}
