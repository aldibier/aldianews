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

/* themes/custom/al_dia_news/templates/views/views-view-unformatted--last-news-in-error-page--block-1.html.twig */
class __TwigTemplate_98233af020e02dcc6f673b2739d09491685fa9e462b0f5e00324e9e208ae1286 extends \Twig\Template
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
        echo "

";
        // line 22
        if (($context["title"] ?? null)) {
            // line 23
            echo "\t<h3>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title"] ?? null), 23, $this->source), "html", null, true);
            echo "</h3>
";
        }
        // line 25
        echo "
";
        // line 26
        if ((($context["device"] ?? null) == "desktop")) {
            // line 27
            echo "
\t";
            // line 29
            echo "\t";
            $context["index_hide_lines"] = [0 => 1, 1 => 2, 2 => 3, 3 => 10, 4 => 11, 5 => 12, 6 => 18, 7 => 19, 8 => 20, 9 => 25, 10 => 26];
            // line 30
            echo "
\t";
            // line 31
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
                // line 32
                echo "
\t\t";
                // line 34
                $context["row_classes"] = [0 => ((                // line 35
($context["default_row_class"] ?? null)) ? ("views-row") : (""))];
                // line 38
                echo "
\t\t";
                // line 40
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 40) == 15)) {
                    // line 41
                    echo "\t\t\t<span class=\"block-scroll ads\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_16"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 43
                echo "
\t\t";
                // line 45
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 45) == 22)) {
                    // line 46
                    echo "\t\t\t<span class=\"skys-scroll ads\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_10"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 48
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 48) == 24)) {
                    // line 49
                    echo "\t\t\t<span class=\"skys-scroll skys2 ads\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_59"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 51
                echo "
\t\t";
                // line 52
                if (twig_in_filter(twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 52), ($context["index_hide_lines"] ?? null))) {
                    // line 53
                    echo "\t\t\t<div class=\"card-one-column views-row not-show-line\">";
                    // line 54
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 54), 54, $this->source), "html", null, true);
                    // line 55
                    echo "</div>
\t\t";
                } else {
                    // line 57
                    echo "\t\t\t<div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 57), "addClass", [0 => ($context["row_classes"] ?? null)], "method", false, false, true, 57), 57, $this->source), "html", null, true);
                    echo ">";
                    // line 58
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 58), 58, $this->source), "html", null, true);
                    // line 59
                    echo "</div>
\t\t";
                }
                // line 61
                echo "
\t\t";
                // line 63
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 63) == 9)) {
                    // line 64
                    echo "\t\t\t<span class=\"banner-scroll ads\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_15"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 66
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 66) == 17)) {
                    // line 67
                    echo "\t\t\t<span class=\"banner-scroll ban2 ads\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_18"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 69
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 69) == 23)) {
                    // line 70
                    echo "\t\t\t<span class=\"banner-scroll ban3 ads\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_19"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 72
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 72) == 31)) {
                    // line 73
                    echo "\t\t\t<span class=\"banner-scroll last-banner ads\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_36"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 75
                echo "\t";
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
        // line 77
        echo "
";
        // line 78
        if ((($context["device"] ?? null) == "mobile")) {
            // line 79
            echo "
\t";
            // line 81
            echo "\t";
            $context["index_hide_lines"] = [0 => 7, 1 => 8, 2 => 11, 3 => 12, 4 => 15, 5 => 16, 6 => 21];
            // line 82
            echo "\t";
            $context["index_show_lines"] = [0 => 17, 1 => 18, 2 => 19, 3 => 20, 4 => 24, 5 => 22];
            // line 83
            echo "
\t";
            // line 84
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
                // line 85
                echo "
\t\t";
                // line 87
                $context["row_classes"] = [0 => ((                // line 88
($context["default_row_class"] ?? null)) ? ("views-row") : (""))];
                // line 91
                echo "
\t\t";
                // line 93
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 93) == 10)) {
                    // line 94
                    echo "\t\t\t<span class=\"block-scroll ads ads-mobile\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_16"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 96
                echo "
\t\t";
                // line 98
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 98) == 17)) {
                    // line 99
                    echo "\t\t\t<span class=\"skys-scroll ads ads-mobile\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_10"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 101
                echo "\t\t";
                // line 102
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 102) == 17)) {
                    // line 103
                    echo "\t\t\t<span class=\"banner-scroll ban3 ads ads-mobile\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_19"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 105
                echo "\t\t";
                // line 106
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 106) == 17)) {
                    // line 107
                    echo "\t\t\t<span class=\"skys-scroll skys2 ads ads-mobile\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_59"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 109
                echo "
\t\t";
                // line 110
                if (twig_in_filter(twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 110), ($context["index_hide_lines"] ?? null))) {
                    // line 111
                    echo "\t\t\t<div class=\"card-one-column views-row not-show-line-mobile\">";
                    // line 112
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 112), 112, $this->source), "html", null, true);
                    // line 113
                    echo "</div>
