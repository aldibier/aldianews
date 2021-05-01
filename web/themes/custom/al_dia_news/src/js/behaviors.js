const behaviors = ($, Drupal) => {
    Drupal.behaviors.form_checkbox = {
        attach: function(context, settings) {
          $(document).ready(function() {
            // Relacionando clase de selector al nombre de este archivo
            var currentClass = "js-form-fake-checkbox";
    
            if ($(".form-checkbox").length) {
              $(".form-checkbox").addClass(currentClass);
              if (!$(".fake-checkbox").length) {
                $('<div class="fake-checkbox" />').insertAfter(".form-checkbox");
              }
    
              $(".form-checkbox").each(function() {
                var context = $(this);
                if (context.prop("checked") == true) {
                  context.addClass("active-check");
                }
              });
            }
    
            // Pone clase activa cuando el radio está seleccionado
            $("." + currentClass, context)
              .once("js-form-fake-checkbox")
              .click(function() {
                var context = $(this);
                context.toggleClass("active-check");
              });
    
            /// js para esrilos de boton de eliminar archivo
            var check_number = document.querySelectorAll(
              ".form-managed-file .form-item"
            ).length;
            var mng_field = document.querySelector(".form-managed-file");
            var container_field = document.querySelector("#edit-container");
            if (!!container_field && !!mng_field && !!check_number) {
              if (check_number >= 1) {
                mng_field.classList.add("action-button");
              } else {
                mng_field.classList.remove("action-button");
              }
              if (check_number === 2) {
                container_field.classList.add("disable-button");
              }
            }
    
            //// elipsis para archivos
            Array.from(
              document.querySelectorAll("#edit-container .js-form-type-checkbox a")
            ).map(function(e) {
              if (e != null) {
                if (e.innerText.length > 25) {
                  var newt = e.innerText.substring(0, 25) + "...";
                  e.innerHTML = newt;
                }
              }
            });
    
            /// x que elimina archivos
            var firts_check = document.querySelector(
              '.form-managed-file .form-item:nth-of-type(1) input[type*="checkbox"]'
            );
            var second_check = document.querySelector(
              '.form-managed-file .form-item:nth-of-type(2) input[type*="checkbox"]'
            );
            var input_value = document.querySelector(
              'input[name="upload_file[fids]"]'
            );
            var cont_field = document.querySelector("#edit-container");
    
            if (!!firts_check && !!input_value && second_check === null) {
              firts_check.addEventListener("click", () => {
                input_value.setAttribute("value", "");
                firts_check.closest(".form-type-checkbox").remove();
              });
            }
    
            if (!!cont_field && !!firts_check && !!input_value && !!second_check) {
              firts_check.addEventListener("click", e => {
                e.stopImmediatePropagation();
                var atributo1 = input_value
                  .getAttribute("value")
                  .split("")
                  .slice(4, 7)
                  .join("");
                input_value.setAttribute("value", atributo1);
                firts_check.closest(".form-type-checkbox").remove();
                cont_field.classList.remove("disable-button");
              });
    
              second_check.addEventListener("click", e => {
                e.stopImmediatePropagation();
                var logueado = document.querySelector(".user-logged-in");
    
                if (
                  !!logueado &&
                  !!second_check.parentElement.previousElementSibling.classList.contains(
                    "form-item"
                  )
                ) {
                  var atributo = input_value
                    .getAttribute("value")
                    .split("")
                    .slice(0, 3)
                    .join("");
                  input_value.setAttribute("value", atributo);
                  second_check.closest(".form-type-checkbox").remove();
                  cont_field.classList.remove("disable-button");
                } else if (
                  logueado === null &&
                  !!second_check.parentElement.previousElementSibling.previousElementSibling.classList.contains(
                    "form-item"
                  )
                ) {
                  var atributo = input_value
                    .getAttribute("value")
                    .split("")
                    .slice(0, 3)
                    .join("");
                  input_value.setAttribute("value", atributo);
                  second_check.closest(".form-type-checkbox").remove();
                  cont_field.classList.remove("disable-button");
                } else {
                  input_value.setAttribute("value", "");
                  second_check.closest(".form-type-checkbox").remove();
                  cont_field.classList.remove("disable-button");
                }
              });
            }
          });
        }
    };
}

export default behaviors;