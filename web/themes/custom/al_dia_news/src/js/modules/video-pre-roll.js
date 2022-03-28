function videoSDK() {

  const vastTags = Object.values(drupalSettings.vast);
  const mapPositions = vastTags.map(function (tag) {
    return tag['pos'];
  });

  let vastPrev;
  let vastCurrent;
  let vastNext;
  let lastVast = vastTags.length;

  mapPositions.sort(function (a, b) {
    return a - b;
  });

  let adDisplayContainer;
  let adsLoader;
  let adsManager;

  let videoElement = document.querySelector('#video-element');
  let adContainer = document.querySelector('#ad-container');
  let playAction = document.querySelector('#play-button');
  let nextAction = document.querySelector('#play-next');
  let playSwitch = document.querySelector('#play-switch')
  let previousAction = document.querySelector('#play-previous');
  let adsSound = document.querySelector('#ads-sound')
  let urlTag = getTagByPosition(vastTags, mapPositions[0]);

  playAction.addEventListener('click', function () {
    console.log('load');
    loadAds();
  });

  nextAction.addEventListener('click', function () {
    let pos = this.dataset.position;
    urlTag = getTagByPosition(vastTags, mapPositions[pos]);

    //reset actions
    adsManager.destroy();
    
    actionRequest();
   
    setTimeout(function(){
      playAction.click();
    },300)

    managementPosition('next');
  });

  previousAction.addEventListener('click', function () {
    let pos = this.dataset.position;
    urlTag = getTagByPosition(vastTags, mapPositions[pos]);

    //reset actions
    adsManager.destroy();
    
    actionRequest();

    setTimeout(function(){
      playAction.click();
    },300)

    managementPosition('previous');
  });

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

      adsManager.addEventListener(
        google.ima.AdEvent.Type.LOADED,
        onAdLoaded
      );

      adsManager.addEventListener(
        google.ima.AdEvent.Type.COMPLETE,
        onAdComplete
      );

      adsManager.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError
      );

    }

    function onAdLoaded(adEvent) {
      console.log(adEvent);
      console.log('onAdLoaded');
    }

    function onAdComplete(){
      nextAction.click();
    }

    function onAdError(adErrorEvent) {
      console.log(adErrorEvent.getError());
      if (adsManager) {
        adsManager.destroy();
      }
    }

  }

  function actionRequest() {
    let adsRequest = new google.ima.AdsRequest();
    adsRequest.setContinuousPlayback();
    adsRequest.setAdWillAutoPlay(true);
    adsRequest.setAdWillPlayMuted(true);
    adsRequest.adTagUrl = urlTag;
    
    adsLoader.requestAds(adsRequest);
    adsLoader.contentComplete();
  }

  function loadAds() {
    // Inicializar el contenedor. Debe hacerse mediante una acción del usuario en los dispositivos móviles.
    adDisplayContainer.initialize();

    let width = videoElement.clientWidth;
    let heigth = videoElement.clientHeight;

    console.log(adsManager);

    try {
      adsManager.init(width, heigth, google.ima.ViewMode.NORMAL);
      adsManager.start();
      restartControls();
    } catch (adError) {
      // Reproducir el vídeo sin anuncios, si se produce un error
      console.log(adError);
      console.log("AdsManager could not be started");
      //videoElement.play();
    }

  }

  function getTagByPosition(arr, pos) {
    let tag = arr.filter(element => {
      if (element['pos'] == pos) {
        return element['tag'];
      }
    });

    if (!!tag) return tag[0].tag;

    return null;
  }

  function managementPosition(option){
    if(option == 'initial'){
      vastPrev = null;
      vastCurrent = 0;
      vastNext = 1;

      previousAction.setAttribute('disabled','disabled');
      previousAction.classList.add('disabled');

    }

    if(option == 'next'){
      vastPrev = vastCurrent;
      vastCurrent = vastCurrent + 1;
      vastNext =  vastCurrent  + 1;

      if(vastNext == lastVast){
        nextAction.setAttribute('disabled','disabled');
        nextAction.classList.add('disabled');
      }

      if(previousAction.classList.contains('disabled')){
        previousAction.removeAttribute('disabled','disabled');
        previousAction.classList.remove('disabled');
      }

    }

    if(option == 'previous'){
      vastPrev = vastCurrent - 2;
      vastCurrent = vastCurrent - 1;
      vastNext = vastCurrent + 1;

      if(vastCurrent == 0){
        previousAction.setAttribute('disabled','disabled');
        previousAction.classList.add('disabled');
      }

      if(nextAction.classList.contains('disabled')){
        nextAction.removeAttribute('disabled','disabled');
        nextAction.classList.remove('disabled');
      }

    }

    previousAction.dataset.position = vastPrev;
    playAction.dataset.position = vastCurrent;
    nextAction.dataset.position = vastNext;

  }

  function restartControls(){

    if(adContainer.classList.contains('paused')){
      adContainer.classList.remove('paused');
    }

    if(adContainer.classList.contains('muted')){
      adContainer.classList.remove('muted');
    }

  }

  managementPosition('initial');
  initializeIMA();
  actionRequest();


  playSwitch.addEventListener('click',function(e){

    if(!adContainer.classList.contains('paused')){
      adsManager.pause();
      adContainer.classList.add('paused');
    }else {
      adsManager.resume();
      adContainer.classList.remove('paused');
    }
    
  })

  adsSound.addEventListener('click',function(){
    let volume = adsManager.getVolume();

    if(adContainer.classList.contains('paused')){
      return;
    }

    if(volume == 1){
      adsManager.setVolume(0);
      adContainer.classList.add('muted');
    }else {
      adsManager.setVolume(1);
      adContainer.classList.remove('muted');
    }

  })

}

export { videoSDK }