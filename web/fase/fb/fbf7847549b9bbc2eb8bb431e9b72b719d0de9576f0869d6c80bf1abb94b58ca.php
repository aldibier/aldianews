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

/* themes/custom/al_dia_news/templates/block/block--block-group-high-impact-and-most-visited-news-home.html.twig */
class __TwigTemplate_951c0816bb3f1de48b9a33d3f3ac160e910bf7b744b2f641d6846b969cd6a8fe extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 33
        $context["classes"] = [0 => "block", 1 => "padd15 section1310", 2 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 36
($context["configuration"] ?? null), "provider", [], "any", false, false, true, 36), 36, $this->source))), 3 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 37
($context["plugin_id"] ?? null), 37, $this->source)))];
        // line 40
        echo "
";
        // line 41
        $context["view"] = twig_length_filter($this->env, views_get_view_result("high_impact_news_home", "block_1"));
        // line 42
        echo "
";
        // line 43
        if ((($context["view"] ?? null) > 0)) {
            // line 44
            echo "\t<button class=\"watch-live-button watch-live-mobile\" name=\"watch-live\" type=\"button\">WATCH LIVE</button>
\t<div";
            // line 45
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 45), 45, $this->source), "html", null, true);
            echo ">
\t\t";
            // line 46
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 46, $this->source), "html", null, true);
            echo "
\t\t";
            // line 47
            if (($context["label"] ?? null)) {
                // line 48
                echo "\t\t\t<h2";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_attributes"] ?? null), 48, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 48, $this->source), "html", null, true);
                echo "</h2>
\t\t";
            }
            // line 50
            echo "\t\t";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 50, $this->source), "html", null, true);
            echo "
\t\t";
            // line 51
            $this->displayBlock('content', $context, $blocks);
            // line 56
            echo "\t</div>
";
        }
    }

    // line 51
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 52
        echo "\t\t\t<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => "content"], "method", false, false, true, 52), 52, $this->source), "html", null, true);
        echo ">
\t\t\t\t";
        // line 53
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 53, $this->source), "html", null, true);
        echo "
\t\t\t</div>
\t\t";
    }

    public function getTemplateName()
    {
        return "themes/custom/al_dia_news/templates/block/block--block-group-high-impact-and-most-visited-news-home.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  97 => 53,  92 => 52,  88 => 51,  82 => 56,  80 => 51,  75 => 50,  67 => 48,  65 => 47,  61 => 46,  57 => 45,  54 => 44,  52 => 43,  49 => 42,  47 => 41,  44 => 40,  42 => 37,  41 => 36,  40 => 33,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation to display a block.
 *
 * Available variables:
 * - plugin_id: The ID of the block implementation.
 * - label: The configured label of the block if visible.
 * - configuration: A list of the block's configuration values.
 *   - label: The configured label for the block.
 *   - label_display: The display settings for the label.
 *   - provider: The module or other provider that provided this block plugin.
 *   - Block plugin specific settings will also be stored here.
 * - content: The content of this block.
 * - attributes: array of HTML attributes populated by modules, intended to
 *   be added to the main container tag of this template.
 *   - id: A valid HTML ID and guaranteed unique.
 * - title_attributes: Same as attributes, except applied to the main title
 *   tag that appears in the template.
 * - content_attributes: Same as attributes, except applied to the main content
 *   tag that appears in the template.
 * - title_prefix: Additional output populated by modules, intended to be
 *   displayed in front of the main title tag that appears in the template.
 * - title_suffix: Additional output populated by modules, intended to be
 *   displayed after the main title tag that appears in the template.
 *
 * @see template_preprocess_block()
 *
 * @ingroup themeable
 */
#}
{%
  set classes = [
    'block',
    'padd15 section1310',
    'block-' ~ configuration.provider|clean_class,
    'block-' ~ plugin_id|clean_class,
  ]
%}

{% set view = drupal_view_result('high_impact_news_home', 'block_1')|length %}

{% if view > 0 %}
\t<button class=\"watch-live-button watch-live-mobile\" name=\"watch-live\" type=\"button\">WATCH LIVE</button>
\t<div{{attributes.addClass(classes)}}>
\t\t{{ title_prefix }}
\t\t{% if label %}
\t\t\t<h2{{title_attributes}}>{{ label }}</h2>
\t\t{% endif %}
\t\t{{ title_suffix }}
\t\t{% block content %}
\t\t\t<div{{content_attributes.addClass('content')}}>
\t\t\t\t{{ content }}
\t\t\t</div>
\t\t{% endblock %}
\t</div>
{% endif %}
", "themes/custom/al_dia_news/templates/block/block--block-group-high-impact-and-most-visited-news-home.html.twig", "/var/www/html/aldia-news/web/themes/custom/al_dia_news/templates/block/block--block-group-high-impact-and-most-visited-news-home.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 33, "if" => 43, "block" => 51);
        static $filters = array("clean_class" => 36, "length" => 41, "escape" => 45);
        static $functions = array("drupal_view_result" => 41);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 'length', 'escape'],
                ['drupal_view_result']
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
