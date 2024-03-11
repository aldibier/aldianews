<?php

namespace Drupal\content_authors\Controller;

use Drupal\Component\Utility\Xss;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Url;
use Drupal\content_authors\Entity\AuthorsInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Class AuthorsController.
 *
 *  Returns responses for Authors routes.
 */
class AuthorsController extends ControllerBase implements ContainerInjectionInterface {

  /**
   * The date formatter.
   *
   * @var \Drupal\Core\Datetime\DateFormatter
   */
  protected $dateFormatter;

  /**
   * The renderer.
   *
   * @var \Drupal\Core\Render\Renderer
   */
  protected $renderer;

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    $instance = parent::create($container);
    $instance->dateFormatter = $container->get('date.formatter');
    $instance->renderer = $container->get('renderer');
    return $instance;
  }

  /**
   * Displays a Authors revision.
   *
   * @param int $authors_revision
   *   The Authors revision ID.
   *
   * @return array
   *   An array suitable for drupal_render().
   */
  public function revisionShow($authors_revision) {
    $authors = $this->entityTypeManager()->getStorage('authors')
      ->loadRevision($authors_revision);
    $view_builder = $this->entityTypeManager()->getViewBuilder('authors');

    return $view_builder->view($authors);
  }

  /**
   * Page title callback for a Authors revision.
   *
   * @param int $authors_revision
   *   The Authors revision ID.
   *
   * @return string
   *   The page title.
   */
  public function revisionPageTitle($authors_revision) {
    $authors = $this->entityTypeManager()->getStorage('authors')
      ->loadRevision($authors_revision);
    return $this->t('Revision of %title from %date', [
      '%title' => $authors->label(),
      '%date' => $this->dateFormatter->format($authors->getRevisionCreationTime()),
    ]);
  }

  /**
   * Generates an overview table of older revisions of a Authors.
   *
   * @param \Drupal\content_authors\Entity\AuthorsInterface $authors
   *   A Authors object.
   *
   * @return array
   *   An array as expected by drupal_render().
   */
  public function revisionOverview(AuthorsInterface $authors) {
    $account = $this->currentUser();
    $authors_storage = $this->entityTypeManager()->getStorage('authors');

    $langcode = $authors->language()->getId();
    $langname = $authors->language()->getName();
    $languages = $authors->getTranslationLanguages();
    $has_translations = (count($languages) > 1);
    $build['#title'] = $has_translations ? $this->t('@langname revisions for %title', ['@langname' => $langname, '%title' => $authors->label()]) : $this->t('Revisions for %title', ['%title' => $authors->label()]);

    $header = [$this->t('Revision'), $this->t('Operations')];
    $revert_permission = (($account->hasPermission("revert all authors revisions") || $account->hasPermission('administer authors entities')));
    $delete_permission = (($account->hasPermission("delete all authors revisions") || $account->hasPermission('administer authors entities')));

    $rows = [];

    $vids = $authors_storage->revisionIds($authors);

    $latest_revision = TRUE;

    foreach (array_reverse($vids) as $vid) {
      /** @var \Drupal\content_authors\AuthorsInterface $revision */
      $revision = $authors_storage->loadRevision($vid);
      // Only show revisions that are affected by the language that is being
      // displayed.
      if ($revision->hasTranslation($langcode) && $revision->getTranslation($langcode)->isRevisionTranslationAffected()) {
        $username = [
          '#theme' => 'username',
          '#account' => $revision->getRevisionUser(),
        ];

        // Use revision link to link to revisions that are not active.
        $date = $this->dateFormatter->format($revision->getRevisionCreationTime(), 'short');
        if ($vid != $authors->getRevisionId()) {
          $link = $this->l($date, new Url('entity.authors.revision', [
            'authors' => $authors->id(),
            'authors_revision' => $vid,
          ]));
        }
        else {
          // TODO: Drupal Rector Notice: Please delete the following comment after you've made any necessary changes.
          // Please confirm that `$authors` is an instance of `\Drupal\Core\Entity\EntityInterface`. Only the method name and not the class name was checked for this replacement, so this may be a false positive.
          $link = $authors->toLink($date)->toString();
        }

        $row = [];
        $column = [
          'data' => [
            '#type' => 'inline_template',
            '#template' => '{% trans %}{{ date }} by {{ username }}{% endtrans %}{% if message %}<p class="revision-log">{{ message }}</p>{% endif %}',
            '#context' => [
              'date' => $link,
              'username' => $this->renderer->renderPlain($username),
              'message' => [
                '#markup' => $revision->getRevisionLogMessage(),
                '#allowed_tags' => Xss::getHtmlTagList(),
              ],
            ],
          ],
        ];
        $row[] = $column;

        if ($latest_revision) {
          $row[] = [
            'data' => [
              '#prefix' => '<em>',
              '#markup' => $this->t('Current revision'),
              '#suffix' => '</em>',
            ],
          ];
          foreach ($row as &$current) {
            $current['class'] = ['revision-current'];
          }
          $latest_revision = FALSE;
        }
        else {
          $links = [];
          if ($revert_permission) {
            $links['revert'] = [
              'title' => $this->t('Revert'),
              'url' => $has_translations ?
              Url::fromRoute('entity.authors.translation_revert', [
                'authors' => $authors->id(),
                'authors_revision' => $vid,
                'langcode' => $langcode,
              ]) :
              Url::fromRoute('entity.authors.revision_revert', [
                'authors' => $authors->id(),
                'authors_revision' => $vid,
              ]),
            ];
          }

          if ($delete_permission) {
            $links['delete'] = [
              'title' => $this->t('Delete'),
              'url' => Url::fromRoute('entity.authors.revision_delete', [
                'authors' => $authors->id(),
                'authors_revision' => $vid,
              ]),
            ];
          }

          $row[] = [
            'data' => [
              '#type' => 'operations',
              '#links' => $links,
            ],
          ];
        }

        $rows[] = $row;
      }
    }

    $build['authors_revisions_table'] = [
      '#theme' => 'table',
      '#rows' => $rows,
      '#header' => $header,
    ];

    return $build;
  }

}
