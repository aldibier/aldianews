<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/al_dia_news/templates/page/page.html.twig */
class __TwigTemplate_38460ba5c9624136f3add87a1df175fc9b0f5bc2cf8d00575e626616c7bab899 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 53
        echo "<div id=\"page-wrapper\">
  <div id=\"page\">
    <header id=\"header\" class=\"header\" role=\"banner\">
      <div class=\"section layout-container clearfix\">
        ";
        // line 57
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 57), 57, $this->source), "html", null, true);
        echo "
        ";
        // line 58
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 58), 58, $this->source), "html", null, true);
        echo "
        ";
        // line 59
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 59), 59, $this->source), "html", null, true);
        echo "
      </div>

      <script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"></script>
      <script>
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
          var mapping = googletag.sizeMapping()
                  .addSize([1024,0], [[728, 90]])
                  .addSize([769,0], [[300, 250]])
                  .addSize([0,0], [[300,250]])
                  .build();

          googletag.defineSlot('/309686595/internal-section-body', [[728, 90], [300, 250]], 'div-gpt-ad-1644009767547-0')
          .defineSizeMapping(mapping)
          .addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();
          googletag.pubads().collapseEmptyDivs();
          googletag.enableServices();
        });
      </script>

    </header>
    ";
        // line 82
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 82)) {
            // line 83
            echo "      <div class=\"highlighted\">
        <aside class=\"layout-container section clearfix\" role=\"complementary\">
          ";
            // line 85
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 85), 85, $this->source), "html", null, true);
            echo "
        </aside>
      </div>
    ";
        }
        // line 89
        echo "    ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_top", [], "any", false, false, true, 89)) {
            // line 90
            echo "      <div class=\"featured-top\">
        <aside class=\"featured-top__inner section layout-container clearfix\" role=\"complementary\">
          ";
            // line 92
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_top", [], "any", false, false, true, 92), 92, $this->source), "html", null, true);
            echo "
        </aside>
      </div>
    ";
        }
        // line 96
        echo "    <div id=\"main-wrapper\" class=\"layout-main-wrapper layout-container clearfix\">
      <div id=\"main\" class=\"layout-main clearfix\">
        ";
        // line 98
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 98), 98, $this->source), "html", null, true);
        echo "
        <main id=\"content\" class=\"column main-content\" role=\"main\">
          <section class=\"section\">
            <a id=\"main-content\" tabindex=\"-1\"></a>
            ";
        // line 102
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 102), 102, $this->source), "html", null, true);
        echo "
          </section>
        </main>
        ";
        // line 105
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 105)) {
            // line 106
            echo "          <div id=\"sidebar-first\" class=\"column sidebar\">
            <aside class=\"section\" role=\"complementary\">
              ";
            // line 108
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 108), 108, $this->source), "html", null, true);
            echo "
            </aside>
          </div>
        ";
        }
        // line 112
        echo "        ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 112)) {
            // line 113
            echo "          <div id=\"sidebar-second\" class=\"column sidebar\">
            <aside class=\"section\" role=\"complementary\">
              ";
            // line 115
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 115), 115, $this->source), "html", null, true);
            echo "
            </aside>
          </div>
        ";
        }
        // line 119
        echo "      </div>
    </div>
    ";
        // line 121
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_first", [], "any", false, false, true, 121) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_second", [], "any", false, false, true, 121)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_third", [], "any", false, false, true, 121))) {
            // line 122
            echo "      <div class=\"featured-bottom\">
        <aside class=\"layout-container clearfix\" role=\"complementary\">
          ";
            // line 124
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_first", [], "any", false, false, true, 124), 124, $this->source), "html", null, true);
            echo "
          ";
            // line 125
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_second", [], "any", false, false, true, 125), 125, $this->source), "html", null, true);
            echo "
          ";
            // line 126
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_third", [], "any", false, false, true, 126), 126, $this->source), "html", null, true);
            echo "
        </aside>
      </div>
    ";
        }
        // line 130
        echo "    <footer class=\"site-footer\">
      <div class=\"layout-container\">
        ";
        // line 132
        if ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 132) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 132)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 132)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 132))) {
            // line 133
            echo "          <div class=\"site-footer__top clearfix\">
            ";
            // line 134
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 134), 134, $this->source), "html", null, true);
            echo "
            ";
            // line 135
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 135), 135, $this->source), "html", null, true);
            echo "
            ";
            // line 136
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 136), 136, $this->source), "html", null, true);
            echo "
            ";
            // line 137
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 137), 137, $this->source), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 140
        echo "        ";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fifth", [], "any", false, false, true, 140)) {
            // line 141
            echo "          <div class=\"site-footer__bottom\">
            ";
            // line 142
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fifth", [], "any", false, false, true, 142), 142, $this->source), "html", null, true);
            echo "
          </div>
        ";
        }
        // line 145
        echo "      </div>
    </footer>
  </div>
