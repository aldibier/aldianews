(function($) {
    Drupal.behaviors.aldia_news_edge = {
        attach: function(context, settings) {

            function modifySrcIframe(src,params){
                if (src.indexOf('?') > 0) {
                    const srcSplit = src.split('?');
                    const srcModify = `${srcSplit[0]}?${params}`;
                    return srcModify;
                }
                
                return src;
            }
            
            $(document, context).once('validate-videos-youtube').each( function() {
                setTimeout(function() {
                    $(".video-embed-field-provider-youtube iframe").each(function(){
                        let src = $(this).attr('src');
                        //if isInternal  
                        if ($(this).parents('.block-field-blocknodenewsfield-video').length > 0 ||
                        $(this).parents('.block-field-blocknodethought-leadersfield-video').length > 0){
                            let srcModify = modifySrcIframe(src,'?start=1&rel=0&autoplay=1&mute=1');
                            $(this).attr('src',`${srcModify}`);
                        } else {
                            let srcModify = modifySrcIframe(src,'?start=0&rel=0&autoplay=0&mute=1');
                            $(this).attr('src',`${srcModify}`);
                        }
                    })
                }, 500);
            });
        }
    };
})(jQuery);