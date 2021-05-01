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
}

export default dropdown_;