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
};
