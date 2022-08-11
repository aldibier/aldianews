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

/* table.html.twig */
class __TwigTemplate_4db516d79d351f73ea15629928b1187d1904bcd2a5883ffa0a93d7ba62817dce extends \Twig\Template
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
        echo "<div class=\"layer-wrapper\">
  <table";
        // line 43
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 43, $this->source), "html", null, true);
        echo ">
    ";
        // line 44
        if (($context["caption"] ?? null)) {
            // line 45
            echo "      <caption>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["caption"] ?? null), 45, $this->source), "html", null, true);
            echo "</caption>
    ";
        }
        // line 47
        echo "
    ";
        // line 48
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["colgroups"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["colgroup"]) {
            // line 49
            echo "      ";
            if (twig_get_attribute($this->env, $this->source, $context["colgroup"], "cols", [], "any", false, false, true, 49)) {
                // line 50
                echo "        <colgroup";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["colgroup"], "attributes", [], "any", false, false, true, 50), 50, $this->source), "html", null, true);
                echo ">
          ";
                // line 51
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["colgroup"], "cols", [], "any", false, false, true, 51));
                foreach ($context['_seq'] as $context["_key"] => $context["col"]) {
                    // line 52
                    echo "            <col";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["col"], "attributes", [], "any", false, false, true, 52), 52, $this->source), "html", null, true);
                    echo " />
          ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['col'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 54
                echo "        </colgroup>
      ";
            } else {
                // line 56
                echo "        <colgroup";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["colgroup"], "attributes", [], "any", false, false, true, 56), 56, $this->source), "html", null, true);
                echo " />
      ";
            }
            // line 58
            echo "    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['colgroup'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 59
        echo "
    ";
        // line 60
        if (($context["header"] ?? null)) {
            // line 61
            echo "      <thead>
        <tr>
          ";
            // line 63
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["header"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["cell"]) {
                // line 64
                echo "            ";
                if (twig_in_filter("<a", $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, $context["cell"], "content", [], "any", false, false, true, 64))))) {
                    // line 65
                    echo "              ";
                    // line 66
                    $context["cell_classes"] = [0 => "th__item", 1 => ((twig_get_attribute($this->env, $this->source,                     // line 68
$context["cell"], "active_table_sort", [], "any", false, false, true, 68)) ? ("is-active") : (""))];
                    // line 71
                    echo "            ";
                } else {
                    // line 72
                    echo "              ";
                    // line 73
                    $context["cell_classes"] = [0 => ("th__" . \Drupal\Component\Utility\Html::getClass($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,                     // line 74
$context["cell"], "content", [], "any", false, false, true, 74), 74, $this->source)))), 1 => ((twig_get_attribute($this->env, $this->source,                     // line 75
$context["cell"], "active_table_sort", [], "any", false, false, true, 75)) ? ("is-active") : (""))];
                    // line 78
                    echo "            ";
                }
                // line 79
                echo "            <";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 79), 79, $this->source), "html", null, true);
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["cell"], "attributes", [], "any", false, false, true, 79), "addClass", [0 => ($context["cell_classes"] ?? null)], "method", false, false, true, 79), 79, $this->source), "html", null, true);
                echo ">";
                // line 80
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "content", [], "any", false, false, true, 80), 80, $this->source), "html", null, true);
                // line 81
                echo "</";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 81), 81, $this->source), "html", null, true);
                echo ">
          ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['cell'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 83
            echo "        </tr>
      </thead>
    ";
        }
        // line 86
        echo "
    ";
        // line 87
        if (($context["rows"] ?? null)) {
            // line 88
            echo "      <tbody>
        ";
            // line 89
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
                // line 90
                echo "          ";
                // line 91
                $context["row_classes"] = [0 => (( !                // line 92
($context["no_striping"] ?? null)) ? (twig_cycle([0 => "odd", 1 => "even"], $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["loop"], "index0", [], "any", false, false, true, 92), 92, $this->source))) : (""))];
                // line 95
                echo "          <tr";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 95), "addClass", [0 => ($context["row_classes"] ?? null)], "method", false, false, true, 95), 95, $this->source), "html", null, true);
                echo ">
            ";
                // line 96
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["row"], "cells", [], "any", false, false, true, 96));
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
                foreach ($context['_seq'] as $context["_key"] => $context["cell"]) {
                    // line 97
                    echo "              ";
                    $context["currentIndex"] = twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 97);
                    // line 98
                    echo "              ";
                    $context["theadValue"] = null;
                    // line 99
                    echo "
              ";
                    // line 100
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["header"] ?? null));
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
                    foreach ($context['_seq'] as $context["_key"] => $context["value"]) {
                        // line 101
                        echo "                ";
                        if ((twig_get_attribute($this->env, $this->source, $context["loop"], "index", [], "any", false, false, true, 101) == ($context["currentIndex"] ?? null))) {
                            // line 102
                            echo "                  ";
                            if (twig_in_filter("<a", $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_get_attribute($this->env, $this->source, $context["value"], "content", [], "any", false, false, true, 102))))) {
                                // line 103
                                echo "                    ";
                                $context["theadValue"] = "td__item";
                                // line 104
                                echo "                  ";
                            } else {
                                // line 105
                                echo "                    ";
                                $context["theadValue"] = \Drupal\Component\Utility\Html::getClass($this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["value"], "content", [], "any", false, false, true, 105), 105, $this->source)));
                                // line 106
                                echo "                  ";
                            }
                            // line 107
                            echo "                ";
                        }
                        // line 108
                        echo "              ";
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
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['value'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 109
                    echo "
              ";
                    // line 110
                    $context["cell_classes"] = [0 => ((($context["theadValue"] ?? null)) ? (("td__" . $this->sandbox->ensureToStringAllowed(($context["theadValue"] ?? null), 110, $this->source))) : (""))];
                    // line 111
                    echo "
              <";
                    // line 112
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 112), 112, $this->source), "html", null, true);
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["cell"], "attributes", [], "any", false, false, true, 112), "addClass", [0 => ($context["cell_classes"] ?? null)], "method", false, false, true, 112), 112, $this->source), "html", null, true);
                    echo ">";
                    // line 113
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "content", [], "any", false, false, true, 113), 113, $this->source), "html", null, true);
                    // line 114
                    echo "</";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 114), 114, $this->source), "html", null, true);
                    echo ">
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
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['cell'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 116
                echo "          </tr>
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
            // line 118
            echo "      </tbody>
    ";
        } elseif (        // line 119
($context["empty"] ?? null)) {
            // line 120
            echo "      <tbody>
        <tr class=\"odd\">
          <td colspan=\"";
            // line 122
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["header_columns"] ?? null), 122, $this->source), "html", null, true);
            echo "\" class=\"empty message\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["empty"] ?? null), 122, $this->source), "html", null, true);
            echo "</td>
        </tr>
      </tbody>
    ";
        }
        // line 126
        echo "    ";
        if (($context["footer"] ?? null)) {
            // line 127
            echo "      <tfoot>
        ";
            // line 128
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["footer"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["row"]) {
                // line 129
                echo "          <tr";
                echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["row"], "attributes", [], "any", false, false, true, 129), 129, $this->source), "html", null, true);
                echo ">
            ";
                // line 130
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["row"], "cells", [], "any", false, false, true, 130));
                foreach ($context['_seq'] as $context["_key"] => $context["cell"]) {
                    // line 131
                    echo "              <";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 131), 131, $this->source), "html", null, true);
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "attributes", [], "any", false, false, true, 131), 131, $this->source), "html", null, true);
                    echo ">";
                    // line 132
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "content", [], "any", false, false, true, 132), 132, $this->source), "html", null, true);
                    // line 133
                    echo "</";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["cell"], "tag", [], "any", false, false, true, 133), 133, $this->source), "html", null, true);
                    echo ">
            ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['cell'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 135
                echo "          </tr>
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['row'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 137
            echo "      </tfoot>
    ";
        }
        // line 139
        echo "  </table>
</div>
";
    }

    public function getTemplateName()
    {
        return "table.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  375 => 139,  371 => 137,  364 => 135,  355 => 133,  353 => 132,  348 => 131,  344 => 130,  339 => 129,  335 => 128,  332 => 127,  329 => 126,  320 => 122,  316 => 120,  314 => 119,  311 => 118,  296 => 116,  279 => 114,  277 => 113,  273 => 112,  270 => 111,  268 => 110,  265 => 109,  251 => 108,  248 => 107,  245 => 106,  242 => 105,  239 => 104,  236 => 103,  233 => 102,  230 => 101,  213 => 100,  210 => 99,  207 => 98,  204 => 97,  187 => 96,  182 => 95,  180 => 92,  179 => 91,  177 => 90,  160 => 89,  157 => 88,  155 => 87,  152 => 86,  147 => 83,  138 => 81,  136 => 80,  131 => 79,  128 => 78,  126 => 75,  125 => 74,  124 => 73,  122 => 72,  119 => 71,  117 => 68,  116 => 66,  114 => 65,  111 => 64,  107 => 63,  103 => 61,  101 => 60,  98 => 59,  92 => 58,  86 => 56,  82 => 54,  73 => 52,  69 => 51,  64 => 50,  61 => 49,  57 => 48,  54 => 47,  48 => 45,  46 => 44,  42 => 43,  39 => 42,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Theme override to display a table.
 *
 * Available variables:
 * - attributes: HTML attributes to apply to the <table> tag.
 * - caption: A localized string for the <caption> tag.
 * - colgroups: Column groups. Each group contains the following properties:
 *   - attributes: HTML attributes to apply to the <col> tag.
 *     Note: Drupal currently supports only one table header row, see
 *     https://www.drupal.org/node/893530 and
 *     http://api.drupal.org/api/drupal/includes!theme.inc/function/theme_table/7#comment-5109.
 * - header: Table header cells. Each cell contains the following properties:
 *   - tag: The HTML tag name to use; either 'th' or 'td'.
 *   - attributes: HTML attributes to apply to the tag.
 *   - content: A localized string for the title of the column.
 *   - field: Field name (required for column sorting).
 *   - sort: Default sort order for this column (\"asc\" or \"desc\").
 * - sticky: A flag indicating whether to use a \"sticky\" table header.
 * - rows: Table rows. Each row contains the following properties:
 *   - attributes: HTML attributes to apply to the <tr> tag.
 *   - data: Table cells.
 *   - no_striping: A flag indicating that the row should receive no
 *     'even / odd' styling. Defaults to FALSE.
 *   - cells: Table cells of the row. Each cell contains the following keys:
 *     - tag: The HTML tag name to use; either 'th' or 'td'.
 *     - attributes: Any HTML attributes, such as \"colspan\", to apply to the
 *       table cell.
 *     - content: The string to display in the table cell.
 *     - active_table_sort: A boolean indicating whether the cell is the active
         table sort.
 * - footer: Table footer rows, in the same format as the rows variable.
 * - empty: The message to display in an extra row if table does not have
 *   any rows.
 * - no_striping: A boolean indicating that the row should receive no striping.
 * - header_columns: The number of columns in the header.
 *
 * @see template_preprocess_table()
 */
#}
<div class=\"layer-wrapper\">
  <table{{ attributes }}>
    {% if caption %}
      <caption>{{ caption }}</caption>
    {% endif %}

    {% for colgroup in colgroups %}
      {% if colgroup.cols %}
        <colgroup{{ colgroup.attributes }}>
          {% for col in colgroup.cols %}
            <col{{ col.attributes }} />
          {% endfor %}
        </colgroup>
      {% else %}
        <colgroup{{ colgroup.attributes }} />
      {% endif %}
    {% endfor %}

    {% if header %}
      <thead>
        <tr>
          {% for cell in header %}
            {% if '<a' in cell.content|render|render %}
              {%
                set cell_classes = [
                  'th__item',
                  cell.active_table_sort ? 'is-active',
                ]
              %}
            {% else %}
              {%
                set cell_classes = [
                  'th__' ~ cell.content|render|clean_class,
                  cell.active_table_sort ? 'is-active',
                ]
              %}
            {% endif %}
            <{{ cell.tag }}{{ cell.attributes.addClass(cell_classes) }}>
              {{- cell.content -}}
            </{{ cell.tag }}>
          {% endfor %}
        </tr>
      </thead>
    {% endif %}

    {% if rows %}
      <tbody>
        {% for row in rows %}
          {%
            set row_classes = [
              not no_striping ? cycle(['odd', 'even'], loop.index0),
            ]
          %}
          <tr{{ row.attributes.addClass(row_classes) }}>
            {% for cell in row.cells %}
              {% set currentIndex = loop.index %}
              {% set theadValue = null %}

              {% for value in header %}
                {% if loop.index == currentIndex %}
                  {% if '<a' in value.content|render|render %}
                    {% set theadValue = 'td__item' %}
                  {% else %}
                    {% set theadValue = value.content|render|clean_class %}
                  {% endif %}
                {% endif %}
              {% endfor %}

              {% set cell_classes = [theadValue ? 'td__' ~ theadValue] %}

              <{{ cell.tag }}{{ cell.attributes.addClass(cell_classes) }}>
                {{- cell.content -}}
              </{{ cell.tag }}>
            {% endfor %}
          </tr>
        {% endfor %}
      </tbody>
    {% elseif empty %}
      <tbody>
        <tr class=\"odd\">
          <td colspan=\"{{ header_columns }}\" class=\"empty message\">{{ empty }}</td>
        </tr>
      </tbody>
    {% endif %}
    {% if footer %}
      <tfoot>
        {% for row in footer %}
          <tr{{ row.attributes }}>
            {% for cell in row.cells %}
              <{{ cell.tag }}{{ cell.attributes }}>
                {{- cell.content -}}
              </{{ cell.tag }}>
            {% endfor %}
          </tr>
        {% endfor %}
      </tfoot>
    {% endif %}
  </table>
</div>
", "table.html.twig", "themes/contrib/gin/templates/dataset/table.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 44, "for" => 48, "set" => 66);
        static $filters = array("escape" => 43, "render" => 64, "clean_class" => 74);
        static $functions = array("cycle" => 92);

        try {
            $this->sandbox->checkSecurity(
                ['if', 'for', 'set'],
                ['escape', 'render', 'clean_class'],
                ['cycle']
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
