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

/* __string_template__3154954cfb1561403714c8aa6389fe01bd6a1f9b1545f5beb0b832a2613adf83 */
class __TwigTemplate_14cffd328a1a33befb48bb6a35a63c493882c04d86f50245231b731e563762ef extends \Twig\Template
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
        echo "<h2 class=\"category-title\"> <a href=\"/culture\"><span class=\"aldia-logo-before\">AL DÍA</span><span class=\"text\">";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["parent_target_id_1"] ?? null), 1, $this->source), "html", null, true);
        echo "</span></a></h2>";
    }

    public function getTemplateName()
    {
        return "__string_template__3154954cfb1561403714c8aa6389fe01bd6a1f9b1545f5beb0b832a2613adf83";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}<h2 class=\"category-title\"> <a href=\"/culture\"><span class=\"aldia-logo-before\">AL DÍA</span><span class=\"text\">{{ parent_target_id_1 }}</span></a></h2>", "__string_template__3154954cfb1561403714c8aa6389fe01bd6a1f9b1545f5beb0b832a2613adf83", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 1);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
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
