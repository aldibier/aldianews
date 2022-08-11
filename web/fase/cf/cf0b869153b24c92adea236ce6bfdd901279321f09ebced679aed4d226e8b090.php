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

/* themes/custom/al_dia_news/templates/block/block--views-block-thought-leaders-home-block-4.html.twig */
class __TwigTemplate_2ccd67a6bf2b189253ff21b47f38b6f30bf56d8839eafa7715e198b4d28e5903 extends \Twig\Template
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
        // line 29
        $context["classes"] = [0 => "block", 1 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 31
($context["configuration"] ?? null), "provider", [], "any", false, false, true, 31), 31, $this->source))), 2 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 32
($context["plugin_id"] ?? null), 32, $this->source)))];
        // line 35
        echo "
";
        // line 36
        if ((twig_length_filter($this->env, views_get_view_result("thought_leaders_home", "block_4")) > 0)) {
            // line 37
            echo "\t<div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 37), 37, $this->source), "html", null, true);
            echo ">
\t\t";
            // line 38
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 38, $this->source), "html", null, true);
            echo "
\t\t";
            // line 39
            if (($context["label"] ?? null)) {
                // line 40
                echo "\t\t\t<h2";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_attributes"] ?? null), 40, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 40, $this->source), "html", null, true);
                echo "</h2>
\t\t";
            }
            // line 42
            echo "\t\t";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 42, $this->source), "html", null, true);
            echo "
\t\t";
            // line 43
            $this->displayBlock('content', $context, $blocks);
            // line 46
            echo "\t</div>
";
        }
        // line 48
        echo "
";
    }

    // line 43
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 44
        echo "\t\t\t";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 44, $this->source), "html", null, true);
        echo "
\t\t";
    }

    public function getTemplateName()
    {
        return "themes/custom/al_dia_news/templates/block/block--views-block-thought-leaders-home-block-4.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  88 => 44,  84 => 43,  79 => 48,  75 => 46,  73 => 43,  68 => 42,  60 => 40,  58 => 39,  54 => 38,  49 => 37,  47 => 36,  44 => 35,  42 => 32,  41 => 31,  40 => 29,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Theme override to display a block.
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
 * - title_prefix: Additional output populated by modules, intended to be
 *   displayed in front of the main title tag that appears in the template.
 * - title_suffix: Additional output populated by modules, intended to be
 *   displayed after the main title tag that appears in the template.
 *
 * @see template_preprocess_block()
 */
#}
{%
  set classes = [
    'block',
    'block-' ~ configuration.provider|clean_class,
    'block-' ~ plugin_id|clean_class,
  ]
%}

{% if drupal_view_result('thought_leaders_home', 'block_4')|length > 0 %}
\t<div{{attributes.addClass(classes)}}>
\t\t{{ title_prefix }}
\t\t{% if label %}
\t\t\t<h2{{title_attributes}}>{{ label }}</h2>
\t\t{% endif %}
\t\t{{ title_suffix }}
\t\t{% block content %}
\t\t\t{{ content }}
\t\t{% endblock %}
\t</div>
{% endif %}

", "themes/custom/al_dia_news/templates/block/block--views-block-thought-leaders-home-block-4.html.twig", "/var/www/html/aldia-news/web/themes/custom/al_dia_news/templates/block/block--views-block-thought-leaders-home-block-4.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 29, "if" => 36, "block" => 43);
        static $filters = array("clean_class" => 31, "length" => 36, "escape" => 37);
        static $functions = array("drupal_view_result" => 36);

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
