<?php

namespace Drupal\al_dia_rechpack\EventSubscriber;

use Drupal\commerce_order\Event\OrderEvent;
use Drupal\commerce_order\Event\OrderEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Psr\Log\LoggerInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use GuzzleHttp\Client;
use Drupal\Core\Datetime\DateFormatter;

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
   * Variable date formater.
   * @var \Drupal\Core\Datetime\DateFormatter
   */
  protected $dateFormat;

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
  public function __construct(EntityTypeManagerInterface $entity_type_manager, LoggerInterface $logger, ConfigFactoryInterface $config_factory, Client $client, DateFormatter $dateFormat) {
    $this->entityTypeManager = $entity_type_manager;
    $this->logger = $logger;
    $this->configFactory = $config_factory->get('commerce_payment.commerce_payment_gateway.paypal');
    $this->client = $client;
    $this->dateFormat = $dateFormat;
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
    //Obtengo la configuración de commerce_payment.commerce_payment_gateway.paypal para los datos de API Cliente y Secret
    $config = $this->configFactory->get('configuration');
    //Obtengo la ordend
    $order = $event->getOrder();
    //Creo fecha actual para ser llamada en los id de Plan y Suscripcion
    $date = $this->dateFormat->format(time(), 'custom', 'dmY');
    //Creo varianle con el id del plan, debe ser la fecha actual seguido del numero de la orden
    $plan_id = 'PLAN-' . $date . '-' . $order->id();
    //Creo fecha para Start Date en el servicio de Suscripción
    //esta fecha tiene un mes de más ya que desde este punto se debe empezar a cobrar
    $month = $this->dateFormat->format(strtotime("+1 month"), 'custom', 'Y-m-d\TH:i:s\Z');
    //Obtengo el Email que ha sido diligenciado en el formulario de la orden
    $email = $order->field_email_address->value;
    //Obtengo el Nombre que ha sido diligenciado en el formulario de la orden
    $first_name = $order->field_first_name->value;
    //Obtengo los apellidos que ha sido diligenciados en el formulario de la orden
    $last_name = $order->field_last_name->value;
    foreach ($order->getItems() as $order_item) {
      //Obtengo la variación del producto para luego tener el atributo y saber si es Monthly o Annual
      $product_variation = $order_item->getPurchasedEntity();
      $periodicity = $product_variation->attribute_periodicity->entity;
      //Valido si el atributo es Montly y el tipo de orden es desault -> suscripción
      if (($periodicity->getName() == 'Monthly' || $periodicity->getName() == 'Annual') && $order_item->bundle() == 'default') {
        //Obtengo el SKU de la variacion del producto
        //Este SKU debe ser IGUAL al id del producto en PayPal
        $sku = $product_variation->sku->getValue();
        $this->logger->notice(print_r($sku[0]['value'], 1));
        // SERVICIO PARA OBTENER EL TOKEN.
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
          //$this->logger->notice(print_r($decode, 1));
          // Si no existe el access token saca al catch.
          if (!isset($decode->access_token)) {
            throw new \Exception('Falta Token', 101);
          }
          if ($periodicity->getName() == 'Annual'){
            // SERVICIO PARA LA CREACIÓN DEL PLAN ANUAL
            $params = [
              'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . $decode->access_token,
                'PayPal-Request-Id' => $plan_id,
                'Prefer' => 'return=representation',
                'Content-Type' => 'application/json',
              ],
              'body' => json_encode([
                'product_id' => $sku[0]['value'],
                'name' => 'Monthly Plan',
                'description' => 'Monthly plan',
                'billing_cycles' => [
                  [
                    'frequency' => [
                      'interval_unit' => 'MONTH',
                      'interval_count' => 1,
                    ],
                    'tenure_type' => 'TRIAL',
                    'sequence' => 1,
                    'total_cycles' => 1,
                  ],
                  [
                    'frequency' => [
                      'interval_unit' => 'MONTH',
                      'interval_count' => 1,
                    ],
                    'tenure_type' => 'REGULAR',
                    'sequence' => 2,
                    'total_cycles' => 12,
                    'pricing_scheme' => [
                      'fixed_price' => [
                        'value' => '12',
                        'currency_code' => 'USD',
                      ],
                    ],
                  ],
                ],
                'payment_preferences' => [
                  'auto_bill_outstanding' => TRUE,
                  'setup_fee' => [
                    'value' => '10',
                    'currency_code' => 'USD',
                  ],
                  'setup_fee_failure_action' => 'CONTINUE',
                  'payment_failure_threshold' => 3,
                ],
                'taxes' => [
                  'percentage' => '2',
                  'inclusive' => FALSE,
                ],
              ]),
            ];
          }else {
            // SERVICIO PARA LA CREACIÓN DEL PLAN MENSUAL
            $params = [
              'headers' => [
                'Accept' => 'application/json',
                'Authorization' => 'Bearer ' . $decode->access_token,
                'PayPal-Request-Id' => $plan_id,
                'Prefer' => 'return=representation',
                'Content-Type' => 'application/json',
              ],
              'body' => json_encode([
                'product_id' => $sku[0]['value'],
                'name' => 'Monthly Plan',
                'description' => 'Monthly plan',
                'billing_cycles' => [
                  [
                    'frequency' => [
                      'interval_unit' => 'MONTH',
                      'interval_count' => 1,
                    ],
                    'tenure_type' => 'TRIAL',
                    'sequence' => 1,
                    'total_cycles' => 1,
                  ],
                  [
                    'frequency' => [
                      'interval_unit' => 'MONTH',
                      'interval_count' => 1,
                    ],
                    'tenure_type' => 'REGULAR',
                    'sequence' => 2,
                    'total_cycles' => 1,
                    'pricing_scheme' => [
                      'fixed_price' => [
                        'value' => '12',
                        'currency_code' => 'USD',
                      ],
                    ],
                  ],
                ],
                'payment_preferences' => [
                  'auto_bill_outstanding' => TRUE,
                  'setup_fee' => [
                    'value' => '10',
                    'currency_code' => 'USD',
                  ],
                  'setup_fee_failure_action' => 'CONTINUE',
                  'payment_failure_threshold' => 3,
                ],
                'taxes' => [
                  'percentage' => '2',
                  'inclusive' => FALSE,
                ],
              ]),
            ];
          }
          
          $plan = $this->client->post('https://api-m.sandbox.paypal.com/v1/billing/plans', $params);
          $string1 = (string) $plan->getBody();
          $decode1 = json_decode($string1);
          $this->logger->notice(print_r($month, 1));
          // Si no existe el id saca al catch.
          if (!isset($decode1->id)) {
            throw new \Exception('Falta Id', 901);
          }

          // SERVICIO PARA CREAR LA SUSCRIPCIÓN
          $params = [
            'headers' => [
              'Accept' => 'application/json',
              'Authorization' => 'Bearer ' . $decode->access_token,
              'PayPal-Request-Id' => 'SUBSCRIPTION-' . $date . '-' . $order->id(),
              'Prefer' => 'return=representation',
              'Content-Type' => 'application/json',
            ],
            'body' => json_encode([
              'plan_id' => $decode1->id,
              'start_time' => $month,
              'subscriber' => [
                'name' => [
                  'given_name' => $first_name,
                  'surname' => $last_name,
                ],
                'email_address' => $email,
              ],
              'application_context' => [
                'brand_name' => 'example',
                'locale' => 'en-US',
                'shipping_preference' => 'SET_PROVIDED_ADDRESS',
                'user_action' => 'SUBSCRIBE_NOW',
                'payment_method' => [
                  'payer_selected' => 'PAYPAL',
                  'payee_preferred' => 'IMMEDIATE_PAYMENT_REQUIRED',
                ],
                'return_url' => 'https://example.com/returnUrl',
                'cancel_url' => 'https://example.com/cancelUrl',
              ],
            ]),
          ];
          $subscription = $this->client->post('https://api-m.sandbox.paypal.com/v1/billing/subscriptions', $params);
          $string2 = (string) $subscription->getBody();
          $decode2 = json_decode($string2);
          $this->logger->notice(print_r($decode2, 1));
          // SERVICIO PARA OBTENER EL TOKEN.
          $params = [
            'headers' => [
              'Authorization' => 'Bearer ' . $decode->access_token,
            ],
            'query' => [
              'grant_type' => 'client_credentials',
            ],
          ];
          $hateoas = $this->client->post('https://www.paypal.com/webapps/billing/subscriptions', $params);
          $string2 = (string) $hateoas->getBody();
          $decode2 = json_decode($string2);
          $this->logger->notice(print_r($decode2, 1));
        }
        catch (\Exception $th) {
          // Throw $th;.
          $this->logger->notice(print_r($th->getMessage(), 1));
        }
      }
    }

  }

}
