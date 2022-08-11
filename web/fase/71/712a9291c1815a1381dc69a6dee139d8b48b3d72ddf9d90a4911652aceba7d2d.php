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

/* themes/custom/al_dia_news/templates/block/block--watchlive-2.html.twig */
class __TwigTemplate_141b0a37e7990cf78396bffe873352896ded35c793d62d5ba731ff381744d908 extends \Twig\Template
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
        $context["classes"] = [0 => "block", 1 => "watch-live", 2 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 36
($context["configuration"] ?? null), "provider", [], "any", false, false, true, 36), 36, $this->source))), 3 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 37
($context["plugin_id"] ?? null), 37, $this->source)))];
        // line 40
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 40), 40, $this->source), "html", null, true);
        echo ">
\t";
        // line 41
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 41, $this->source), "html", null, true);
        echo "
\t";
        // line 42
        if (($context["label"] ?? null)) {
            // line 43
            echo "\t\t<h2";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_attributes"] ?? null), 43, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 43, $this->source), "html", null, true);
            echo "</h2>
\t";
        }
        // line 45
        echo "\t";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 45, $this->source), "html", null, true);
        echo "
\t<button class=\"watch-live-button\" name=\"watch-live\" type=\"button\">WATCH LIVE</button>
\t<div class=\"watch-live-video stuck\">
\t\t";
        // line 48
        $this->displayBlock('content', $context, $blocks);
        // line 55
        echo "\t</div>
</div>
";
    }

    // line 48
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 49
        echo "\t\t\t<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content_attributes"] ?? null), "addClass", [0 => "video-watch"], "method", false, false, true, 49), 49, $this->source), "html", null, true);
        echo ">
\t\t\t\t<button class=\"close-modal\" name=\"close\" type=\"button\">X</button>
\t\t\t\t<div class=\"text-watch-live\">LIVE STREAMING</div>
\t\t\t\t";
        // line 52
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 52, $this->source), "html", null, true);
        echo "
\t\t\t</div>
\t\t";
    }

    public function getTemplateName()
    {
        return "themes/custom/al_dia_news/templates/block/block--watchlive-2.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  89 => 52,  82 => 49,  78 => 48,  72 => 55,  70 => 48,  63 => 45,  55 => 43,  53 => 42,  49 => 41,  44 => 40,  42 => 37,  41 => 36,  40 => 33,);
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
    'watch-live',
    'block-' ~ configuration.provider|clean_class,
    'block-' ~ plugin_id|clean_class,
  ]
%}
<div{{attributes.addClass(classes)}}>
\t{{ title_prefix }}
\t{% if label %}
\t\t<h2{{title_attributes}}>{{ label }}</h2>
\t{% endif %}
\t{{ title_suffix }}
\t<button class=\"watch-live-button\" name=\"watch-live\" type=\"button\">WATCH LIVE</button>
\t<div class=\"watch-live-video stuck\">
\t\t{% block content %}
\t\t\t<div{{content_attributes.addClass('video-watch')}}>
\t\t\t\t<button class=\"close-modal\" name=\"close\" type=\"button\">X</button>
\t\t\t\t<div class=\"text-watch-live\">LIVE STREAMING</div>
\t\t\t\t{{ content }}
\t\t\t</div>
\t\t{% endblock %}
\t</div>
</div>
", "themes/custom/al_dia_news/templates/block/block--watchlive-2.html.twig", "/var/www/html/aldia-news/web/themes/custom/al_dia_news/templates/block/block--watchlive-2.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 33, "if" => 42, "block" => 48);
        static $filters = array("clean_class" => 36, "escape" => 40);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 'escape'],
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