\t\t";
                } elseif (twig_in_filter(twig_get_attribute($this->env, $this->source,                 // line 114
$context["loop"], "index", [], "any", false, false, true, 114), ($context["index_show_lines"] ?? null))) {
                    // line 115
                    echo "\t\t\t<div class=\"card-one-column views-row show-line-mobile\">";
                    // line 116
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 116), 116, $this->source), "html", null, true);
                    // line 117
                    echo "</div>
\t\t";
                } else {
                    // line 119
                    echo "\t\t\t<div";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 119), "addClass", [0 => ($context["row_classes"] ?? null)], "method", false, false, true, 119), 119, $this->source), "html", null, true);
                    echo ">";
                    // line 120
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "content", [], "any", false, false, true, 120), 120, $this->source), "html", null, true);
                    // line 121
                    echo "</div>
\t\t";
                }
                // line 123
                echo "
\t\t";
                // line 125
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 125) == 6)) {
                    // line 126
                    echo "\t\t\t<span class=\"banner-scroll ads ads-mobile\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_15"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 128
                echo "\t\t";
                if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 128) == 14)) {
                    // line 129
                    echo "\t\t\t<span class=\"banner-scroll ban2 ads ads-mobile\">";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, Drupal\twig_tweak\TwigTweakExtension::drupalEntity("block", "gamwadvertisement_18"), "html", null, true);
                    echo "</span>
