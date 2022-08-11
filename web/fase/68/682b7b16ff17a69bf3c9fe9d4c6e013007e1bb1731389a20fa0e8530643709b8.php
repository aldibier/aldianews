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

/* menu-levels.html.twig */
class __TwigTemplate_5890320fc6064cb780b1d97baeef0f0368e4cdb5556c71df88b038b7ac0279d9 extends \Twig\Template
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
        // line 7
        $macros["menu"] = $this->macros["menu"] = $this;
        // line 8
        echo "
";
        // line 9
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menu"], "macro_menu_links", [($context["items"] ?? null), ($context["attributes"] ?? null), 0], 9, $context, $this->getSourceContext()));
        echo "

";
    }

    // line 11
    public function macro_menu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            // line 12
            echo "  <ul class=\"menu menu-level-";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_first($this->env, $this->sandbox->ensureToStringAllowed(($context["items"] ?? null), 12, $this->source)), "menu_level", [], "any", false, false, true, 12), 12, $this->source), "html", null, true);
            echo "\">
  ";
            // line 13
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
            foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                if ((twig_first($this->env, $context["key"]) != "#")) {
                    // line 14
                    echo "    ";
                    $context["menu_item_classes"] = [0 => "menu-item", 1 => ((twig_get_attribute($this->env, $this->source,                     // line 16
$context["item"], "is_expanded", [], "any", false, false, true, 16)) ? ("menu-item--expanded") : ("")), 2 => ((twig_get_attribute($this->env, $this->source,                     // line 17
$context["item"], "is_collapsed", [], "any", false, false, true, 17)) ? ("menu-item--collapsed") : ("")), 3 => ((twig_get_attribute($this->env, $this->source,                     // line 18
$context["item"], "in_active_trail", [], "any", false, false, true, 18)) ? ("menu-item--active-trail") : (""))];
                    // line 20
                    echo "
    <li";
                    // line 21
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 21), "addClass", [0 => ($context["menu_item_classes"] ?? null)], "method", false, false, true, 21), 21, $this->source), "html", null, true);
                    echo ">
      ";
                    // line 22
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 22), 22, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 22), 22, $this->source)), "html", null, true);
                    echo "
      ";
                    // line 23
                    $context["rendered_content"] = $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "content", [], "any", false, false, true, 23), 23, $this->source), "");
                    // line 24
                    echo "      ";
                    if ($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(($context["rendered_content"] ?? null))) {
                        // line 25
                        echo "        ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["rendered_content"] ?? null), 25, $this->source), "html", null, true);
                        echo "
      ";
                    }
                    // line 27
                    echo "    </li>
  ";
                }
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 29
            echo "  </ul>
";

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "menu-levels.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  112 => 29,  104 => 27,  98 => 25,  95 => 24,  93 => 23,  89 => 22,  85 => 21,  82 => 20,  80 => 18,  79 => 17,  78 => 16,  76 => 14,  71 => 13,  66 => 12,  51 => 11,  44 => 9,  41 => 8,  39 => 7,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation to each level of menu.
 */
#}
{% import _self as menu %}

{{ menu.menu_links(items, attributes, 0) }}

{% macro menu_links(items, attributes, menu_level) %}
  <ul class=\"menu menu-level-{{ items|first.menu_level }}\">
  {% for key, item in items if key|first != '#' %}
    {% set menu_item_classes = [
      'menu-item',
      item.is_expanded ? 'menu-item--expanded',
      item.is_collapsed ? 'menu-item--collapsed',
      item.in_active_trail ? 'menu-item--active-trail',
    ] %}

    <li{{ item.attributes.addClass(menu_item_classes) }}>
      {{ link(item.title, item.url) }}
      {% set rendered_content = item.content|without('') %}
      {% if rendered_content|render %}
        {{ rendered_content }}
      {% endif %}
    </li>
  {% endfor %}
  </ul>
{% endmacro %}
", "menu-levels.html.twig", "modules/contrib/menu_item_extras/templates/menu-levels.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 7, "macro" => 11, "for" => 13, "set" => 14, "if" => 24);
        static $filters = array("escape" => 12, "first" => 12, "without" => 23, "render" => 24);
        static $functions = array("link" => 22);

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'for', 'set', 'if'],
                ['escape', 'first', 'without', 'render'],
                ['link']
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
