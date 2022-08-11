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

/* modules/custom/al_dia_layouts/layouts/taxonomy/layout--taxonomy-category.html.twig */
class __TwigTemplate_e866effa39ef313dfc9274db1e0e1a5755968d49abf53fcb173971b9f742aec6 extends \Twig\Template
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
        // line 13
        echo "
";
        // line 14
        $context["subcategory_only_for_children"] = twig_length_filter($this->env, views_get_view_result("subcategory_only_for_children", "block_4"));
        // line 15
        $context["first_block_subcategory"] = twig_length_filter($this->env, views_get_view_result("subcategory_only_for_children", "block_1"));
        // line 16
        $context["subcategory_taxonomy"] = twig_length_filter($this->env, views_get_view_result("subcategory_only_for_children", "block_3"));
        // line 17
        echo "
";
        // line 18
        if (($context["content"] ?? null)) {
            // line 19
            echo "  <div class=\"container-content\">

    ";
            // line 21
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "header_category", [], "any", false, false, true, 21)) {
                // line 22
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "header_category", [], "any", false, false, true, 22), "addClass", [0 => "header-category"], "method", false, false, true, 22), 22, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "header_category", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
                echo "</div>
    ";
            }
            // line 24
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "one_content_first", [], "any", false, false, true, 24)) {
                // line 25
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "one_content_first", [], "any", false, false, true, 25), "addClass", [0 => "category-first-block screen-margin"], "method", false, false, true, 25), 25, $this->source), "html", null, true);
                echo ">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "one_content_first", [], "any", false, false, true, 25), 25, $this->source), "html", null, true);
                echo "</div>
    ";
            }
            // line 27
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "one_content", [], "any", false, false, true, 27)) {
                // line 28
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "one_content", [], "any", false, false, true, 28), "addClass", [0 => "one-content-taxonomy-category screen-margin"], "method", false, false, true, 28), 28, $this->source), "html", null, true);
                echo ">
          ";
                // line 29
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "one_content", [], "any", false, false, true, 29), 29, $this->source), "html", null, true);
                echo " 
        </div>
    ";
            }
            // line 32
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "two_more_content", [], "any", false, false, true, 32)) {
                // line 33
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "two_more_content", [], "any", false, false, true, 33), "addClass", [0 => "two-more-content-taxonomy-category screen-margin"], "method", false, false, true, 33), 33, $this->source), "html", null, true);
                echo ">
          ";
                // line 34
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "two_more_content", [], "any", false, false, true, 34), 34, $this->source), "html", null, true);
                echo " 
        </div>
    ";
            }
            // line 37
            echo "    ";
            if ((twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "header_subcategory", [], "any", false, false, true, 37) && (($context["subcategory_only_for_children"] ?? null) != 0))) {
                // line 38
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "header_subcategory", [], "any", false, false, true, 38), "addClass", [0 => "header-subcategory-taxonomy"], "method", false, false, true, 38), 38, $this->source), "html", null, true);
                echo ">
          ";
                // line 39
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "header_subcategory", [], "any", false, false, true, 39), 39, $this->source), "html", null, true);
                echo " 
        </div>
    ";
            }
            // line 42
            echo "    ";
            if ((twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "first_block_subcategory", [], "any", false, false, true, 42) && (($context["first_block_subcategory"] ?? null) != 0))) {
                // line 43
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "first_block_subcategory", [], "any", false, false, true, 43), "addClass", [0 => "first-block-subcategory-taxonomy"], "method", false, false, true, 43), 43, $this->source), "html", null, true);
                echo ">
          ";
                // line 44
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "first_block_subcategory", [], "any", false, false, true, 44), 44, $this->source), "html", null, true);
                echo " 
        </div>
    ";
            }
            // line 47
            echo "    ";
            if ((twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "subcategory", [], "any", false, false, true, 47) && (($context["subcategory_taxonomy"] ?? null) != 0))) {
                // line 48
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "subcategory", [], "any", false, false, true, 48), "addClass", [0 => "subcategory-taxonomy"], "method", false, false, true, 48), 48, $this->source), "html", null, true);
                echo ">
          ";
                // line 49
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "subcategory", [], "any", false, false, true, 49), 49, $this->source), "html", null, true);
                echo " 
        </div>
    ";
            }
            // line 52
            echo "
  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/custom/al_dia_layouts/layouts/taxonomy/layout--taxonomy-category.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  148 => 52,  142 => 49,  137 => 48,  134 => 47,  128 => 44,  123 => 43,  120 => 42,  114 => 39,  109 => 38,  106 => 37,  100 => 34,  95 => 33,  92 => 32,  86 => 29,  81 => 28,  78 => 27,  70 => 25,  67 => 24,  59 => 22,  57 => 21,  53 => 19,  51 => 18,  48 => 17,  46 => 16,  44 => 15,  42 => 14,  39 => 13,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation to display a two-column layout.
 *
 * Available variables:
 * - content: The content for this layout.
 * - attributes: HTML attributes for the layout <div>.
 *
 * @ingroup themeable
 */
#}

{% set subcategory_only_for_children = drupal_view_result('subcategory_only_for_children', 'block_4')|length %}
{% set first_block_subcategory = drupal_view_result('subcategory_only_for_children', 'block_1')|length %}
{% set subcategory_taxonomy = drupal_view_result('subcategory_only_for_children', 'block_3')|length %}

{% if content %}
  <div class=\"container-content\">

    {% if content.header_category %}
        <div {{ region_attributes.header_category.addClass('header-category') }}>{{ content.header_category }}</div>
    {% endif %}
    {% if content.one_content_first %}
        <div {{ region_attributes.one_content_first.addClass('category-first-block screen-margin') }}>{{ content.one_content_first }}</div>
    {% endif %}
    {% if content.one_content %}
        <div {{ region_attributes.one_content.addClass('one-content-taxonomy-category screen-margin') }}>
          {{ content.one_content }} 
        </div>
    {% endif %}
    {% if content.two_more_content %}
        <div {{ region_attributes.two_more_content.addClass('two-more-content-taxonomy-category screen-margin') }}>
          {{ content.two_more_content}} 
        </div>
    {% endif %}
    {% if content.header_subcategory and subcategory_only_for_children != 0 %}
        <div {{ region_attributes.header_subcategory.addClass('header-subcategory-taxonomy') }}>
          {{ content.header_subcategory}} 
        </div>
    {% endif %}
    {% if content.first_block_subcategory and first_block_subcategory != 0 %}
        <div {{ region_attributes.first_block_subcategory.addClass('first-block-subcategory-taxonomy') }}>
          {{ content.first_block_subcategory}} 
        </div>
    {% endif %}
    {% if content.subcategory and subcategory_taxonomy != 0 %}
        <div {{ region_attributes.subcategory.addClass('subcategory-taxonomy') }}>
          {{ content.subcategory}} 
        </div>
    {% endif %}

  </div>
{% endif %}
", "modules/custom/al_dia_layouts/layouts/taxonomy/layout--taxonomy-category.html.twig", "/var/www/html/aldia-news/web/modules/custom/al_dia_layouts/layouts/taxonomy/layout--taxonomy-category.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 14, "if" => 18);
        static $filters = array("length" => 14, "escape" => 22);
        static $functions = array("drupal_view_result" => 14);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['length', 'escape'],
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
