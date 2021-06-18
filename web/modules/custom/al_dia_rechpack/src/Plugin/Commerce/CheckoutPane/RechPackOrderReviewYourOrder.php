<?php

namespace Drupal\al_dia_rechpack\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides the completion pane.
 *
 * @CommerceCheckoutPane(
 *   id = "rechpack_order_review_your_order",
 *   label = @Translation("RechPack Review Your Order"),
 *   default_step = "review",
 * )
 */
class RechPackOrderReviewYourOrder extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $order = $this->order;
    $title = $order->getTitle();
    $items = $order->getItems();
    $pane_form['title'] = [
      '#markup' => $title,
    ];
    return $pane_form;
  }

}
