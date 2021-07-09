(function($) {
    Drupal.behaviors.aldia_news_edge = {
        attach: function(context, settings) {

            function isEdge() {
                for (brand_version_pair of navigator.userAgentData.brands) {
                    if (brand_version_pair.brand == "Microsoft Edge") {
                        return true;
                    }
                }
                return false;
            }
            
            $(document, context).once('validate-edge').each( function() {
                setTimeout(function() {
                    $isEdge = isEdge();
                    
                    if(!$isEdge) return;

                    $(".video-embed-field-provider-youtube iframe").each(function(){
                        let src = $(this).attr('src');
    
                        if (src.indexOf('?') > 0) {
                            const srcEdit = src.split('?');
                            $(this).attr('src',`${srcEdit[0]}?start=0&rel=0`);
                        }
                    })
                }, 500);
            });
        }
    };
})(jQuery);