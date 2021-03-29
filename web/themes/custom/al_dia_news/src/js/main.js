window.onload = function() {
  // js video
  var video_interna = document.querySelector(
    ".block-field-blocknodenewsfield-video"
  );
  var contenido_interna = document.querySelector(
    ".content-news-internal-first"
  );
  if (video_interna != null && contenido_interna != null) {
    contenido_interna.classList.add("video-present");
  }

  //// js ajuste ancla en employed
  Array.from(
    document.querySelectorAll(".menu--i-am-an-employer-menu li a")
  ).map(function(e) {
    e.addEventListener("click", () => {
      setTimeout(() => {
        var scroll_y = window.scrollY;
        window.scrollTo(0, scroll_y - 173);
      }, 20);
    });
  });

  //// js validador de publicidad en landing jobs
  var block_ads = document.querySelector(
    ".block-block-groupgroup-career-news-jobs .block-fixed-block-contentbig-vertical-advertising"
  );
  var view_career = document.querySelector(
    ".block-views-blockcareer-news-block-1"
  );
  if (block_ads === null && view_career != null) {
    view_career.classList.add("view-complete");
  }

  //// js para slider de video en landing de video
  Array.from(
    document.querySelectorAll(
      ".block-views-blockcarousel-videos-landing-block-2 .views-field-nid"
    )
  ).map(function(e) {
    e.parentElement.addEventListener("click", () => {
      Array.from(
        document.querySelectorAll(
          ".view-id-carousel_videos_landing.view-display-id-page_1 .views-field-nid"
        )
      ).map(function(ev) {
        if (
          e.innerText === ev.innerText &&
          ev.parentElement.classList.contain("video-present")
        ) {
          ev.parentElement.parentElement.classList.remove("select-video");
          ev.parentElement.parentElement.classList.remove("show-video");
          ev.parentElement.classList.remove("video-present");
          ev.parentElement.classList.remove("video-present");
        } else {
          ev.parentElement.parentElement.classList.add("select-video");
          ev.parentElement.parentElement.classList.add("show-video");
          ev.parentElement.classList.add("video-present");
          ev.parentElement.classList.add("video-present");
        }
      });
    });
  });
};
