const add_ = () => {
  /* add dots date events time */
  if (!!document.querySelector(".card-event-date-hour")) {
    const allEventsTime = document.querySelectorAll(".card-event-date-hour");

    allEventsTime.forEach(eventTime => {
      const txt = eventTime.innerText;
      eventTime.innerText = `${txt.substring(0, 7)}.${txt.charAt(7)}.`;
    });
  }

  ///// js para select de categorias, subcategorias y subsubcategorias
  Array.from(
    document.querySelectorAll(
      "#views-exposed-form-search-results-al-dia-solr-page-1 .form-item-field-category li label"
    )
  ).map(function(e) {
    if (e != null && !e.innerHTML.includes("-")) {
      e.classList.add("category");
    }
  });

  //// publicidad horizontal cada 6 en more covers
  Array.from(
    document.querySelectorAll(
      ".block-fixed-block-contenthorizontal-advertising"
    )
  ).map(function(e) {
    if (e != null) {
      Array.from(
        document.querySelectorAll(
          ".view-more-covers-landing  .view-content .views-row:nth-child(7n)"
        )
      ).map(function(evt) {
        if (
          evt != null &&
          !evt.nextElementSibling.classList.contains(
            "block-fixed-block-contenthorizontal-advertising"
          )
        ) {
          evt.parentElement.insertBefore(e, evt);
        }
      });
    }
  });

  ///// js para modos de visualizacion de guest event
  Array.from(
    document.querySelectorAll(".view-block-guest .views-field-field-style div")
  ).map(e => {
    if (e != null) {
      if (e.innerText == "one") {
        e.closest(".views-row").classList.add("mode-one");
      } else if (e.innerText == "two") {
        e.closest(".views-row").classList.add("mode-two");
      } else if (e.innerText == "three") {
        e.closest(".views-row").classList.add("mode-three");
      } else if (e.innerText == "more") {
        e.closest(".views-row").classList.add("mode-more");
      }
    }
  });

  ///// js para modos de visualizacion de slider event
  Array.from(
    document.querySelectorAll(
      ".view-slider-internal-event .views-field-field-slider-styl div"
    )
  ).map(e => {
    if (e != null) {
      if (e.innerText.trim() == "sone") {
        e.closest(".views-row").classList.add("slider-one");
      } else if (e.innerText.trim() == "stwo") {
        e.closest(".views-row").classList.add("slider-two");
      } else if (e.innerText.trim() == "sthree") {
        e.closest(".views-row").classList.add("slider-three");
      } else if (e.innerText.trim() == "smor") {
        e.closest(".views-row").classList.add("slider-more");
      }
    }
  });

  ////// js para añadir el boton de respuesta en la lista
  Array.from(
    document.querySelectorAll(".al-dia-news-reply-comments input[value=REPLY]")
  ).map(function(e) {
    var father_li = e.closest("ul").querySelector(".container-reply");
    if (!!e && !!father_li) {
      father_li.appendChild(e);
    }
  });
};

export default add_;
