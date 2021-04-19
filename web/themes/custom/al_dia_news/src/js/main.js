window.onload = function() {

  ///// js para publicidad en bloques de categorias de noticias
  Array.from(
    document.querySelectorAll(
      ".block-fixed-block-contentvertical-advertising-mobile"
    )
  ).map(function(e) {
    if (e.children.children != null) {
      e.closest(".mobile-less").parentElement.parentElement.classList.add(
        "life-advertising"
      );
    } else {
      e.parentElement.parentElement.classList.add("mobile-free");
    }
  });

  // block trending se inserta en noticia de impacto
  const blockTrending = document.querySelector('.block-block-grouphigh-impact-and-most-visited-news-home .block-fixed-block-contentbloque-dummy-noticias-home')
  
  if(!!blockTrending){
    const blockTwoFeaturedNews = document.querySelector('.view-high-impact-news-home .view-display-id-block_2');
    blockTwoFeaturedNews.insertAdjacentElement('beforeend',blockTrending);
  }

  // blockquote para selection-sharer
  const allBlockquote = document.querySelectorAll(
    'blockquote:not([class*="twitter"])'
  );

  if (!!allBlockquote && allBlockquote.length) {
    allBlockquote.forEach(blockquote => {
      if (blockquote.firstElementChild.tagName === "P") {
        let text = blockquote.firstElementChild.textContent;
        blockquote.textContent = text;
      }
    });
  }

  //text summary para selection-sharer
  let containerSummary = document.querySelector(
    ".content-news-internal-first .views-element-container"
  );

  if (!!containerSummary) {
    let summary = containerSummary.querySelector(".summary-news");
    containerSummary.insertAdjacentElement("beforebegin", summary);
  }

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

  function one() {
    Array.from(
      document.querySelectorAll(
        ".block-views-blockcarousel-videos-landing-block-2"
      )
    ).map(function(e) {
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
    ).map(function(ev) {
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
    itemLista1.parentElement.addEventListener("click", function() {
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

  /// js boton back
  Array.from(document.querySelectorAll(".cbutton-back")).map(function(e) {
    if (e != null) {
      e.addEventListener("click", () => {
        window.history.back();
      });
    }
  });

  /// js login and register
  Array.from(document.querySelectorAll(".comment-forbidden a")).map(function(
    e
  ) {
    if (e != null) {
      e.removeAttribute("href");
    }
  });
  Array.from(
    document.querySelectorAll(".comment-forbidden a:nth-child(1)")
  ).map(function(e) {
    if (e != null) {
      var button_login = document.querySelector(
        '.Login-Register-popup-link.Login-Register-popup-link a[href*="login"]'
      );
      e.addEventListener("click", () => {
        button_login.click();
      });
    }
  });
  Array.from(
    document.querySelectorAll(".comment-forbidden a:nth-child(2)")
  ).map(function(e) {
    if (e != null) {
      var button_regis = document.querySelector(
        '.Login-Register-popup-link.Login-Register-popup-link a[href*="register"]'
      );
      e.addEventListener("click", () => {
        button_regis.click();
      });
    }
  });

  //// js modal landing videos
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
        if (event.target.nodeName == "A") return;

        node = event.currentTarget.parentNode.firstElementChild;

        while (node) {
          if (
            node !== event.currentTarget &&
            node.nodeType === Node.ELEMENT_NODE
          ) {
            if (event.target.closest(".modal-video")) return;
            node.querySelector(".modal-video").classList.remove("show");
            resetAlliframes();
          } else {
            if (event.target.closest(".wrapper-popup")) return;
            node.querySelector(".modal-video").classList.toggle("show");
            resetAlliframes();
          }
          node = node.nextElementSibling;
        }
      })
    );

    document.body.addEventListener("click", event => {
      const contentActive = event.target.closest(".card-one-column") || false;

      if (!contentActive) {
        document.querySelector(".modal-video.show").classList.remove("show");
        resetAlliframes();
      }

      if (event.target.classList.contains("close")) {
        document.querySelector(".modal-video.show").classList.remove("show");
        resetAlliframes();
      }
    });
  }

  //// js para controlar pop-up advertising
  if (!!document.querySelector(".path-advertising")) {
    const allButtonsApply = document.querySelectorAll(".button-apply");
    const allButtonsClose = document.querySelectorAll(".close-modal");

    const showModal = event => {
      const parent = event.path.find(elementPath =>
        elementPath.classList.contains("advertising-card")
      );
      const form = parent.querySelector(".modal-form");
      form.classList.add("show");
    };

    const hideModal = event => {
      const form = event.path.find(elementPath =>
        elementPath.classList.contains("modal-form")
      );
      form.classList.remove("show");
    };

    allButtonsApply.forEach(buttonApply =>
      buttonApply.addEventListener("click", showModal)
    );
    allButtonsClose.forEach(buttonClose =>
      buttonClose.addEventListener("click", hideModal)
    );
  }

  //// js para controlar pop-up about al dia live
  if (!!document.querySelector(".path-about-al-dia-live")) {
    //// js pop-up about al dia live
    const buttonApply = document.querySelector(
      ".path-about-al-dia-live .button-apply"
    );
    const buttonClose = document.querySelector(".close-modal");
    const modalForm = document.querySelector(".modal-form");

    buttonApply.addEventListener("click", () =>
      modalForm.classList.add("show")
    );
    buttonClose.addEventListener("click", () =>
      modalForm.classList.remove("show")
    );

    //// js pop-up about al dia live
    const triggerVideo = document.querySelector(
      ".block-views-blockabout-al-dia-live-block-1 .about-al-dia-live-container-video"
    );
    const buttonCloseVideo = document.querySelector(".close-video");
    const video = document.querySelector(".modal-video");

    //js temporal
    video.insertAdjacentElement("afterbegin", buttonCloseVideo);

    triggerVideo.addEventListener("click", () => {
      video.classList.add("show");
    });

    buttonCloseVideo.addEventListener("click", event => {
      debugger;
      event.stopPropagation();
      video.classList.remove("show");
    });
  }

  //// js desplegable buscador y close modal
  var arrow = document.querySelector(".path-search-results .arrow");
  var blocks_search = document.querySelector(
    "#block-exposedformsearch-results-al-dia-solrpage-1"
  );
  if (arrow != null && blocks_search != null) {
    arrow.addEventListener("click", () => {
      blocks_search.classList.toggle("open");
      arrow.classList.toggle("rote");
    });
  }

  var close = document.querySelector(
    '#block-exposedformsearch-results-al-dia-solrpage-1-2  button[name="close"]'
  );
  close.addEventListener("click", () => {
    if (close != null && close.parentElement.classList.contains("open")) {
      close.parentElement.classList.remove("open");
    }
  });

  // js bloque login en comentarios
  var comments = document.querySelector(
    ".block-field-blocknodenewsfield-comments .comment"
  );
  var block_login_c = document.querySelector("#block-blockcommentanonymous");
  if (comments != null && block_login_c != null) {
    block_login_c.style.display = "none";
  }

  ///// js para select de categorias, subcategorias y subsubcategorias
  Array.from(
    document.querySelectorAll(
      "#views-exposed-form-search-results-al-dia-solr-page-1 .form-item-field-category li label"
    )
  ).map(function(e) {
    if (e != null && !e.innerHTML.includes("-")) {
      e.classList.add("category");
    } else if (e != null && e.innerHTML.includes("--")) {
      e.parentElement.classList.add("subsubcategory");
    }
  });

  
};
