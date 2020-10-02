// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              form.checkValidity() === true;
              event.preventDefault();
              event.stopPropagation();
              swal
                .fire({
                  title:
                    "<h5><strong>¡Gracias por Pre-Registrarte, Eres Genial!</strong></h5>",
                  html:
                    '<p class="okfontsmall">Pronto empezarán los primeros sorteos, pero ¡TÚ YA GANASTE UN DESCUENTO! Tu primer boleto te costará 10% menos.Te enviaremos un correo de confirmación de tu pre-registro #SaltaHaciaTuSuerte</p>',
                  type: "success",
                  confirmButtonText: "Aceptar",
                })
                .then((result) => {
                  /* Read more about isConfirmed, isDenied below */
                  if (result.isConfirmed) {
                    window.location.reload();
                  }
                });
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
  //Only allow to enter numbers.
})();

miFormulario = document.getElementById("inputPhone");
miFormulario.addEventListener("keypress", function (e) {
  if (!soloNumeros(event)) {
    e.preventDefault();
  }
});

//Solo permite introducir numeros.
function soloNumeros(e) {
  var key = e.charCode;
  console.log(key);
  return key >= 48 && key <= 57;
}
