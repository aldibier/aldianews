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

/* themes/custom/al_dia_news/templates/page/page--front.html.twig */
class __TwigTemplate_a737b5c84878977469241a775e26b709da3b79e949446d044f5195b3bf966b88 extends \Twig\Template
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
\t<div id=\"page\">
\t\t<header id=\"header\" class=\"header\" role=\"banner\">
\t\t\t<div class=\"section layout-container clearfix\">
\t\t\t\t";
        // line 57
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 57), 57, $this->source), "html", null, true);
        echo "
\t\t\t\t";
        // line 58
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 58), 58, $this->source), "html", null, true);
        echo "
\t\t\t\t";
        // line 59
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 59), 59, $this->source), "html", null, true);
        echo "
\t\t\t</div>
\t\t</header>
\t\t";
        // line 62
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 62)) {
            // line 63
            echo "\t\t\t<div class=\"highlighted\">
\t\t\t\t<aside class=\"layout-container section clearfix\" role=\"complementary\">
\t\t\t\t\t";
            // line 65
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 65), 65, $this->source), "html", null, true);
            echo "
\t\t\t\t</aside>
\t\t\t</div>
\t\t";
        }
        // line 69
        echo "\t\t";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_top", [], "any", false, false, true, 69)) {
            // line 70
            echo "\t\t\t<div class=\"featured-top\">
\t\t\t\t<aside class=\"featured-top__inner section layout-container clearfix\" role=\"complementary\">
\t\t\t\t\t";
            // line 72
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_top", [], "any", false, false, true, 72), 72, $this->source), "html", null, true);
            echo "
\t\t\t\t</aside>
\t\t\t</div>
\t\t";
        }
        // line 76
        echo "\t\t<div id=\"main-wrapper\" class=\"layout-main-wrapper layout-container clearfix\">
\t\t\t<div id=\"main\" class=\"layout-main clearfix width1440\">
\t\t\t\t";
        // line 78
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 78), 78, $this->source), "html", null, true);
        echo "
\t\t\t\t<main id=\"content\" class=\"column main-content\" role=\"main\">
\t\t\t\t\t<section class=\"section\">
\t\t\t\t\t\t<a id=\"main-content\" tabindex=\"-1\"></a>
\t\t\t\t\t\t";
        // line 82
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 82), 82, $this->source), "html", null, true);
        echo "
\t\t\t\t\t</section>
\t\t\t\t</main>
\t\t\t\t";
        // line 85
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 85)) {
            // line 86
            echo "\t\t\t\t\t<div id=\"sidebar-first\" class=\"column sidebar\">
\t\t\t\t\t\t<aside class=\"section\" role=\"complementary\">
\t\t\t\t\t\t\t";
            // line 88
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 88), 88, $this->source), "html", null, true);
            echo "
\t\t\t\t\t\t</aside>
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 92
        echo "\t\t\t\t";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 92)) {
            // line 93
            echo "\t\t\t\t\t<div id=\"sidebar-second\" class=\"column sidebar\">
\t\t\t\t\t\t<aside class=\"section\" role=\"complementary\">
\t\t\t\t\t\t\t";
            // line 95
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 95), 95, $this->source), "html", null, true);
            echo "
\t\t\t\t\t\t</aside>
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 99
        echo "\t\t\t</div>
\t\t</div>
\t\t";
        // line 101
        if (((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_first", [], "any", false, false, true, 101) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_second", [], "any", false, false, true, 101)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_third", [], "any", false, false, true, 101))) {
            // line 102
            echo "\t\t\t<div class=\"featured-bottom\">
\t\t\t\t<aside class=\"layout-container clearfix\" role=\"complementary\">
\t\t\t\t\t";
            // line 104
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_first", [], "any", false, false, true, 104), 104, $this->source), "html", null, true);
            echo "
\t\t\t\t\t";
            // line 105
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_second", [], "any", false, false, true, 105), 105, $this->source), "html", null, true);
            echo "
\t\t\t\t\t";
            // line 106
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "featured_bottom_third", [], "any", false, false, true, 106), 106, $this->source), "html", null, true);
            echo "
\t\t\t\t</aside>
\t\t\t</div>
\t\t";
        }
        // line 110
        echo "\t\t<footer class=\"site-footer\">
\t\t\t<div class=\"layout-container\">
\t\t\t\t";
        // line 112
        if ((((twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 112) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 112)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 112)) || twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 112))) {
            // line 113
            echo "\t\t\t\t\t<div class=\"site-footer__top clearfix\">
\t\t\t\t\t\t";
            // line 114
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 114), 114, $this->source), "html", null, true);
            echo "
\t\t\t\t\t\t";
            // line 115
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 115), 115, $this->source), "html", null, true);
            echo "
\t\t\t\t\t\t";
            // line 116
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 116), 116, $this->source), "html", null, true);
            echo "
\t\t\t\t\t\t";
            // line 117
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 117), 117, $this->source), "html", null, true);
            echo "
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 120
        echo "\t\t\t\t";
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fifth", [], "any", false, false, true, 120)) {
            // line 121
            echo "\t\t\t\t\t<div class=\"site-footer__bottom\">
\t\t\t\t\t\t";
            // line 122
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "footer_fifth", [], "any", false, false, true, 122), 122, $this->source), "html", null, true);
            echo "
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 125
        echo "\t\t\t</div>
