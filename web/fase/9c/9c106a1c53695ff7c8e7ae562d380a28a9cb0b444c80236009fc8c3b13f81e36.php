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

/* __string_template__0a0c73fe611e9ee1ee80ca3e8d030b55cb6417757fb2db36d35469ee737d27d9 */
class __TwigTemplate_fbbbab8511447adec6592d258b477e0f95e384437514eedb320518a310ba315e extends \Twig\Template
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
        echo "<div class=\"card-content\">
   <div class=\"card-name-category\">";
        // line 2
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_category"] ?? null), 2, $this->source), "html", null, true);
        echo "</div>
   <div class=\"card-title\">";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_new_short_title"] ?? null), 3, $this->source), "html", null, true);
        echo "</div>
   <div class=\"card-date\">";
        // line 4
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["created"] ?? null), 4, $this->source), "html", null, true);
        echo "</div>
</div>";
    }

    public function getTemplateName()
    {
        return "__string_template__0a0c73fe611e9ee1ee80ca3e8d030b55cb6417757fb2db36d35469ee737d27d9";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  50 => 4,  46 => 3,  42 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}<div class=\"card-content\">
   <div class=\"card-name-category\">{{ field_category }}</div>
   <div class=\"card-title\">{{ field_new_short_title }}</div>
   <div class=\"card-date\">{{ created }}</div>
</div>", "__string_template__0a0c73fe611e9ee1ee80ca3e8d030b55cb6417757fb2db36d35469ee737d27d9", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 2);
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
