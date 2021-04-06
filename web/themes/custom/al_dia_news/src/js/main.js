window.onload = function () {
  // js video en interna
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
  ).map(function (e) {
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

  function one() {
    Array.from(
      document.querySelectorAll(
        ".block-views-blockcarousel-videos-landing-block-2"
      )
    ).map(function (e) {
      var p = e.querySelector(".select-video");
      var c = e.querySelector(".video-present");
      if (p != null && c != null) {
        p.classList.remove("select-video");
        c.classList.remove("video-present");
      }
    });
  }

  function two() {
    Array.from(
      document.querySelectorAll(
        ".view-id-carousel_videos_landing.view-display-id-page_1"
      )
    ).map(function (ev) {
      var a = ev.querySelector(".show-video");
      var b = ev.querySelector(".video-present");
      if (a != null && b != null) {
        a.classList.remove("show-video");
        b.classList.remove("video-present");
      }
    });
  }

  var lista1 = document.querySelectorAll(
    ".block-views-blockcarousel-videos-landing-block-2  .views-row.slick-slide:not(.slick-cloned) .views-field-nid"
  );
  var lista2 = document.querySelectorAll(
    ".view-id-carousel_videos_landing.view-display-id-page_1 .views-field-nid"
  );

  for (let i = 0; i < lista1.length; i++) {
    const itemLista1 = lista1[i];
    const itemLista2 = lista2[i];

    // console.log(itemLista1, itemLista2)
    itemLista1.parentElement.addEventListener("click", function () {
      one();
      two();
      const allIframes = document.querySelectorAll(
        ".view-id-carousel_videos_landing.view-display-id-page_1  iframe"
      );

      const resetAlliframes = () => {
        allIframes.forEach(iframe => {
          iframe.classList.add("change-src");
          iframe.src = iframe.src;
          setTimeout(() => iframe.classList.remove("change-src"), 800);
        });
      };
      resetAlliframes();
      if (itemLista1.children.innerHTML === itemLista2.children.innerHTML) {
        itemLista1.parentElement.parentElement.classList.add("select-video");
        itemLista2.parentElement.parentElement.classList.add("show-video");
        itemLista1.parentElement.classList.add("video-present");
        itemLista2.parentElement.classList.add("video-present");
      }
    });
  }
};

window.addEventListener("DOMContentLoaded", () => {
  //// js para controlar pop-up video

  if (!!document.querySelector(".path-videos")) {
    const allCardVideos = document.querySelectorAll(".card-one-column");
    const allIframes = document.querySelectorAll(".card-one-column iframe");

    const resetAlliframes = () => {
      allIframes.forEach(iframe => {
        iframe.classList.add("change-src");
        iframe.src = iframe.src;
        setTimeout(() => iframe.classList.remove("change-src"), 800);
      });
    };

    allCardVideos.forEach(cardVideo =>
      cardVideo.addEventListener("click", event => {
        node = event.currentTarget.parentNode.firstElementChild;

        while (node) {
          if (
            node !== event.currentTarget &&
            node.nodeType === Node.ELEMENT_NODE
          ) {
            node.querySelector(".wrapper-popup").classList.remove("active");
            resetAlliframes();
          } else {
            if (event.target.closest(".wrapper-popup")) return;
            node.querySelector(".wrapper-popup ").classList.toggle("active");
            resetAlliframes();
          }
          node = node.nextElementSibling;
        }
      })
    );

    document.body.addEventListener("click", event => {
      const contentActive = event.target.closest(".card-one-column") || false;

      if (!contentActive) {
        document
          .querySelector(".wrapper-popup.active")
          .classList.remove("active");
        resetAlliframes();
      }

      if (event.target.classList.contains("close")) {
        document
          .querySelector(".wrapper-popup.active")
          .classList.remove("active");
        resetAlliframes();
      }
    });
  }

  //// js para controlar pop-up advertising
  if (!!document.querySelector('.path-advertising')) {
    const allButtonsApply = document.querySelectorAll('.button-apply');
    const allButtonsClose = document.querySelectorAll('button[name="close"]');

    const showModal = (event) => {
      const parent = event.path.find(elementPath => elementPath.classList.contains('views-row'));
      const form = parent.querySelector('.views-field-field-webform');
      form.classList.add('show');
    }

    const hideModal = (event) => {
      const form = event.path.find(elementPath => elementPath.classList.contains('views-field-field-webform'));
      form.classList.remove('show');
    }

    allButtonsApply.forEach(buttonApply => buttonApply.addEventListener('click', showModal));
    allButtonsClose.forEach(buttonClose => buttonClose.addEventListener('click', hideModal));
  }

});