\t\t</footer>
\t</div>
</div>
";
        // line 130
        echo "<div id=\"video-container\" class=\"muted\">
\t<video id=\"video-element\" playsinline muted></video>
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
        return "themes/custom/al_dia_news/templates/page/page--front.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  200 => 130,  194 => 125,  188 => 122,  185 => 121,  182 => 120,  176 => 117,  172 => 116,  168 => 115,  164 => 114,  161 => 113,  159 => 112,  155 => 110,  148 => 106,  144 => 105,  140 => 104,  136 => 102,  134 => 101,  130 => 99,  123 => 95,  119 => 93,  116 => 92,  109 => 88,  105 => 86,  103 => 85,  97 => 82,  90 => 78,  86 => 76,  79 => 72,  75 => 70,  72 => 69,  65 => 65,  61 => 63,  59 => 62,  53 => 59,  49 => 58,  45 => 57,  39 => 53,);
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
\t<div id=\"page\">
\t\t<header id=\"header\" class=\"header\" role=\"banner\">
\t\t\t<div class=\"section layout-container clearfix\">
\t\t\t\t{{ page.secondary_menu }}
\t\t\t\t{{ page.header }}
\t\t\t\t{{ page.primary_menu }}
\t\t\t</div>
\t\t</header>
\t\t{% if page.highlighted %}
\t\t\t<div class=\"highlighted\">
\t\t\t\t<aside class=\"layout-container section clearfix\" role=\"complementary\">
\t\t\t\t\t{{ page.highlighted }}
\t\t\t\t</aside>
\t\t\t</div>
\t\t{% endif %}
\t\t{% if page.featured_top %}
\t\t\t<div class=\"featured-top\">
\t\t\t\t<aside class=\"featured-top__inner section layout-container clearfix\" role=\"complementary\">
\t\t\t\t\t{{ page.featured_top }}
\t\t\t\t</aside>
\t\t\t</div>
\t\t{% endif %}
\t\t<div id=\"main-wrapper\" class=\"layout-main-wrapper layout-container clearfix\">
\t\t\t<div id=\"main\" class=\"layout-main clearfix width1440\">
\t\t\t\t{{ page.breadcrumb }}
\t\t\t\t<main id=\"content\" class=\"column main-content\" role=\"main\">
\t\t\t\t\t<section class=\"section\">
\t\t\t\t\t\t<a id=\"main-content\" tabindex=\"-1\"></a>
\t\t\t\t\t\t{{ page.content }}
\t\t\t\t\t</section>
\t\t\t\t</main>
\t\t\t\t{% if page.sidebar_first %}
\t\t\t\t\t<div id=\"sidebar-first\" class=\"column sidebar\">
\t\t\t\t\t\t<aside class=\"section\" role=\"complementary\">
\t\t\t\t\t\t\t{{ page.sidebar_first }}
\t\t\t\t\t\t</aside>
\t\t\t\t\t</div>
\t\t\t\t{% endif %}
\t\t\t\t{% if page.sidebar_second %}
\t\t\t\t\t<div id=\"sidebar-second\" class=\"column sidebar\">
\t\t\t\t\t\t<aside class=\"section\" role=\"complementary\">
\t\t\t\t\t\t\t{{ page.sidebar_second }}
\t\t\t\t\t\t</aside>
\t\t\t\t\t</div>
\t\t\t\t{% endif %}
\t\t\t</div>
\t\t</div>
\t\t{% if page.featured_bottom_first or page.featured_bottom_second or page.featured_bottom_third %}
\t\t\t<div class=\"featured-bottom\">
\t\t\t\t<aside class=\"layout-container clearfix\" role=\"complementary\">
\t\t\t\t\t{{ page.featured_bottom_first }}
\t\t\t\t\t{{ page.featured_bottom_second }}
\t\t\t\t\t{{ page.featured_bottom_third }}
\t\t\t\t</aside>
\t\t\t</div>
\t\t{% endif %}
\t\t<footer class=\"site-footer\">
\t\t\t<div class=\"layout-container\">
\t\t\t\t{% if page.footer_first or page.footer_second or page.footer_third or page.footer_fourth %}
\t\t\t\t\t<div class=\"site-footer__top clearfix\">
\t\t\t\t\t\t{{ page.footer_first }}
\t\t\t\t\t\t{{ page.footer_second }}
\t\t\t\t\t\t{{ page.footer_third }}
\t\t\t\t\t\t{{ page.footer_fourth }}
\t\t\t\t\t</div>
\t\t\t\t{% endif %}
\t\t\t\t{% if page.footer_fifth %}
\t\t\t\t\t<div class=\"site-footer__bottom\">
\t\t\t\t\t\t{{ page.footer_fifth }}
\t\t\t\t\t</div>
\t\t\t\t{% endif %}
\t\t\t</div>
\t\t</footer>
\t</div>
</div>
{# Reproductor SDK #}
<div id=\"video-container\" class=\"muted\">
\t<video id=\"video-element\" playsinline muted></video>
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
", "themes/custom/al_dia_news/templates/page/page--front.html.twig", "/var/www/html/aldia-news/web/themes/custom/al_dia_news/templates/page/page--front.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 62);
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
