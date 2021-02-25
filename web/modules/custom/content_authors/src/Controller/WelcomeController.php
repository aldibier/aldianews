<?php
namespace Drupal\content_authors\Controller;

class  WelcomeController  {
  public function welcome() {
    return array (
      '#markup'  => 'Bienvenido a nuestro sitio web.'
    );
  }
}
