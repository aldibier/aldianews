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

/* modules/contrib/views_fieldsets/views-fieldsets-fieldset.html.twig */
class __TwigTemplate_8dbc9ce3eb6b0c86466968676a68437a0a1ed5e2fbc90b5eac0fa7f1ef28e75f extends \Twig\Template
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
        // line 1
        echo "<fieldset ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 1, $this->source), "html", null, true);
        echo ">
  ";
        // line 2
        if (($context["legend"] ?? null)) {
            // line 3
            echo "    <legend>";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["legend"] ?? null), 3, $this->source), "html", null, true);
            echo "</legend>
  ";
        }
        // line 5
        echo "  ";
        $this->loadTemplate("views-view-fields.html.twig", "modules/contrib/views_fieldsets/views-fieldsets-fieldset.html.twig", 5)->display($context);
        // line 6
        echo "</fieldset>
";
    }

    public function getTemplateName()
    {
        return "modules/contrib/views_fieldsets/views-fieldsets-fieldset.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 6,  52 => 5,  46 => 3,  44 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<fieldset {{ attributes }}>
  {% if legend %}
    <legend>{{ legend }}</legend>
  {% endif %}
  {% include 'views-view-fields.html.twig' %}
</fieldset>
", "modules/contrib/views_fieldsets/views-fieldsets-fieldset.html.twig", "/var/www/html/aldia-news/web/modules/contrib/views_fieldsets/views-fieldsets-fieldset.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 2, "include" => 5);
        static $filters = array("escape" => 1);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'include'],
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
