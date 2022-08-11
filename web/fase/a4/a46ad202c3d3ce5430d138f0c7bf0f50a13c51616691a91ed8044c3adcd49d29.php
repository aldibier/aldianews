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

/* modules/custom/al_dia_layouts/layouts/news/layout--category-next-four.html.twig */
class __TwigTemplate_e9b8fc9eb76c9072937be166402ac7676edac8148b85074c5eca136870fe95a5 extends \Twig\Template
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
        if (($context["content"] ?? null)) {
            // line 14
            echo "  <div class=\"container-content\">

    ";
            // line 16
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "one_content", [], "any", false, false, true, 16)) {
                // line 17
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "one_content", [], "any", false, false, true, 17), "addClass", [0 => "one-content-category-four"], "method", false, false, true, 17), 17, $this->source), "html", null, true);
                echo ">
          ";
                // line 18
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "one_content", [], "any", false, false, true, 18), 18, $this->source), "html", null, true);
                echo " 
        </div>
    ";
            }
            // line 21
            echo "    ";
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "two_content", [], "any", false, false, true, 21)) {
                // line 22
                echo "        <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "two_content", [], "any", false, false, true, 22), "addClass", [0 => "two-content-category-four short-title-date"], "method", false, false, true, 22), 22, $this->source), "html", null, true);
                echo ">
          ";
                // line 23
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "two_content", [], "any", false, false, true, 23), 23, $this->source), "html", null, true);
                echo " 
        </div>
    ";
            }
            // line 26
            echo "
  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/custom/al_dia_layouts/layouts/news/layout--category-next-four.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  72 => 26,  66 => 23,  61 => 22,  58 => 21,  52 => 18,  47 => 17,  45 => 16,  41 => 14,  39 => 13,);
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
{% if content %}
  <div class=\"container-content\">

    {% if content.one_content %}
        <div {{ region_attributes.one_content.addClass('one-content-category-four') }}>
          {{ content.one_content }} 
        </div>
    {% endif %}
    {% if content.two_content %}
        <div {{ region_attributes.two_content.addClass('two-content-category-four short-title-date') }}>
          {{ content.two_content }} 
        </div>
    {% endif %}

  </div>
{% endif %}", "modules/custom/al_dia_layouts/layouts/news/layout--category-next-four.html.twig", "/var/www/html/aldia-news/web/modules/custom/al_dia_layouts/layouts/news/layout--category-next-four.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 13);
        static $filters = array("escape" => 17);
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
