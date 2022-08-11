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

/* themes/custom/al_dia_news/templates/views/views-view-unformatted--culture-sons--block-2.html.twig */
class __TwigTemplate_bcde14d44783f14c683651466422c79eba077a856416e637e257cb3b760cbe4b extends \Twig\Template
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
        // line 20
        if (($context["title"] ?? null)) {
            // line 21
            echo "\t<h3>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 21, $this->source), "html", null, true);
            echo "</h3>
";
        }
        // line 23
        echo "

";
        // line 25
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rows"] ?? null));
        $context['loop'] = [
          'parent' => $context['_parent'],
          'index0' => 0,
          'index'  => 1,
          'first'  => true,
        ];
        if (is_array($context['_seq']) || (is_object($context['_seq']) && $context['_seq'] instanceof \Countable)) {
            $length = count($context['_seq']);
            $context['loop']['revindex0'] = $length - 1;
            $context['loop']['revindex'] = $length;
            $context['loop']['length'] = $length;
            $context['loop']['last'] = 1 === $length;
        }
        foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
            // line 26
            echo "\t";
            // line 27
            $context["row_classes"] = [0 => ((            // line 28
($context["default_row_class"] ?? null)) ? ("views-row") : (""))];
            // line 31
            echo "\t";
            if (((($context["device"] ?? null) == "mobile") && (twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 31) == 2))) {
                // line 32
                echo "\t\t<span class=\"skyscraper-mobile ads\">";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_31"), "html", null, true);
                echo "</span>
\t";
            }
            // line 34
            echo "\t<div";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 34), "addClass", [0 => ($context["row_classes"] ?? null)], "method", false, false, true, 34), 34, $this->source), "html", null, true);
            echo ">";
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 35), 35, $this->source), "html", null, true);
            // line 36
            echo "</div>
";
            ++$context['loop']['index0'];
            ++$context['loop']['index'];
            $context['loop']['first'] = false;
            if (isset($context['loop']['length'])) {
                --$context['loop']['revindex0'];
                --$context['loop']['revindex'];
                $context['loop']['last'] = 0 === $context['loop']['revindex0'];
            }
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
    }

    public function getTemplateName()
    {
        return "themes/custom/al_dia_news/templates/views/views-view-unformatted--culture-sons--block-2.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  88 => 36,  86 => 35,  82 => 34,  76 => 32,  73 => 31,  71 => 28,  70 => 27,  68 => 26,  51 => 25,  47 => 23,  41 => 21,  39 => 20,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation to display a view of unformatted rows.
 *
 * Available variables:
 * - title: The title of this group of rows. May be empty.
 * - rows: A list of the view's row items.
 *   - attributes: The row's HTML attributes.
 *   - content: The row's content.
 * - view: The view object.
 * - default_row_class: A flag indicating whether default classes should be
 *   used on rows.
 *
 * @see template_preprocess_views_view_unformatted()
 *
 * @ingroup themeable
 */
#}
{% if title %}
\t<h3>{{ title }}</h3>
{% endif %}


{% for row in rows %}
\t{%
    set row_classes = [
    default_row_class ? 'views-row',
    ]
%}
\t{% if device == 'mobile' and loop.index == 2 %}
\t\t<span class=\"skyscraper-mobile ads\">{{ drupal_entity('block', 'gamwadvertisement_31') }}</span>
\t{% endif %}
\t<div{{row.attributes.addClass(row_classes)}}>
\t\t{{- row.content -}}
\t</div>
{% endfor %}
", "themes/custom/al_dia_news/templates/views/views-view-unformatted--culture-sons--block-2.html.twig", "/var/www/html/aldia-news/web/themes/custom/al_dia_news/templates/views/views-view-unformatted--culture-sons--block-2.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 20, "for" => 25, "set" => 27);
        static $filters = array("escape" => 21);
        static $functions = array("drupal_entity" => 32);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for', 'set'],
                ['escape'],
                ['drupal_entity']
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
