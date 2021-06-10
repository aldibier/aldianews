<?php

namespace Drupal\al_dia_rechpack\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides the completion pane.
 *
 * @CommerceCheckoutPane(
 *   id = "rechpack_order_review_title",
 *   label = @Translation("RechPack Review Title"),
 *   default_step = "review",
 * )
 */
class RechPackOrderReviewTitle extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $pane_form['title'] = [
      '#markup' => t('<h1>Purchase summary</h1>'),
    ];
    return $pane_form;
  }

}
