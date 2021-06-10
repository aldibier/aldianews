<?php

namespace Drupal\al_dia_rechpack\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides the completion pane.
 *
 * @CommerceCheckoutPane(
 *   id = "rechpack_order_review_description",
 *   label = @Translation("RechPack Review Description"),
 *   default_step = "review",
 * )
 */
class RechPackOrderReviewDescription extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $pane_form['title'] = [
      '#markup' => t('<p>Please check carefully your information below, so you can make sure your order will be delivered correctly. If there is any inconsistency, please go back and correct this information.</p>'),
    ];
    return $pane_form;
  }

}
