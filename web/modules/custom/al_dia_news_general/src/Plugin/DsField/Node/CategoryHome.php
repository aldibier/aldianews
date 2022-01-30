<?php

namespace Drupal\al_dia_news_general\Plugin\DsField\Node;

use Drupal\ds\Plugin\DsField\DsFieldBase;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Database\Connection;
use Drupal\Core\Url;

/**
 * Plugin that renders the author of a Documentos.
 *
 * @DsField(
 *   id = "category_home",
 *   title = @Translation("Category Home"),
 *   entity_type = "node"
 * )
 */
class CategoryHome extends DsFieldBase {

  /**
   * Variable para formatear conexion con la base de datos.
   *
   * @var \Drupal\Core\Database\Connection
   */
  protected $database;

  /**
   * Constructs a Display Suite field plugin.
   */
  public function __construct($configuration, $plugin_id, $plugin_definition, Connection $connection) {
    $this->database = $connection;
    parent::__construct($configuration, $plugin_id, $plugin_definition);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {

    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('database')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $entity = $this->entity();
    $items = [];
    $category = $entity->field_category->getValue();
    $output = [];
    if ($category) {
        $query1 = $this->database->select('node_field_data', 'n');
        $query1->fields("n", ["nid", "created"]);
        $query1->addField("t", "parent_target_id");
        $query1->addField("c", "entity_id");
        $query1->addField("td", "name");
        $query1->addField("ttd", "name");
        $query1->addField("tt", "parent_target_id");
        $query1->innerJoin("node__field_category", "c", "n.nid = c.entity_id");
        $query1->innerJoin("taxonomy_term__parent", "t", "c.field_category_target_id = t.entity_id");
        $query1->innerJoin("taxonomy_term_field_data", "td", "t.parent_target_id = td.tid");
        $query1->leftJoin("taxonomy_term__parent", "tt", "t.parent_target_id = tt.entity_id");
        $query1->leftJoin("taxonomy_term_field_data", "ttd", "tt.parent_target_id = ttd.tid");
        $query1->condition("n.type", "news", "=");
        $query1->condition("c.field_category_target_id", $category[0]['target_id'], "=");
        $query1->range(0, 1);
        $results = $query1->execute()->fetchObject();
        if ($results->tt_parent_target_id) {
            $title = $this->getTranslation($results->tt_parent_target_id);
            $link = Url::fromRoute('entity.taxonomy_term.canonical', [
                'taxonomy_term' => $results->tt_parent_target_id,
            ]);
        }
        else {
          $title = $this->getTranslation($results->entity_id);
            $link = Url::fromRoute('entity.taxonomy_term.canonical', [
                'taxonomy_term' => $results->parent_target_id,
            ]);
        }
        $output = [
            '#type' => 'link',
            '#title' => $title,
            '#url' => $link,
        ];
    }

    return $output;
  }

  /**
   * Get Term ID to get translation
   *
   * @param [type] $tid
   * @return void
   */
  public function getTranslation($tid){
    $tids = [$tid];
    $language =  \Drupal::languageManager()->getCurrentLanguage()->getId();
    $terms = \Drupal\taxonomy\Entity\Term::loadMultiple($tids);
    $translation = "";

    foreach($terms as $term) {
      if($term->hasTranslation($language)){
          $translated_term = \Drupal::service('entity.repository')->getTranslationFromContext($term, $language);
          $translation = $translated_term->getName();
      }
    }

    return $translation;
  }
}