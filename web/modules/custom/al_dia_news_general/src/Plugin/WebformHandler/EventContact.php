<?php
namespace Drupal\al_dia_news_general\Plugin\WebformHandler;

use Drupal\webform\Plugin\WebformHandler\EmailWebformHandler;
use Drupal\webform\WebformSubmissionInterface;

/**
 * Emails a webform submission.
 *
 * @WebformHandler(
 *   id = "event_contact",
 *   label = @Translation("Event Contact"),
 *   category = @Translation("Notification"),
 *   description = @Translation("Sends a webform submission to a different email address per event."),
 *   cardinality = \Drupal\webform\Plugin\WebformHandlerInterface::CARDINALITY_UNLIMITED,
 *   results = \Drupal\webform\Plugin\WebformHandlerInterface::RESULTS_PROCESSED,
 * )
 */
class EventContact extends EmailWebformHandler
{
    public function sendMessage(WebformSubmissionInterface $webform_submission, array $message)
    {
        //captura la data resultante del evento submit del formulario
        $data = $webform_submission->getData();

        $node = \Drupal::routeMatch()->getParameter('node');
        if ($node instanceof \Drupal\node\NodeInterface) {
            // You can get nid and anything else you need from the node object.
            $nid = $node->id();

            //de acuerdo a la zona seleccionada se llama a la funcion para que se recupere el correo del usuario jefe de zona correspondiente

            $recipient = $this->getJobEmails($nid);
            if ($recipient) {
                //emplea el metodo de la clase padre para heredar su funcionalidad
                $message['to_mail'] = $recipient;
                parent::sendMessage($webform_submission, $message);
            }

        }
    }

    /**
     * return the email list from a user
     * @param integer $idregional
     * @return string
     */
    public function getJobEmails($nid)
    {
        //obtiene la data de la entidad de tipo usuario y se filtra de acuerdo a los roles y el campo del id regional
        $node_storage = \Drupal::service('entity_type.manager')->getStorage('node');
        //carga los objetos resultados de las consulta anterior usando los ids
        $node = $node_storage->load($nid);

        $emails = [];
        // Se obtienen los correos almacenados y se recorren para almacenarlos
        foreach($node->get('field_email')->getValue() as $value){
            $emails[]=$value['value'];
        }

        //convierte los elementos del array en un string separandolos con una coma
        $email_list = implode(", ", $emails);
        //regresa el valor del string $email_list
        return $email_list;
    }
}
