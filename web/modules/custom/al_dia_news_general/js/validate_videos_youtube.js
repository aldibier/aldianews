(function (Drupal, once) {
    Drupal.behaviors.aldia_news_edge = {
      attach: function (context, settings) {
  
        function modifySrcIframe(src, params) {
          if (src.indexOf('?') > 0) {
            const srcSplit = src.split('?');
            const srcModify = `${srcSplit[0]}?${params}`;
            return srcModify;
          }
          return src;
        }
  
        // Usar once con vanilla JS en lugar de jQuery
        once('validate-videos-youtube', context.querySelectorAll('.video-embed-field-provider-youtube iframe')).forEach(function (iframe) {
          setTimeout(function () {
            // Si el iframe tiene padres específicos
            if (iframe.closest('.block-field-blocknodenewsfield-video') || iframe.closest('.block-field-blocknodethought-leadersfield-video')) {
              let srcModify = modifySrcIframe(iframe.getAttribute('src'), '?start=1&rel=0&autoplay=1&mute=1');
              iframe.setAttribute('src', srcModify);
            } else {
              let srcModify = modifySrcIframe(iframe.getAttribute('src'), '?start=0&rel=0&autoplay=0&mute=1');
              iframe.setAttribute('src', srcModify);
            }
          }, 500);
        });
      }
    };
  })(Drupal, once);
  