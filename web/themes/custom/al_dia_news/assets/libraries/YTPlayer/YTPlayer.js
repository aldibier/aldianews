/**
 * Esté archivo no se compila ya que la API require que la función onYouTubeIframeAPIReady
 * sea global debido a que es ejecutada cuando se carga el script de iframe api
 */

// Esté script carga el código del API Iframe Player asincronamente
const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player = [];
function onYouTubeIframeAPIReady() {
  // Ejecutar la api sobre los videos del slider del home
  const heroHome = document.querySelector(".hero--home");
  if (!!heroHome) {
    heroHome.querySelectorAll(".swiper-slide").forEach((slide, index) => {
      const videoContent = slide.querySelector(".hero__video:not(.hero__gif)");

      if (!!videoContent) {
        const element = document.createElement("div");
        const id = `home-video-${index}`;
        element.classList.add("vide-content");
        element.id = id;
        videoContent.insertAdjacentElement("beforeend", element);

        const iframe = videoContent.querySelector("iframe");
        const src = iframe.src.split("?")[0].split("/");
        const videoId = src[src.length - 1];
        videoContent.firstElementChild.remove();

        if (iOS() && window.innerWidth <= 1024) {
          videoContent.remove();
          const gifContent = slide.querySelector(".hero__gif");
          if (!!gifContent) gifContent.style.display = 'block';
        } else {
          player[index] = new YT.Player(id, {
            videoId,
            width: "640",
            height: "360",
            playerVars: {
              controls: 0,
              showinfo: 0,
              autoplay: 1,
              disablekb: 1,
              modestbranding: 1
            },
            events: {
              onReady: onPlayerReady,
              onStateChange: onPlayerStateChange
            }
          });
        }
      }
    });
  }
}

// El API llamará está función cuando el video esté listo
function onPlayerReady(event) {
  event.target.setVolume(0);
  event.target.setPlaybackQuality("default");
  event.target.playVideo();
}

// El API llamará está función cuando el estado del reproductor cambie,
// en esté caso el video vuelve a reproducir una vez finaliza
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}

function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod"
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
