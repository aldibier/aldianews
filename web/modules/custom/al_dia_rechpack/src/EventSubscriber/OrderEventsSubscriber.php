<?php

namespace Drupal\al_dia_rechpack\EventSubscriber;

use Drupal\commerce_order\Event\OrderEvent;
use Drupal\commerce_order\Event\OrderEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Psr\Log\LoggerInterface;
use Drupal\commerce_order\Entity\Order;


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
   * Constructs a new LocaleTranslation object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager.
   * @param \Psr\Log\LoggerInterface $logger
   *   The logger.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager, LoggerInterface $logger) {
    
    $this->entityTypeManager = $entity_type_manager;
    $this->logger = $logger;

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
    $order = $event->getOrder();
    foreach ($order->getItems() as $key => $order_item) {

        $product_variation = $order_item->getPurchasedEntity();
    
        $title = $product_variation->getTitle();
        $this->logger->notice($title);
    }

  }


}
