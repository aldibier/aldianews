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

/* modules/contrib/paragraphs/templates/paragraphs-dropbutton-wrapper.html.twig */
class __TwigTemplate_bd12d98c095e18f8b89fc0aaae214b3fc0931fc1696eeb8b7a4904e3ade47d9d extends \Twig\Template
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
        // line 15
        if (($context["children"] ?? null)) {
            // line 16
            echo "  ";
            ob_start();
            // line 17
            echo "    <div class=\"paragraphs-dropbutton-wrapper\">
      ";
            // line 18
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 18, $this->source), "html", null, true);
            echo "
    </div>
  ";
            echo trim(preg_replace('/>\s+</', '><', ob_get_clean()));
        }
    }

    public function getTemplateName()
    {
        return "modules/contrib/paragraphs/templates/paragraphs-dropbutton-wrapper.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  47 => 18,  44 => 17,  41 => 16,  39 => 15,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation for a paragraphs dropbutton wrapper.
 *
 * Available variables:
 * - children: Contains the child elements of the paragraphs dropbutton menu.
 *
 * @see template_preprocess()
 * @see template_preprocess_paragraphs_dropbutton_wrapper()
 *
 * @ingroup themeable
 */
#}
{% if children %}
  {% spaceless %}
    <div class=\"paragraphs-dropbutton-wrapper\">
      {{ children }}
    </div>
  {% endspaceless %}
{% endif %}
", "modules/contrib/paragraphs/templates/paragraphs-dropbutton-wrapper.html.twig", "/var/www/html/aldia-news/web/modules/contrib/paragraphs/templates/paragraphs-dropbutton-wrapper.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 15, "spaceless" => 16);
        static $filters = array("escape" => 18);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'spaceless'],
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
