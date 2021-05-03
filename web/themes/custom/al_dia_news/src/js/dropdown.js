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
  Array.from(document.querySelectorAll(".container-show-hide span")).map(
    function(e) {
      var container_answer = document.querySelectorAll("section .indented");
      if (!!e && !!container_answer) {
        e.parentElement.addEventListener("click", () => {
          e.parentElement.parentElement.classList.toggle("active");
          Array.from(container_answer).map(function(e) {
            e.classList.toggle("dis-block");
          });
        });
      }
    }
  );
};

export default dropdown_;
