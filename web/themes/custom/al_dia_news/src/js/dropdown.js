const dropdown_ = () => {

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

  /////// js para añadir la cantidad de comentarios de respuesta y desplegable
  Array.from(document.querySelectorAll("section .comment")).map(function(e) {
    if (!e.nextElementSibling) return;
    if (!!e.nextElementSibling.classList.contains("indented")) {
      e.querySelector(".container-show-hide").addEventListener("click", () => {
        e.querySelector(".container-show-hide").classList.toggle("active");
        e.nextElementSibling.classList.toggle("dis-block");
      });
    }
  });
};

export default dropdown_;
