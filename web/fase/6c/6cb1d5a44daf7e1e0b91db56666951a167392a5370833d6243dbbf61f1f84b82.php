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

/* themes/contrib/gin/templates/page/page.html.twig */
class __TwigTemplate_4c2ce91b1c6af3d9d90b19d3d7200e2e4c52b97c81083eba63de68d7e260bec3 extends \Twig\Template
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
        // line 42
        $context["page_title_block"] = ($this->sandbox->ensureToStringAllowed(($context["active_admin_theme"] ?? null), 42, $this->source) . "_page_title");
        // line 43
        $context["local_actions_block"] = ($this->sandbox->ensureToStringAllowed(($context["active_admin_theme"] ?? null), 43, $this->source) . "_local_actions");
        // line 44
        echo "
<div class=\"region region-meta layout-container\">
  <div class=\"breadcrumb-wrapper\">
    ";
        // line 47
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 47), 47, $this->source), "html", null, true);
        echo "
  </div>
  ";
        // line 49
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "gin_secondary_toolbar", [], "any", false, false, true, 49), 49, $this->source), "html", null, true);
        echo "
</div>

<header class=\"region region-sticky\">
  <div class=\"layout-container region-sticky__items\">
    <div class=\"region-sticky__items__inner\">
      ";
        // line 55
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed((($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 55)) && is_array($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4) || $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 instanceof ArrayAccess ? ($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4[($context["page_title_block"] ?? null)] ?? null) : null), 55, $this->source), "html", null, true);
        echo "
      ";
        // line 56
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed((($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 = twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 56)) && is_array($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144) || $__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144 instanceof ArrayAccess ? ($__internal_62824350bc4502ee19dbc2e99fc6bdd3bd90e7d8dd6e72f42c35efd048542144[($context["local_actions_block"] ?? null)] ?? null) : null), 56, $this->source), "html", null, true);
        echo "
    </div>
  </div>
</header>

<div class=\"content-header clearfix\">
  <div class=\"layout-container\">
    ";
        // line 63
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 63), 63, $this->source), $this->sandbox->ensureToStringAllowed(($context["page_title_block"] ?? null), 63, $this->source)), "html", null, true);
        echo "
  </div>
</div>

<div class=\"sticky-shadow\"></div>

<div class=\"layout-container\">
  ";
        // line 70
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "pre_content", [], "any", false, false, true, 70), 70, $this->source), "html", null, true);
        echo "
  <main class=\"page-content clearfix\" role=\"main\">
    <div class=\"visually-hidden\"><a id=\"main-content\" tabindex=\"-1\"></a></div>
    ";
        // line 73
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 73), 73, $this->source), "html", null, true);
        echo "
    ";
        // line 74
        if (twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 74)) {
            // line 75
            echo "      <div class=\"help\">
        ";
            // line 76
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "help", [], "any", false, false, true, 76), 76, $this->source), "html", null, true);
            echo "
      </div>
    ";
        }
        // line 79
        echo "    ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 79), 79, $this->source), $this->sandbox->ensureToStringAllowed(($context["local_actions_block"] ?? null), 79, $this->source)), "html", null, true);
        echo "
  </main>
</div>
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/gin/templates/page/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  107 => 79,  101 => 76,  98 => 75,  96 => 74,  92 => 73,  86 => 70,  76 => 63,  66 => 56,  62 => 55,  53 => 49,  48 => 47,  43 => 44,  41 => 43,  39 => 42,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Claro's theme implementation to display a single Drupal page.
 *
 * The doctype, html, head, and body tags are not in this template. Instead
 * they can be found in the html.html.twig template normally located in the
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
 * - page.pre_content: Items for the pre-content region.
 * - page.breadcrumb: Items for the breadcrumb region.
 * - page.highlighted: Items for the highlighted region.
 * - page.help: Dynamic help text, mostly for admin pages.
 * - page.content: The main content of the current page.
 *
 * @see template_preprocess_page()
 * @see html.html.twig
 */
#}
{% set page_title_block = active_admin_theme ~ '_page_title' %}
{% set local_actions_block = active_admin_theme ~ '_local_actions' %}

<div class=\"region region-meta layout-container\">
  <div class=\"breadcrumb-wrapper\">
    {{ page.breadcrumb }}
  </div>
  {{ page.gin_secondary_toolbar }}
</div>

<header class=\"region region-sticky\">
  <div class=\"layout-container region-sticky__items\">
    <div class=\"region-sticky__items__inner\">
      {{ page.header[page_title_block] }}
      {{ page.content[local_actions_block] }}
    </div>
  </div>
</header>

<div class=\"content-header clearfix\">
  <div class=\"layout-container\">
    {{ page.header|without(page_title_block) }}
  </div>
</div>

<div class=\"sticky-shadow\"></div>

<div class=\"layout-container\">
  {{ page.pre_content }}
  <main class=\"page-content clearfix\" role=\"main\">
    <div class=\"visually-hidden\"><a id=\"main-content\" tabindex=\"-1\"></a></div>
    {{ page.highlighted }}
    {% if page.help %}
      <div class=\"help\">
        {{ page.help }}
      </div>
    {% endif %}
    {{ page.content|without(local_actions_block) }}
  </main>
</div>
", "themes/contrib/gin/templates/page/page.html.twig", "/var/www/html/aldia-news/web/themes/contrib/gin/templates/page/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 42, "if" => 74);
        static $filters = array("escape" => 47, "without" => 63);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['escape', 'without'],
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
