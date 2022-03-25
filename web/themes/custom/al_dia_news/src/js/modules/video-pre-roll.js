function videoSDK() {

    console.log(drupalSettings);

    let adsLoadedInitial;
    let adDisplayContainer;
    let adsLoader;
    let adsManager;
    var flag = 1;
  
    let videoElement = document.querySelector('#video-element');
    let adContainer = document.querySelector('#ad-container');
    let playAction = document.querySelector('#play-button');
    let urlTag = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/66060234/video_test_2&description_url=[placeholder]&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&aconp=2&correlator=';
  
    //ulrTag = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/vmap_ad_samples&sz=640x480&cust_params=sar%3Da0f2&ciu_szs=300x250&ad_rule=1&gdfp_req=1&output=vmap&unviewed_position_start=1&env=vp&impl=s&correlator=';
    //urlTag = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/66060234/video_test_2&description_url=[placeholder]&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&vconp=2&vpa=auto&vpi=1&correlator=';
  
    // let urlTag = `https://pubads.g.doubleclick.net/gampad/ads
    // ?iu=/66060234/video_test_2
    // &tfcd=0 -> Etiqueta dirigada niños
    // &npa=0 -> Anuncio personalizado
    // &sz=400x300 -> Tamaños o sizes
    // &ad_rule=1 -> Solicitud de creatividad VAST (0) o Solicitud de reglas de anuncios (VMAP) (1)
    // &gdfp_req=1 -> Indicador de esquema de Ad Manager
    // &output=vmap -> Salida generada
    // &unviewed_position_start=1 -> Indicar impresiones retrasadas para video.
    // &env=vp -> Vídeo y/o audio (env=instream) o solo video (env=vp)
    // &impl=s
    // &vpi=1 -> Mute apagado (1) o no silenciado (0)
    // &correlator=`;
  
    // urlTag = `https://pubads.g.doubleclick.net/gampad/ads
    // ?iu=/21775744923/external/vmap_ad_samples
    // &sz=640x480
    // &cust_params=sample_ar%3Dpremidpostlongpod
    // &ciu_szs=300x250
    // &gdfp_req=1
    // &ad_rule=1
    // &output=vmap
    // &unviewed_position_start=1
    // &env=vp
    // &impl=s
    // &cmsid=496
    // &vid=short_onecue
    // &correlator=`;
  
    playAction.addEventListener('click', function () {
      loadAds();
    });
  
    initializeIMA();
  
    function initializeIMA() {
      adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, videoElement);
      adsLoader = new google.ima.AdsLoader(adDisplayContainer);
  
      adsLoader.addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        onAdsManagerLoaded,
        false);
  
      adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError,
        false);
  
      function onAdsManagerLoaded(adsManagerLoadedEvent) {
        console.log('onAdsManagerLoaded');
        // Instanciar el AdsManager desde la respuesta de adsLoader y pasarle el elemento vídeo
        adsManager = adsManagerLoadedEvent.getAdsManager(videoElement);
        console.log('adsManager', adsManager);
  
        adsManager.addEventListener(
          google.ima.AdErrorEvent.Type.AD_ERROR,
          onAdError
        );
  
        adsManager.addEventListener(
          google.ima.AdEvent.Type.LOADED,
          onAdLoaded
        );
      }
  
      function onAdLoaded(adEvent) {
        console.log('onAdLoaded');
      }
  
      function onAdError(adErrorEvent) {
        console.log(adErrorEvent.getError());
        if (adsManager) {
          adsManager.destroy();
        }
      }
  
      actionRequest();
      adsLoadedInitial = true;
    }
  
    function actionRequest() {
      adsLoader.contentComplete();
      let adsRequest = new google.ima.AdsRequest();
      adsRequest.setContinuousPlayback();
  
      if(flag == 1){
        adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_ad_samples&sz=640x480&cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
      }else {
        adsRequest.adTagUrl = urlTag;
      }
    
      adsLoader.requestAds(adsRequest);
      flag++;
    }
  
    function loadAds() {
      if(!adsLoadedInitial){
        actionRequest();
      }
     
      // Inicializar el contenedor. Debe hacerse mediante una acción del usuario en los dispositivos móviles.
      adDisplayContainer.initialize();
  
      let width = videoElement.clientWidth;
      let heigth = videoElement.clientHeight;
  
      try {
        adsManager.init(width, heigth, google.ima.ViewMode.NORMAL);
        adsManager.start();
        adsLoadedInitial = false;
      } catch (adError) {
        // Reproducir el vídeo sin anuncios, si se produce un error
        console.log(adError);
        console.log("AdsManager could not be started");
        //videoElement.play();
      }
  
    }
  
  }
  
  export { videoSDK }