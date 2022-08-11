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

/* __string_template__734984eca38ab21b74f6a848d74562cb89c66782eb7de620a2ac88c7c2b6aac4 */
class __TwigTemplate_fbed9b4dae08e79890366c9dfc7cf79d117bcb0308981849737f426e99263b16 extends \Twig\Template
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
        // line 2
        $context["now"] = twig_date_converter($this->env);
        // line 3
        if ((twig_date_format_filter($this->env, ($context["now"] ?? null), "Y") < ($context["field_end_date_1"] ?? null))) {
            // line 4
            echo "  <div class=\"date-current-edition\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_start_date_1"] ?? null), 4, $this->source), "html", null, true);
            echo " - ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_end_date_2"] ?? null), 4, $this->source), "html", null, true);
            echo "</div>
";
        } else {
            // line 6
            echo "  <div class=\"date-current-edition\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_start_date"] ?? null), 6, $this->source), "html", null, true);
            echo " - ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_end_date"] ?? null), 6, $this->source), "html", null, true);
            echo "</div>
";
        }
    }

    public function getTemplateName()
    {
        return "__string_template__734984eca38ab21b74f6a848d74562cb89c66782eb7de620a2ac88c7c2b6aac4";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  51 => 6,  43 => 4,  41 => 3,  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}{# Se obtiene la fecha actual #}
{% set now = date() %}
{% if ( now | date(\"Y\")) < ( field_end_date_1 ) %}
  <div class=\"date-current-edition\">{{ field_start_date_1 }} - {{ field_end_date_2 }}</div>
{% else %}
  <div class=\"date-current-edition\">{{ field_start_date }} - {{ field_end_date }}</div>
{% endif %}", "__string_template__734984eca38ab21b74f6a848d74562cb89c66782eb7de620a2ac88c7c2b6aac4", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 2, "if" => 3);
        static $filters = array("date" => 3, "escape" => 4);
        static $functions = array("date" => 2);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['date', 'escape'],
                ['date']
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