</div>
";
        // line 150
        echo "<div id=\"video-container\" class=\"muted\">
\t<video id=\"video-element\"></video>
\t<div id=\"ad-container\"></div>
\t<div id=\"ads-main-controls\">
\t\t<button id=\"play-previous\" class=\"disabled\" disabled>Previous</button>
\t\t<button id=\"play-switch\">Play</button>
\t\t<button id=\"play-next\">Next</button>
\t</div>
\t<div id=\"ads-secundary-controls\">
\t\t<div id=\"ads-progress-container\">
\t\t\t<div id=\"ads-progress\">
\t\t\t\t<span class=\"bar\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div id=\"ads-sound-container\">
\t\t\t<button id=\"ads-sound\">Unmuted</button>
\t\t</div>
\t\t<div id=\"ads-time-container\">
\t\t\t<span class=\"ads-time-left\">00:00</span> / <span class=\"ads-time-total\">00:00</span>
\t\t</div>
\t\t<div id=\"ads-fullscreen-container\">
\t\t\t<button id=\"ads-fullscreen\">Fullscreen</button>
\t\t</div>
\t</div>
\t<a class=\"ads-destiny-link\" target=\"_blank\">Ads destiny link</a>
\t<button id=\"btn-close-preroll\">Close ads video</button>
\t<button id=\"play-button\" style=\"display:none\">Play</button>
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/custom/al_dia_news/templates/page/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  220 => 150,  214 => 145,  208 => 142,  205 => 141,  202 => 140,  196 => 137,  192 => 136,  188 => 135,  184 => 134,  181 => 133,  179 => 132,  175 => 130,  168 => 126,  164 => 125,  160 => 124,  156 => 122,  154 => 121,  150 => 119,  143 => 115,  139 => 113,  136 => 112,  129 => 108,  125 => 106,  123 => 105,  117 => 102,  110 => 98,  106 => 96,  99 => 92,  95 => 90,  92 => 89,  85 => 85,  81 => 83,  79 => 82,  53 => 59,  49 => 58,  45 => 57,  39 => 53,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Bartik's theme implementation to display a single page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.html.twig template normally located in the
 * core/modules/system directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - base_path: The base URL path of the Drupal installation. Will usually be
 *   \"/\" unless you have installed Drupal in a sub-directory.
 * - is_front: A flag indicating if the current page is the front page.
 * - logged_in: A flag indicating if the user is registered and signed in.
 * - is_admin: A flag indicating if the user has permission to access
 *   administration pages.
 *
 * Site identity:
 * - front_page: The URL of the front page. Use this instead of base_path when
 *   linking to the front page. This includes the language domain or prefix.
 *
 * Page content (in order of occurrence in the default page.html.twig):
 * - node: Fully loaded node, if there is an automatically-loaded node
 *   associated with the page and the node ID is the second argument in the
 *   page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - page.header: Items for the header region.
 * - page.highlighted: Items for the highlighted region.
 * - page.primary_menu: Items for the primary menu region.
 * - page.secondary_menu: Items for the secondary menu region.
 * - page.featured_top: Items for the featured top region.
 * - page.content: The main content of the current page.
 * - page.sidebar_first: Items for the first sidebar.
 * - page.sidebar_second: Items for the second sidebar.
 * - page.featured_bottom_first: Items for the first featured bottom region.
 * - page.featured_bottom_second: Items for the second featured bottom region.
 * - page.featured_bottom_third: Items for the third featured bottom region.
 * - page.footer_first: Items for the first footer column.
 * - page.footer_second: Items for the second footer column.
 * - page.footer_third: Items for the third footer column.
 * - page.footer_fourth: Items for the fourth footer column.
 * - page.footer_fifth: Items for the fifth footer column.
 * - page.breadcrumb: Items for the breadcrumb region.
 *
 * @see template_preprocess_page()
 * @see html.html.twig
 */
