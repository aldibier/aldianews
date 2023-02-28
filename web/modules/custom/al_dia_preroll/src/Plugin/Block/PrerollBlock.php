<?php

namespace Drupal\al_dia_preroll\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a Preroll Block.
 *
 * @Block(
 *   id = "preroll_block",
 *   admin_label = @Translation("Preroll Block"),
 * )
 */
class prerollBlock extends BlockBase {
    
    /**
    * {@inheritdoc}
    */
    public function build() {
        return [
            '#theme' => 'preroll_block',
            '#params' => [],
            '#cache' => [
                'max-age' => 0,
            ],
        ];
    }

}