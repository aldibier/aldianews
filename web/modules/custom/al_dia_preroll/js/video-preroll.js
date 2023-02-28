const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;

function dateToTimestamp(date) {
  return date.getTime();
}

function getHoursBetweenDates(date1, date2, useTimestamps = false) {
  let timeDiffInMs;
  if (useTimestamps) {
    timeDiffInMs = Math.abs(date1 - date2);
  } else {
    timeDiffInMs = Math.abs(date1.getTime() - date2.getTime());
  }

  const hoursDiff = Math.floor(timeDiffInMs / (MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR));

  return hoursDiff;
}

function videoSDK() {

    // Fecha actual
    const currentDate = new Date();
  
    // Elements container
    const videoContainer = document.querySelector("#video-container");
    const videoElement = document.querySelector("#video-element");
    const adContainer = document.querySelector("#ad-container");
    const adsProgressContainer = document.querySelector(
      "#ads-progress-container"
    );
  
    if (!!drupalSettings.campaigns && !!videoContainer) {
      const browserStorage = drupalSettings.campaigns.browser_storage;

      let campaigns = Object.values(drupalSettings.campaigns);
      // Validates if the campaigns are objects
      campaigns = campaigns.filter(element => {
        if(element !== null) return typeof element === 'object';
      } );

      if (localStorage.campaign == null) {
        localStorage.posCampaign = 0;
        localStorage.posVast = 0;
        localStorage.lastViewed = dateToTimestamp(currentDate);
        setCampaignInStorage(localStorage.posCampaign)
      }
  
      if(localStorage.campaign != null){
  
        if(localStorage.lastViewed != null){
  
          const date1 = dateToTimestamp(currentDate);
          const date2 = localStorage.lastViewed;
          const hoursDiff = getHoursBetweenDates(date1,date2,true);
  
          if(hoursDiff > browserStorage){
            localStorage.posCampaign = 0;
            localStorage.posVast = 0;
            localStorage.lastViewed = dateToTimestamp(currentDate);
            setCampaignInStorage(localStorage.posCampaign)
          }
  
        }
  
        if(localStorage.lastViewed == null){
          localStorage.lastViewed = dateToTimestamp(currentDate);
        }
     
      }
  
      let mapCampaigns = JSON.parse(localStorage.campaign);
      let vastPrev;
      let vastCurrent;
      let vastNext;
      let lastVast = mapCampaigns.length - (1 + parseInt(localStorage.posVast));
      let initialVast = true;
  
      // Elements ads
      let adDisplayContainer;
      let adsLoader;
      let adsManager;
      let adsObj = {};
  
      // Elements actions
      const playAction = document.querySelector("#play-button");
      const nextAction = document.querySelector("#play-next");
      const playSwitch = document.querySelector("#play-switch");
      const previousAction = document.querySelector("#play-previous");
      const adsSound = document.querySelector("#ads-sound");
      const adsFullscreen = document.querySelector("#ads-fullscreen");
      const btnClosePreroll = document.querySelector("#btn-close-preroll");
      const adsBarProgress = document.querySelector(
        "#ads-progress-container .bar"
      );
      const adsTimeLeft = document.querySelector(".ads-time-left");
      const adsTimeTotal = document.querySelector(".ads-time-total");
      const adsLinkDestiny = document.querySelector(".ads-destiny-link");
  
      let urlTag = getTagByPosition(localStorage.posVast);
      let adsMuted = true;
      let lastAdComplete = false;
  
      playAction.addEventListener("click", function () {
        loadAds();
      });
      
      // Support for safari initialization 
      if(document.body.classList.contains('iphone')){
        document.addEventListener("touchstart", function(event) {
          loadAds();
        }, { once: true });
      }
  
      playSwitch.addEventListener("click", function (e) {
        if (!videoContainer.classList.contains("paused")) {
          clearInterval(adsObj.interval);
          adsManager.pause();
  
          videoContainer.classList.add("paused");
        } else {
          adsObj.interval = setInterval(function () {
            progressAds(adsObj.progress++, adsObj.duration, adsProgressContainer);
          }, 1000);
  
          videoContainer.classList.remove("paused");
          adsManager.resume();
        }
      });
  
      previousAction.addEventListener("click", function () {
        localStorage.posVast = this.dataset.position;
        urlTag = getTagByPosition(localStorage.posVast);
  
        adsManager.destroy();
        actionRequest();
        managementPosition("previous");
      });
  
      nextAction.addEventListener("click", function () {
        localStorage.posVast = this.dataset.position;
        urlTag = getTagByPosition(localStorage.posVast);
  
        adsManager.destroy();
        actionRequest();
        managementPosition("next");
      });
  
      adsSound.addEventListener("click", function () {
        let volume = adsManager.getVolume();
  
        if (videoContainer.classList.contains("paused")) {
          return;
        }
  
        if (volume == 1) {
          adsManager.setVolume(0);
          videoContainer.classList.add("muted");
          videoElement.muted = true;
          adsMuted = true;
        } else {
          adsManager.setVolume(1);
          videoContainer.classList.remove("muted");
          videoElement.muted = false;
          adsMuted = false;
        }
      });
  
      adsFullscreen.addEventListener("click", function () {
        console.log('Fullscreen');
        if (videoContainer.requestFullscreen) {
  
          if (document.fullscreenElement) {
            document.exitFullscreen();
            //document.webkitExitFullscreen() Safari prefixed
            videoContainer.classList.remove("fullscreen");
          } else {
            videoContainer.requestFullscreen();
            //videoContainer.webkitRequestFullscreen() Safari prefixed
            videoContainer.classList.add("fullscreen");
          }
        }
  
        //Support safari fullscreen
        if (!document.body.classList.contains('safari')) return;
  
        if (!videoContainer.classList.contains('fullscreen')) {
          videoContainer.classList.add('fullscreen');
          document.body.classList.add('fullscreen-active');
        } else {
          videoContainer.classList.remove('fullscreen');
          document.body.classList.remove('fullscreen-active');
        }
  
      });
  
      document.addEventListener("fullscreenchange", (event) => {
        if (!document.fullscreenElement) {
          videoContainer.classList.remove("fullscreen");
        }
      });
  
      adsLinkDestiny.addEventListener("click", function () {
        playSwitch.click();
      });
  
      btnClosePreroll.addEventListener("click", function () {
        adsManager.destroy();
        adsLoader.destroy();
        videoContainer.remove();
      });
  
      function initializeIMA() {
        adDisplayContainer = new google.ima.AdDisplayContainer(
          adContainer,
          videoElement
        );
        adsLoader = new google.ima.AdsLoader(adDisplayContainer);
  
        adsLoader.addEventListener(
          google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
          onAdsManagerLoaded,
          false
        );
  
        adsLoader.addEventListener(
          google.ima.AdErrorEvent.Type.AD_ERROR,
          onAdError,
          false
        );
  
        function onAdsManagerLoaded(adsManagerLoadedEvent) {
          console.log("onAdsManagerLoaded");
          // Instanciar el AdsManager desde la respuesta de adsLoader y pasarle el elemento vídeo
          adsManager = adsManagerLoadedEvent.getAdsManager(videoElement);
  
          if (initialVast == false) {
            playAction.dispatchEvent(new Event("click"));
          }
  
          if (initialVast) {

            if(!document.body.classList.contains('iphone')){
              playAction.dispatchEvent(new Event("click"));
            }
          
            initialVast = false;
          }
  
          if (adsMuted) {
            adsManager.setVolume(0);
          } else {
            adsManager.setVolume(1);
          }
  
          adsManager.addEventListener(google.ima.AdEvent.Type.LOADED, onAdLoaded);
  
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
          console.log("onAdLoaded");
          adsObj.ad = adEvent.getAd();
          adsObj.duration = adsObj.ad.getDuration();
          adsObj.linkDestiny = '';
  
          if (typeof adsObj.ad == 'object') {
            adsObj.data = adsObj.ad[Object.keys(adsObj.ad)[0]];
            adsObj.linkDestiny = adsObj.data.clickThroughUrl;
          }
  
          adsObj.progress = 0;
  
          if (adsObj.linkDestiny) {
            adsLinkDestiny.style.display = "block";
            adsLinkDestiny.href = adsObj.linkDestiny;
          } else {
            adsLinkDestiny.style.display = "none";
          }
  
          adsObj.interval = setInterval(function () {
            progressAds(adsObj.progress++, adsObj.duration, adsProgressContainer);
          }, 1000);
  
          let minutes = Math.floor(adsObj.duration / 60);
          let seconds = Math.floor(adsObj.duration % 60);
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          adsTimeTotal.innerHTML = `${minutes}:${seconds}`;
        }
  
        function onAdComplete() {
          console.log('onAdComplete');
          if (lastAdComplete) {
            lastAdComplete = false;
            let posCampaign = localStorage.posCampaign;
            localStorage.posVast = 0;
            localStorage.posCampaign++;
            if (parseInt(posCampaign) + 1 > campaigns.length - 1) {
              localStorage.posCampaign = 0;
            }
            setCampaignInStorage(localStorage.posCampaign)
            urlTag = getTagByPosition(localStorage.posVast);
            managementPosition("initial");
  
            adsManager.destroy();
            actionRequest();
          } else {
            nextAction.click();
          }
        }
  
        function onAdError(adErrorEvent) {
          // Maneja el registro de errores.
          console.log('onAdError');
          let error = adErrorEvent.getError();
          let code = error.getErrorCode();
  
          managmentErrors(error, code);
  
          if (adsManager) {
            adsManager.destroy();
          }
        }
      }
  
      function actionRequest() {
        let adsRequest = new google.ima.AdsRequest();
        let correlatorNumber = randomCorrelatorNumber();
        adsRequest.setAdWillAutoPlay(true);
        adsRequest.setAdWillPlayMuted(true);
        adsRequest.adTagUrl = `${urlTag}${correlatorNumber}`;
  
        // Pasar la petición al adsLoader para solicitar anuncios
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
  
      function getTagByPosition() {
        let pos = localStorage.posVast;
        return mapCampaigns[pos];
      }
  
      function managementPosition(option) {
        if (option == "initial") {
          vastPrev = null;
          vastCurrent = 0;
          vastNext = 1;
  
          previousAction.setAttribute("disabled", "disabled");
          previousAction.classList.add("disabled");
  
          if (nextAction.classList.contains("disabled") && lastVast > 0) {
            nextAction.removeAttribute("disabled", "disabled");
            nextAction.classList.remove("disabled");
          }
  
          if (lastVast == 0) {
            nextAction.setAttribute("disabled", "disabled");
            nextAction.classList.add("disabled");
            lastAdComplete = true;
          }
        }
  
        if (option == "next") {
          vastPrev = vastCurrent;
          vastCurrent = vastCurrent + 1;
          vastNext = vastCurrent + 1;
  
          if (vastNext == lastVast + 1) {
            nextAction.setAttribute("disabled", "disabled");
            nextAction.classList.add("disabled");
            lastAdComplete = true;
          }
  
          if (previousAction.classList.contains("disabled")) {
            previousAction.removeAttribute("disabled", "disabled");
            previousAction.classList.remove("disabled");
          }
        }
  
        if (option == "previous") {
          vastPrev = vastCurrent - 2;
          vastCurrent = vastCurrent - 1;
          vastNext = vastCurrent + 1;
  
          if (lastAdComplete) {
            lastAdComplete = false;
          }
  
          if (vastCurrent == 0) {
            previousAction.setAttribute("disabled", "disabled");
            previousAction.classList.add("disabled");
          }
  
          if (nextAction.classList.contains("disabled")) {
            nextAction.removeAttribute("disabled", "disabled");
            nextAction.classList.remove("disabled");
          }
        }
  
        previousAction.dataset.position = vastPrev;
        playAction.dataset.position = vastCurrent;
        nextAction.dataset.position = vastNext;
      }
  
      function progressAds(timeLeft, timeTotal, element) {
        let progressBarPos = Math.floor(
          (timeLeft * element.offsetWidth) / timeTotal
        );
        let minutes = Math.floor(timeLeft / 60);
        let seconds = Math.floor(timeLeft % 60);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        adsBarProgress.style.width = `${progressBarPos}px`;
        adsTimeLeft.innerHTML = `${minutes}:${seconds}`;
  
        if (timeLeft >= timeTotal) clearInterval(adsObj.interval);
      }
  
      function restartControls() {
        if (videoContainer.classList.contains("paused")) {
          videoContainer.classList.remove("paused");
        }
  
        if (adsMuted) {
          videoContainer.classList.add("muted");
        } else {
          videoContainer.classList.remove("muted");
        }
  
        adsBarProgress.style.width = "0px";
        adsTimeLeft.innerHTML = "00:00";
        adsTimeTotal.innerHTML = "00:00";
  
        clearInterval(adsObj.interval);
      }
  
      function randomCorrelatorNumber() {
        return Math.floor(Math.random() * (9999999 - 1 + 1)).toString();
      }
  
      function managmentErrors(error, code) {
        console.error('Vast code error : ' + code);
        console.error('Vast code message : ' + error) ;
        switch (code) {
          case 1005 :
            videoContainer.remove();
            console.error('The vast url has an incorrect format.');
            break;
          case 1009 :
            videoContainer.remove();
            console.error('The VAST response document is empty.');
            break;
          case 402 :
            videoContainer.remove();
            console.error('VAST media file loading reached a timeout of 8 seconds.');
            break;
          case 400 :
            videoContainer.remove();
            console.error('There was an error playing the video ad.');
            break;
          case 303 :
            videoContainer.remove();
            console.error('Empty VAST response returned.');
            break;
          case 301 :
            videoContainer.remove();
            console.error('VAST redirection timeout has been reached.');
          default:
            videoContainer.remove();
            console.log(error);
        }
  
      }
  
      function setCampaignInStorage(pos) {
        let playbacks = 0;
        
        if(campaigns[pos].vast.length){
          campaigns[pos].vast.forEach((element) => {
            playbacks += parseInt(element.pos_vast);
          });
        }
        
        let vastPriority = sortVastPriority(playbacks, campaigns[pos].vast);
        addMiddleVideoInVasts(vastPriority, campaigns[pos])
        localStorage.campaign = JSON.stringify(vastPriority);
        mapCampaigns = JSON.parse(localStorage.campaign);
        lastVast = mapCampaigns.length - 1;
      }
  
      function sortVastPriority(playbacks, vast) {
        let copyVast = JSON.parse(JSON.stringify(vast));
        let sortVast = [];
        let j = 0;
  
        for (let i = 0; i < playbacks; ++i) {
          Object.entries(copyVast).forEach(([key, value]) => {
            let pos = parseInt(value.pos_vast);
            if (pos > 0) {
              value.pos_vast--;
              sortVast[j++] = value.path_vast;
            }
          });
        }
  
        return sortVast;
      }
  
      function addMiddleVideoInVasts(vastPriority, campaigns) {
        if (campaigns['middleVideo'] !== undefined) {
          const middleVideo = campaigns['middleVideo'];
          const length = vastPriority.length;
          for (let i = 0; i <= length; i++) {
            if (i % 2 === 0) {
              vastPriority.splice(i + 1, 0, middleVideo);
            }
          }
  
          const lastLength = vastPriority.length;
          if (vastPriority[lastLength - 1] !== middleVideo) {
            vastPriority.splice(lastLength, 0, middleVideo);
          }
        }
      }
  
      managementPosition("initial");
      initializeIMA();
      actionRequest();
  
    } else {
  
      if (videoContainer) videoContainer.remove();
  
    }
  
}

(function ($, Drupal) {

  $(window).on("load", function () {

    videoSDK();

  });

})(jQuery, Drupal);