#}
<div id=\"page-wrapper\">
  <div id=\"page\">
    <header id=\"header\" class=\"header\" role=\"banner\">
      <div class=\"section layout-container clearfix\">
        {{ page.secondary_menu }}
        {{ page.header }}
        {{ page.primary_menu }}
      </div>

      <script async src=\"https://securepubads.g.doubleclick.net/tag/js/gpt.js\"></script>
      <script>
        window.googletag = window.googletag || {cmd: []};
        googletag.cmd.push(function() {
          var mapping = googletag.sizeMapping()
                  .addSize([1024,0], [[728, 90]])
                  .addSize([769,0], [[300, 250]])
                  .addSize([0,0], [[300,250]])
                  .build();

          googletag.defineSlot('/309686595/internal-section-body', [[728, 90], [300, 250]], 'div-gpt-ad-1644009767547-0')
          .defineSizeMapping(mapping)
          .addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();
          googletag.pubads().collapseEmptyDivs();
          googletag.enableServices();
        });
      </script>

    </header>
    {% if page.highlighted %}
      <div class=\"highlighted\">
        <aside class=\"layout-container section clearfix\" role=\"complementary\">
          {{ page.highlighted }}
        </aside>
      </div>
    {% endif %}
    {% if page.featured_top %}
      <div class=\"featured-top\">
        <aside class=\"featured-top__inner section layout-container clearfix\" role=\"complementary\">
          {{ page.featured_top }}
        </aside>
      </div>
    {% endif %}
    <div id=\"main-wrapper\" class=\"layout-main-wrapper layout-container clearfix\">
      <div id=\"main\" class=\"layout-main clearfix\">
        {{ page.breadcrumb }}
        <main id=\"content\" class=\"column main-content\" role=\"main\">
          <section class=\"section\">
            <a id=\"main-content\" tabindex=\"-1\"></a>
            {{ page.content }}
          </section>
        </main>
        {% if page.sidebar_first %}
          <div id=\"sidebar-first\" class=\"column sidebar\">
            <aside class=\"section\" role=\"complementary\">
              {{ page.sidebar_first }}
            </aside>
          </div>
        {% endif %}
        {% if page.sidebar_second %}
          <div id=\"sidebar-second\" class=\"column sidebar\">
            <aside class=\"section\" role=\"complementary\">
              {{ page.sidebar_second }}
            </aside>
          </div>
        {% endif %}
      </div>
    </div>
    {% if page.featured_bottom_first or page.featured_bottom_second or page.featured_bottom_third %}
      <div class=\"featured-bottom\">
        <aside class=\"layout-container clearfix\" role=\"complementary\">
          {{ page.featured_bottom_first }}
          {{ page.featured_bottom_second }}
          {{ page.featured_bottom_third }}
        </aside>
      </div>
    {% endif %}
    <footer class=\"site-footer\">
      <div class=\"layout-container\">
        {% if page.footer_first or page.footer_second or page.footer_third or page.footer_fourth %}
          <div class=\"site-footer__top clearfix\">
            {{ page.footer_first }}
            {{ page.footer_second }}
            {{ page.footer_third }}
            {{ page.footer_fourth }}
          </div>
        {% endif %}
        {% if page.footer_fifth %}
          <div class=\"site-footer__bottom\">
            {{ page.footer_fifth }}
          </div>
        {% endif %}
      </div>
    </footer>
  </div>
</div>
{# Reproductor SDK #}
<div id=\"video-container\" class=\"muted\">
\t<video id=\"video-element\"></video>
\t<div id=\"ad-container\"></div>
\t<div id=\"ads-main-controls\">
\t\t<button id=\"play-previous\" class=\"disabled\" disabled>Previous</button>
\t\t<button id=\"play-switch\">Play</button>
\t\t<button id=\"play-next\">Next</button>
\t</div>
\t<div id=\"ads-secundary-controls\">
\t\t<div id=\"ads-progress-container\">
\t\t\t<div id=\"ads-progress\">
\t\t\t\t<span class=\"bar\"></span>
\t\t\t</div>
\t\t</div>
\t\t<div id=\"ads-sound-container\">
\t\t\t<button id=\"ads-sound\">Unmuted</button>
\t\t</div>
\t\t<div id=\"ads-time-container\">
\t\t\t<span class=\"ads-time-left\">00:00</span> / <span class=\"ads-time-total\">00:00</span>
\t\t</div>
\t\t<div id=\"ads-fullscreen-container\">
\t\t\t<button id=\"ads-fullscreen\">Fullscreen</button>
\t\t</div>
\t</div>
\t<a class=\"ads-destiny-link\" target=\"_blank\">Ads destiny link</a>
\t<button id=\"btn-close-preroll\">Close ads video</button>
\t<button id=\"play-button\" style=\"display:none\">Play</button>
</div>
", "themes/custom/al_dia_news/templates/page/page.html.twig", "/var/www/html/aldia-news/web/themes/custom/al_dia_news/templates/page/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 82);
        static $filters = array("escape" => 57);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