\t\t";
                }
                // line 131
                echo "\t";
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
    }

    public function getTemplateName()
    {
        return "themes/custom/al_dia_news/templates/views/views-view-unformatted--last-news-in-error-page--block-1.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  337 => 131,  331 => 129,  328 => 128,  322 => 126,  319 => 125,  316 => 123,  312 => 121,  310 => 120,  306 => 119,  302 => 117,  300 => 116,  298 => 115,  296 => 114,  293 => 113,  291 => 112,  289 => 111,  287 => 110,  284 => 109,  278 => 107,  275 => 106,  273 => 105,  267 => 103,  264 => 102,  262 => 101,  256 => 99,  253 => 98,  250 => 96,  244 => 94,  241 => 93,  238 => 91,  236 => 88,  235 => 87,  232 => 85,  215 => 84,  212 => 83,  209 => 82,  206 => 81,  203 => 79,  201 => 78,  198 => 77,  183 => 75,  177 => 73,  174 => 72,  168 => 70,  165 => 69,  159 => 67,  156 => 66,  150 => 64,  147 => 63,  144 => 61,  140 => 59,  138 => 58,  134 => 57,  130 => 55,  128 => 54,  126 => 53,  124 => 52,  121 => 51,  115 => 49,  112 => 48,  106 => 46,  103 => 45,  100 => 43,  94 => 41,  91 => 40,  88 => 38,  86 => 35,  85 => 34,  82 => 32,  65 => 31,  62 => 30,  59 => 29,  56 => 27,  54 => 26,  51 => 25,  45 => 23,  43 => 22,  39 => 20,);
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

{% if device == 'desktop' %}

\t{# {% set index_hide_lines = [7,8,9,15,16,17,23,24,29,30,31] %} #}
\t{% set index_hide_lines = [1,2,3,10,11,12,18,19,20,25,26] %}

\t{% for row in rows %}

\t\t{%
\t\tset row_classes = [
\t\tdefault_row_class ? 'views-row',
\t\t]
\t%}

\t\t{## block ##}
\t\t{% if loop.index  == 15 %}
\t\t\t<span class=\"block-scroll ads\">{{ drupal_entity('block', 'gamwadvertisement_16') }}</span>
\t\t{% endif %}

\t\t{## skyscraper ##}
\t\t{% if loop.index  == 22 %}
\t\t\t<span class=\"skys-scroll ads\">{{ drupal_entity('block', 'gamwadvertisement_10') }}</span>
\t\t{% endif %}
\t\t{% if loop.index  == 24 %}
\t\t\t<span class=\"skys-scroll skys2 ads\">{{ drupal_entity('block', 'gamwadvertisement_59') }}</span>
\t\t{% endif %}

\t\t{% if loop.index in index_hide_lines %}
\t\t\t<div class=\"card-one-column views-row not-show-line\">
\t\t\t\t{{- row.content -}}
\t\t\t</div>
\t\t{% else %}
\t\t\t<div{{row.attributes.addClass(row_classes)}}>
\t\t\t\t{{- row.content -}}
\t\t\t</div>
\t\t{% endif %}

\t\t{## banner ##}
\t\t{% if loop.index == 9 %}
\t\t\t<span class=\"banner-scroll ads\">{{ drupal_entity('block', 'gamwadvertisement_15') }}</span>
\t\t{% endif %}
\t\t{% if loop.index == 17 %}
\t\t\t<span class=\"banner-scroll ban2 ads\">{{ drupal_entity('block', 'gamwadvertisement_18') }}</span>
\t\t{% endif %}
\t\t{% if loop.index == 23 %}
\t\t\t<span class=\"banner-scroll ban3 ads\">{{ drupal_entity('block', 'gamwadvertisement_19') }}</span>
\t\t{% endif %}
\t\t{% if loop.index == 31 %}
\t\t\t<span class=\"banner-scroll last-banner ads\">{{ drupal_entity('block', 'gamwadvertisement_36') }}</span>
\t\t{% endif %}
\t{% endfor %}
{% endif %}

{% if device == 'mobile' %}

\t{# {% set index_hide_lines = [5,6,13,14] %} #}
\t{% set index_hide_lines = [7,8,11,12,15,16,21] %}
\t{% set index_show_lines = [17,18,19,20,24,22] %}

\t{% for row in rows %}

\t\t{%
\t\tset row_classes = [
\t\tdefault_row_class ? 'views-row',
\t\t]
\t%}

\t\t{## block ##}
\t\t{% if loop.index  == 10 %}
\t\t\t<span class=\"block-scroll ads ads-mobile\">{{ drupal_entity('block', 'gamwadvertisement_16') }}</span>
\t\t{% endif %}

\t\t{## skyscraper ##}
\t\t{% if loop.index  == 17 %}
\t\t\t<span class=\"skys-scroll ads ads-mobile\">{{ drupal_entity('block', 'gamwadvertisement_10') }}</span>
\t\t{% endif %}
\t\t{## banner ##}
\t\t{% if loop.index == 17 %}
\t\t\t<span class=\"banner-scroll ban3 ads ads-mobile\">{{ drupal_entity('block', 'gamwadvertisement_19') }}</span>
\t\t{% endif %}
\t\t{## skyscraper ##}
\t\t{% if loop.index  == 17 %}
\t\t\t<span class=\"skys-scroll skys2 ads ads-mobile\">{{ drupal_entity('block', 'gamwadvertisement_59') }}</span>
\t\t{% endif %}

\t\t{% if loop.index in index_hide_lines %}
\t\t\t<div class=\"card-one-column views-row not-show-line-mobile\">
\t\t\t\t{{- row.content -}}
\t\t\t</div>
\t\t{% elseif loop.index in index_show_lines  %}
\t\t\t<div class=\"card-one-column views-row show-line-mobile\">
\t\t\t\t{{- row.content -}}
\t\t\t</div>
\t\t{% else %}
\t\t\t<div{{row.attributes.addClass(row_classes)}}>
\t\t\t\t{{- row.content -}}
\t\t\t</div>
\t\t{% endif %}

\t\t{## banner ##}
\t\t{% if loop.index == 6 %}
\t\t\t<span class=\"banner-scroll ads ads-mobile\">{{ drupal_entity('block', 'gamwadvertisement_15') }}</span>
\t\t{% endif %}
\t\t{% if loop.index == 14 %}
\t\t\t<span class=\"banner-scroll ban2 ads ads-mobile\">{{ drupal_entity('block', 'gamwadvertisement_18') }}</span>
\t\t{% endif %}
\t{% endfor %}
{% endif %}
", "themes/custom/al_dia_news/templates/views/views-view-unformatted--last-news-in-error-page--block-1.html.twig", "/var/www/html/aldia-news/web/themes/custom/al_dia_news/templates/views/views-view-unformatted--last-news-in-error-page--block-1.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 22, "set" => 29, "for" => 31);
        static $filters = array("escape" => 23);
        static $functions = array("drupal_entity" => 41);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'set', 'for'],
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
