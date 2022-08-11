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

/* modules/custom/al_dia_layouts/layouts/authors_intern/layout--authors-intern.html.twig */
class __TwigTemplate_7eedc36592a139fb9241fa4dc9d57de13d2f785364d625b478049fb4661e9ee4 extends \Twig\Template
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
            echo "  <div class=\"block-information\">
    <div class=\"container-content\">

      ";
            // line 17
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "horizontal_advertising", [], "any", false, false, true, 17)) {
                // line 18
                echo "          <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "horizontal_advertising", [], "any", false, false, true, 18), "addClass", [0 => "horizontal-advertising-general-horizontal"], "method", false, false, true, 18), 18, $this->source), "html", null, true);
                echo ">
            ";
                // line 19
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "horizontal_advertising", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
                echo "
          </div>
      ";
            }
            // line 22
            echo "       <div class=\"content-page-node\">
        <div class=\"author-wrapper\">
          <div class=\"author-information\">
            ";
            // line 25
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "author_information", [], "any", false, false, true, 25)) {
                // line 26
                echo "                <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "two_content", [], "any", false, false, true, 26), "addClass", [0 => "author-information-general"], "method", false, false, true, 26), 26, $this->source), "html", null, true);
                echo ">
                  ";
                // line 27
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "author_information", [], "any", false, false, true, 27), 27, $this->source), "html", null, true);
                echo "
                </div>
            ";
            }
            // line 30
            echo "          </div>
          <div class=\"related_authors\">
            ";
            // line 32
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "related_authors", [], "any", false, false, true, 32)) {
                // line 33
                echo "                <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "two_vertical_advertising", [], "any", false, false, true, 33), "addClass", [0 => "related-authors-intern"], "method", false, false, true, 33), 33, $this->source), "html", null, true);
                echo ">
                  ";
                // line 34
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "related_authors", [], "any", false, false, true, 34), 34, $this->source), "html", null, true);
                echo "
                </div>
            ";
            }
            // line 37
            echo "          </div>
        </div>
        <div class=\"content-news-authors\">
            ";
            // line 40
            if (twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "authors_news", [], "any", false, false, true, 40)) {
                // line 41
                echo "                <div ";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["region_attributes"] ?? null), "two_vertical_advertising", [], "any", false, false, true, 41), "addClass", [0 => "authors-news"], "method", false, false, true, 41), 41, $this->source), "html", null, true);
                echo ">
                  ";
                // line 42
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "authors_news", [], "any", false, false, true, 42), 42, $this->source), "html", null, true);
                echo "
                </div>
            ";
            }
            // line 45
            echo "        </div>
      </div>
    </div>
  </div>
";
        }
    }

    public function getTemplateName()
    {
        return "modules/custom/al_dia_layouts/layouts/authors_intern/layout--authors-intern.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 45,  106 => 42,  101 => 41,  99 => 40,  94 => 37,  88 => 34,  83 => 33,  81 => 32,  77 => 30,  71 => 27,  66 => 26,  64 => 25,  59 => 22,  53 => 19,  48 => 18,  46 => 17,  41 => 14,  39 => 13,);
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
  <div class=\"block-information\">
    <div class=\"container-content\">

      {% if content.horizontal_advertising %}
          <div {{ region_attributes.horizontal_advertising.addClass('horizontal-advertising-general-horizontal') }}>
            {{ content.horizontal_advertising }}
          </div>
      {% endif %}
       <div class=\"content-page-node\">
        <div class=\"author-wrapper\">
          <div class=\"author-information\">
            {% if content.author_information %}
                <div {{ region_attributes.two_content.addClass('author-information-general') }}>
                  {{ content.author_information }}
                </div>
            {% endif %}
          </div>
          <div class=\"related_authors\">
            {% if content.related_authors %}
                <div {{ region_attributes.two_vertical_advertising.addClass('related-authors-intern') }}>
                  {{ content.related_authors }}
                </div>
            {% endif %}
          </div>
        </div>
        <div class=\"content-news-authors\">
            {% if content.authors_news %}
                <div {{ region_attributes.two_vertical_advertising.addClass('authors-news') }}>
                  {{ content.authors_news }}
                </div>
            {% endif %}
        </div>
      </div>
    </div>
  </div>
{% endif %}
", "modules/custom/al_dia_layouts/layouts/authors_intern/layout--authors-intern.html.twig", "/var/www/html/aldia-news/web/modules/custom/al_dia_layouts/layouts/authors_intern/layout--authors-intern.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 13);
        static $filters = array("escape" => 18);
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
