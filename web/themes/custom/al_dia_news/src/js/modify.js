import { one, two, resetAlliframes } from "../js/functions.js";

const modify_ = () => {
  /* modify elements home */
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
      e.closest(".views-row").classList.add("mobile-free");
    }
  });

  /* for caption in images news */
  if (
    !!document.querySelector(
      ".page-node-type-news .block-field-blocknodenewsbody img"
    )
  ) {
    const images = document.querySelectorAll(
      ".page-node-type-news .block-field-blocknodenewsbody img"
    );
    images.forEach(img => {
      const caption = img.dataset.caption;
      img.insertAdjacentHTML(
        "afterend",
        `<p class="image-caption">${caption}</p>`
      );
    });
  }

  /* block trending is inserted in impact news */
  const blockTrending = document.querySelector(
    ".block-block-grouphigh-impact-and-most-visited-news-home .block-fixed-block-contentbloque-dummy-noticias-home"
  );

  if (!!blockTrending) {
    const blockTwoFeaturedNews = document.querySelector(
      ".view-high-impact-news-home .view-display-id-block_2"
    );
    if (blockTwoFeaturedNews != null) {
      blockTwoFeaturedNews.insertAdjacentElement("beforeend", blockTrending);
    }
  }

  /* blockquote for selection-sharer */
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

  /* text summary for selection-sharer */
  let containerSummary = document.querySelector(
    ".content-news-internal-first .views-element-container"
  );

  if (!!containerSummary) {
    let summary = containerSummary.querySelector(".summary-news");
    containerSummary.insertAdjacentElement("beforebegin", summary);
  }

  /* js video in internal */
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
  var lista1 = document.querySelectorAll(
    ".block-views-blockcarousel-videos-landing-block-2  .views-row.slick-slide:not(.slick-cloned) .views-field-nid"
  );
  var lista2 = document.querySelectorAll(
    ".view-id-carousel_videos_landing.view-display-id-page_1 .views-field-nid"
  );

  for (let i = 0; i < lista1.length; i++) {
    const itemLista1 = lista1[i];
    const itemLista2 = lista2[i];

    itemLista1.parentElement.addEventListener("click", function() {
      console.log("click");

      one();
      two();
      const allIframes = document.querySelectorAll(
        ".view-id-carousel_videos_landing.view-display-id-page_1  iframe"
      );

      resetAlliframes(allIframes);
      if (itemLista1.children.innerHTML === itemLista2.children.innerHTML) {
        itemLista1.parentElement.parentElement.classList.add("select-video");
        itemLista2.parentElement.parentElement.classList.add("show-video");
        itemLista1.parentElement.classList.add("video-present");
        itemLista2.parentElement.classList.add("video-present");
      }
    });
  }
};

export default modify_;
