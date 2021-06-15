<?php

namespace Drupal\al_dia_rechpack\EventSubscriber;

use Drupal\commerce_order\Event\OrderEvent;
use Drupal\commerce_order\Event\OrderEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Psr\Log\LoggerInterface;
use Drupal\commerce_order\Entity\Order;
use Drupal\Core\Config\ConfigFactoryInterface;
use GuzzleHttp\Client;


/**
 * OrderEventsSubscriber.
 */
class OrderEventsSubscriber implements EventSubscriberInterface {



  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The logger.
   *
   * @var \Psr\Log\LoggerInterface
   */
  protected $logger;

  /**
    * Variable para traer configuraciones.
    *
    * @var \Drupal\Core\Config\ConfigFactoryInterface
    */
    protected $configFactory;

  /**
   * Variable conexiones a otros sitios.
   *
   * @var \GuzzleHttp\Client
   */
   protected $client;

  /**
   * Constructs a new LocaleTranslation object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Psr\Log\LoggerInterface $logger
   *   The logger.
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config.
   * @param \GuzzleHttp\Client $client
   *   The client.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, LoggerInterface $logger, ConfigFactoryInterface $config_factory, Client $client) {
    $this->entityTypeManager = $entity_type_manager;
    $this->logger = $logger;
    $this->configFactory = $config_factory->get('commerce_payment.commerce_payment_gateway.paypal');
    $this->client = $client;
  }

  /**
   * {@inheritdoc}
   */
  public static function getSubscribedEvents() {
    $events[OrderEvents::ORDER_PAID][] = ['onOrderPaid'];
    return $events;
  }

  /**
   * Reacts to an order being created..
   *
   * @param \Drupal\commerce_order\Event\OrderEvent $event
   *   The order event.
   */
  public function onOrderPaid(OrderEvent $event) {
    $config = $this->configFactory->get('configuration');
    $order = $event->getOrder();
    foreach ($order->getItems() as $key => $order_item) {

        $product_variation = $order_item->getPurchasedEntity(); 
        $order_type = $order_item->bundle();
        $periodicity = $product_variation->attribute_periodicity->entity; 

        if($periodicity->getName() == 'Monthly' && $order_item->bundle() == 'default'){
            $sku = $product_variation->sku->getValue(); 
            $this->logger->notice(print_r($sku[0]['value'], 1));
            //Token
            $params = [
                'headers' => [
                    'Authorization' => 'Basic ' . base64_encode($config['client_id'] . ':' . $config['secret']),
                    'Content-Type' => 'application/x-www-form-urlencoded',
                  ],
                  'query' => [
                    'grant_type' => 'client_credentials',
                  ],
            ];
            try {
                $token = $this->client->post('https://api-m.sandbox.paypal.com/v1/oauth2/token', $params);
                $string = (string) $token->getBody();
                $decode = json_decode($string);
                //Si no existe el access token saca al catch
                if (!isset($decode->access_token)) {
                    throw new \Exception('Falta Token', 101);
                }
                // $params = [
                //     'headers' => [
                //         'Authorization' => 'Bearer ' . $token,
                //         'Content-Type' => 'application/x-www-form-urlencoded',
                //     ],
                //     'body' => json_encode([
                //         'product_id' => $sku[0]['value'],
                //         'name' => 'Monthly Plan',
                //         'description' => 'Monthly plan',
                //         'billing_cycles' => [
                //             [
                //                 'frequency' => [
                //                     'interval_unit' => 'MONTH',
                //                     'interval_count' => 1,
                //                 ],
                //                 'tenure_type' => 'TRIAL',
                //                 'sequence' => 1,
                //                 'total_cycles' => 1,
                //             ],
                //             [
                //                 'frequency' => [
                //                     'interval_unit' => 'MONTH',
                //                     'interval_count' => 1,
                //                 ],
                //                 'tenure_type' => 'REGULAR',
                //                 'sequence' => 2,
                //                 'total_cycles' => 12,
                //                 'pricing_scheme' => [
                //                     'fixed_price' => [
                //                         'value' => '12',
                //                         'currency_code' => 'USD',
                //                     ],
                //                 ],
                //             ],
                //         ],
                //         'payment_preferences' => [
                //             'auto_bill_outstanding' => true,
                //             'setup_fee' => [
                //                 'value' => '10',
                //                 'currency_code' => 'USD',
                //             ],
                //             'setup_fee_failure_action' => 'CONTINUE',
                //             'payment_failure_threshold' => 3,
                //         ],
                //         'taxes' => [
                //             'percentage' => '0',
                //             'inclusive' => false,
                //         ],
                //     ]),
                // ];
                $plan = $this->client->post('https://api-m.sandbox.paypal.com/v1/billing/plans', $params);
                $string = (string) $plan->getBody();
                $decode = json_decode($string);
                //Si no existe el access token saca al catch
                if (!isset($decode->id)) {
                    throw new \Exception('Falta Id', 901);
                }
                $this->logger->notice(print_r($decode, 1));
            } catch (\Exception $th) {
                //throw $th;
                $this->logger->notice(print_r($th->getMessage(), 1));
            }
        }
    }

  }


}
