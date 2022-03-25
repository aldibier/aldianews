
// Defina una variable para rastrear si hay anuncios cargados e inicialmente configúrela como falsa
let adsLoaded = false;
let adContainer;
let adDisplayContainer;
let adsLoader;
let adsManager;

// Load
let videoElement = document.querySelector('#video-element');
initializeIMA();

videoElement.addEventListener('play', function (event) {
    loadAds(event);
});

// window.addEventListener('resize',function(){
//   console.log("window resized");
//   if(adsManager){
//     let width = videoElement.clientWidth;
//     let height = videoElement.clientHeight;

//     adsManager.resize(width,height,google.ima.ViewMode.NORMAL);

//   }
// });

function initializeIMA() {
    console.log('initializing IMA');
    adContainer = document.querySelector('#ad-container');
    adContainer.addEventListener('click', adContainerClick);
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

    // Avisa al AdsLoader cuando el vídeo ha terminado
    videoElement.addEventListener('ended', function () {
        //adsLoader.contentComplete();
    })

    function adContainerClick(event) {
        console.log("ad container clicked");
        if (videoElement.paused) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    }

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
            google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
            onContentPauseRequested
        )
        adsManager.addEventListener(
            google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
            onContentResumeRequested
        )
        adsManager.addEventListener(
            google.ima.AdEvent.Type.LOADED,
            onAdLoaded
        );

    }

    function onAdLoaded(adEvent) {
        console.log('onAdLoaded');
        var ad = adEvent.getAd();
        var adDuration = (adEvent.getAdData().duration * 1000);

        console.log(adDuration);

        setTimeout(function () {
            loadAds();
        }, adDuration)

        if (!ad.isLinear()) {
            videoElement.play();
        }
    }

    function onContentPauseRequested() {
        videoElement.pause();
    }

    function onContentResumeRequested() {
        videoElement.play();
    }

    function onAdError(adErrorEvent) {
        // Maneja el registro de errores.
        console.log(adErrorEvent.getError());
        if (adsManager) {
            adsManager.destroy();
        }
    }

    let adsRequest = new google.ima.AdsRequest();

    //adsRequest.adTagUrl = 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator=';
    adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/66060234/video_test_2&description_url=[placeholder]&tfcd=0&npa=0&sz=400x300&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
    adsRequest.setContinuousPlayback(true);
    //adsRequest.setAdWillAutoPlay(true);

    // Especifique el tamaño de las ranuras lineales y no lineales. Esto ayuda al SDK a
    // seleccionar el creativo correcto si se devuelven varios.

    adsRequest.linearAdSlotWidth = videoElement.clientWidth;
    adsRequest.linearAdSlotHeight = videoElement.clientHeight;
    adsRequest.nonLinearAdSlotWidth = videoElement.clientWidth;
    adsRequest.nonLinearAdSlotHeight = videoElement.clientHeight / 3;

    // Pasar la petición al adsLoader para solicitar anuncios

    console.log('adsRequest', adsRequest);
    console.log('adsLoader', adsLoader);
    // console.log('adsLoader',adsLoader.getSettings());

    adsLoader.requestAds(adsRequest);

}

function loadAds(event) {
    // Evitar que esta función se ejecute si ya hay anuncios cargados
    if (adsLoaded) {
        return;
    }

    //adsLoaded = true;

    // Evitar la activación de la reproducción inmediata cuando se cargan los anuncios
    if (!!event) {
        event.preventDefault();
    }

    console.log('loading ads');

    // Inicializar el contenedor. Debe hacerse mediante una acción del usuario en los dispositivos móviles.
    videoElement.load();
    adDisplayContainer.initialize();

    let width = videoElement.clientWidth;
    let heigth = videoElement.clientHeight;

    try {
        adsManager.init(width, heigth, google.ima.ViewMode.NORMAL);
        adsManager.start();
        console.log('adsManager', adsManager);
    } catch (adError) {
        // Reproducir el vídeo sin anuncios, si se produce un error
        console.log("AdsManager could not be started");
        videoElement.play();
    }

}


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