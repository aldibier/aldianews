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

/* __string_template__5ed5e85646ca2ffd6b0872b71c7a63d8a4171c3de70bae4a6849b482dfb6928f */
class __TwigTemplate_0853f8ba26a927c018bd52898f3bb4219990a2516aaccdfb34cdbb6fb59b2582 extends \Twig\Template
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
        echo "<div class=\"main-news-content\">
 <div class=\"main-news-category\"><h2>";
        // line 2
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_category"] ?? null), 2, $this->source), "html", null, true);
        echo "</h2></div>
   <div class=\"main-news-title\">";
        // line 3
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_new_short_title"] ?? null), 3, $this->source), "html", null, true);
        echo "</div>
   <div class=\"main-news-body\">";
        // line 4
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_short_description"] ?? null), 4, $this->source), "html", null, true);
        echo "</div>
   <div class=\"main-news-date\">";
        // line 5
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["created"] ?? null), 5, $this->source), "html", null, true);
        echo "</div>
</div>";
    }

    public function getTemplateName()
    {
        return "__string_template__5ed5e85646ca2ffd6b0872b71c7a63d8a4171c3de70bae4a6849b482dfb6928f";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  54 => 5,  50 => 4,  46 => 3,  42 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# inline_template_start #}<div class=\"main-news-content\">
 <div class=\"main-news-category\"><h2>{{ field_category }}</h2></div>
   <div class=\"main-news-title\">{{ field_new_short_title }}</div>
   <div class=\"main-news-body\">{{ field_short_description }}</div>
   <div class=\"main-news-date\">{{ created }}</div>
</div>", "__string_template__5ed5e85646ca2ffd6b0872b71c7a63d8a4171c3de70bae4a6849b482dfb6928f", "");
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
