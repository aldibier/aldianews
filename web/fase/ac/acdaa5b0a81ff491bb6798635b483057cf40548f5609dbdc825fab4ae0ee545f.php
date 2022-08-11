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

/* __string_template__5b23594a533f3aaaed58abdbfd00692c86408e4096ed18dd79567ea18ff1af1d */
class __TwigTemplate_781dbd39ecc8b724039ea0abad6834f1c54a8b0f940761961458d42864c53ef2 extends \Twig\Template
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
        echo "<div class=\"category-view-more\">

   <a href=\"/thought-leaders\">MORE THOUGHTS</a>

</div>
";
    }

    public function getTemplateName()
    {
        return "__string_template__5b23594a533f3aaaed58abdbfd00692c86408e4096ed18dd79567ea18ff1af1d";
    }

    public function getDebugInfo()
    {
        return array (  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}
<div class=\"category-view-more\">

   <a href=\"/thought-leaders\">MORE THOUGHTS</a>

</div>
", "__string_template__5b23594a533f3aaaed58abdbfd00692c86408e4096ed18dd79567ea18ff1af1d", "");
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
