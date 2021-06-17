<?php

namespace Drupal\al_dia_rechpack\Plugin\Commerce\CheckoutPane;

use Drupal\commerce_checkout\Plugin\Commerce\CheckoutPane\CheckoutPaneBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides the completion pane.
 *
 * @CommerceCheckoutPane(
 *   id = "rechpack_order_review_auto_renewal",
 *   label = @Translation("RechPack Review Auto Renewal"),
 *   default_step = "review",
 * )
 */
class RechPackOrderReviewAutoRenewal extends CheckoutPaneBase {

  /**
   * {@inheritdoc}
   */
  public function buildPaneForm(array $pane_form, FormStateInterface $form_state, array &$complete_form) {
    $pane_form['title'] = [
      '#markup' => t('<h3>AUTO-RENEWAL TERMS</h3>
      <p>Your subscription term is detailed in your order summary above. You will be charged the amount for your initial term today. At the end of each subcription period, your subcription will automatically renew and you will be charged at the then prevailing rate for each subscription period.
      The date of your renewal payment will be confirmed in your welcome email. If there are any changes to the amount and frecuency of your payment, AL DÍA News will notify you at least two weeks in advance of payment being taken. You may cancel at any time by emailing your local costumer service centre. Please allow up to three weeks for your cancellation to be processed.
      </p>'),
    ];
    return $pane_form;
  }

}
