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

/* __string_template__3b6272ed9e6b3564310516e765b368bff7657155d844a240b01c9fe16cf7368e */
class __TwigTemplate_4f16a3bb7b5b36d051d3cf2c43ee84b117df7503e092c2df0a5c0628ca69767d extends \Twig\Template
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
        echo "<h2 class=\"category-title\"> <a href=\"/leadership\"><span class=\"aldia-logo-before\">AL DÍA</span><span class=\"text\">LEADERSHIP</span></a></h2>
";
    }

    public function getTemplateName()
    {
        return "__string_template__3b6272ed9e6b3564310516e765b368bff7657155d844a240b01c9fe16cf7368e";
    }

    public function getDebugInfo()
    {
        return array (  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}<h2 class=\"category-title\"> <a href=\"/leadership\"><span class=\"aldia-logo-before\">AL DÍA</span><span class=\"text\">LEADERSHIP</span></a></h2>
", "__string_template__3b6272ed9e6b3564310516e765b368bff7657155d844a240b01c9fe16cf7368e", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array();
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                [],
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
