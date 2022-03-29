function videoSDK() {

  const vastTags = Object.values(drupalSettings.vast);
  const mapPositions = vastTags.map(function (tag) {
    return tag['pos'];
  });

  let vastPrev;
  let vastCurrent;
  let vastNext;
  let lastVast = vastTags.length - 1;

  mapPositions.sort(function (a, b) {
    return a - b;
  });

  let adDisplayContainer;
  let adsLoader;
  let adsManager;

  const videoContainer = document.querySelector('#video-container');
  const videoElement = document.querySelector('#video-element');
  const adContainer = document.querySelector('#ad-container');
  const playAction = document.querySelector('#play-button');
  const nextAction = document.querySelector('#play-next');
  const playSwitch = document.querySelector('#play-switch')
  const previousAction = document.querySelector('#play-previous');
  const adsSound = document.querySelector('#ads-sound');
  const btnClosePreroll = document.querySelector('#btn-close-preroll');
  let urlTag = getTagByPosition(vastTags, mapPositions[0]);
  let adsMuted = true;
  let lastAdComplete = false;

  playAction.addEventListener('click', function () {
    console.log('load');
    loadAds();
  });

  playSwitch.addEventListener('click',function(e){

    if(!videoContainer.classList.contains('paused')){
      adsManager.pause();
      videoContainer.classList.add('paused');
    }else {
      adsManager.resume();
      videoContainer.classList.remove('paused');
    }
    
  })

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

  nextAction.addEventListener('click', function () {
    let pos = this.dataset.position;
    urlTag = getTagByPosition(vastTags, mapPositions[pos]);

    adsManager.destroy();
    actionRequest();
   
    setTimeout(function(){
      playAction.click();
    },300)

    managementPosition('next');
  });

  adsSound.addEventListener('click',function(){
    let volume = adsManager.getVolume();

    if(videoContainer.classList.contains('paused')){
      return;
    }

    if(volume == 1){
      adsManager.setVolume(0);
      videoContainer.classList.add('muted');
      adsMuted = true;
    }else {
      adsManager.setVolume(1);
      videoContainer.classList.remove('muted');
      adsMuted = false;
    }

  })

  btnClosePreroll.addEventListener('click',function(){
    adsManager.destroy();
    adsLoader.destroy();
    videoContainer.remove();
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

      if(adsMuted){
        adsManager.setVolume(0);
      }

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
      console.log('onAdLoaded');
    }

    function onAdComplete(){
      if(!lastAdComplete){
        nextAction.click();
      }else {
        urlTag = getTagByPosition(vastTags, mapPositions[0]);
        managementPosition('initial');

        adsManager.destroy();
        actionRequest();

        setTimeout(function(){
          playAction.click();
        },300)
      }
   
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

      if(nextAction.classList.contains('disabled') && lastVast > 0){
        nextAction.removeAttribute('disabled','disabled');
        nextAction.classList.remove('disabled')
      }

      if(lastVast == 0){
        nextAction.setAttribute('disabled','disabled');
        nextAction.classList.add('disabled');
        lastAdComplete = true;
      }

    }

    if(option == 'next'){
      vastPrev = vastCurrent;
      vastCurrent = vastCurrent + 1;
      vastNext =  vastCurrent  + 1;

      if(vastNext == (lastVast + 1)){
        nextAction.setAttribute('disabled','disabled');
        nextAction.classList.add('disabled');
        lastAdComplete = true;
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

      if(lastAdComplete){
        lastAdComplete = false;
      }

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

    if(videoContainer.classList.contains('paused')){
      videoContainer.classList.remove('paused');
    }

    // if(videoContainer.classList.contains('muted')){
    //   videoContainer.classList.remove('muted');
    // }

  }

  managementPosition('initial');
  initializeIMA();
  actionRequest();

  setTimeout(function(){
    playAction.click();
  },600)

}

export { videoSDK }