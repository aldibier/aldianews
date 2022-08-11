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

/* __string_template__fcdfbc4517fe13e05aeca8ef109253544ad18761dafa173fe99abf61ab81ad48 */
class __TwigTemplate_40e23af4b0908167082b2b79be208189ca20afce74a2b12332ddd9e293ab3c3b extends \Twig\Template
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
        echo "<div class=\"view-categories-sons\">
<div class=\"view-content\">
    <h2 class=\"category-title\">
      <a href=\"/thought-leaders\"><span class=\"aldia-logo-before\">AL DÍA</span><span class=\"text\">THOUGHT LEADERS</span></a>
    </h2>
  </div>
  </div>";
    }

    public function getTemplateName()
    {
        return "__string_template__fcdfbc4517fe13e05aeca8ef109253544ad18761dafa173fe99abf61ab81ad48";
    }

    public function getDebugInfo()
    {
        return array (  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}<div class=\"view-categories-sons\">
<div class=\"view-content\">
    <h2 class=\"category-title\">
      <a href=\"/thought-leaders\"><span class=\"aldia-logo-before\">AL DÍA</span><span class=\"text\">THOUGHT LEADERS</span></a>
    </h2>
  </div>
  </div>", "__string_template__fcdfbc4517fe13e05aeca8ef109253544ad18761dafa173fe99abf61ab81ad48", "");
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
