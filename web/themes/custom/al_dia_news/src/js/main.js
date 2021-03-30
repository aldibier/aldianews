window.onload = function() {
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
  var block_ads = document.querySelector("#block-fixed-block-content-big-vertical-advertising");
  var view_career = document.querySelector(".block-views-blockcareer-news-block-1");
  if(block_ads === null && view_career != null){
      view_career.classList.add("view-complete");
  }

  //// js para slider de video en landing de video
 
  function one(){
    Array.from(document.querySelectorAll(".block-views-blockcarousel-videos-landing-block-2")).map(function(e) {
      var p = e.querySelector(".select-video");
      var c = e.querySelector(".video-present");
          if(p != null && c != null ){
            p.classList.remove("select-video");
            c.classList.remove("video-present");
          }
    });
  }

  function two(){
    Array.from(document.querySelectorAll(".view-id-carousel_videos_landing.view-display-id-page_1")).map(function(ev) {
      var a = ev.querySelector(".show-video");
      var b = ev.querySelector(".video-present");
          if(a != null && b != null ){
            a.classList.remove("show-video");
            b.classList.remove("video-present");
          }
    });
  }


var lista1 = document.querySelectorAll('.block-views-blockcarousel-videos-landing-block-2 .views-field-nid')
var lista2 = document.querySelectorAll('.view-id-carousel_videos_landing.view-display-id-page_1 .views-field-nid')

for (let i = 0; i < lista1.length; i++) {
   const itemLista1 = lista1[i];
   
   itemLista1.parentElement.addEventListener("click", function (){
      one();
      two();
 if(itemLista1.children.innerHTML === lista2[i].children.innerHTML ){
          itemLista1.parentElement.parentElement.classList.add("select-video");
          lista2[i].parentElement.parentElement.classList.add("show-video");
          itemLista1.parentElement.classList.add("video-present");
          lista2[i].parentElement.classList.add("video-present");
        }
   })
}

  
};

