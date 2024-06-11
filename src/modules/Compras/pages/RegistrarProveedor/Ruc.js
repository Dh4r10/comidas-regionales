document.addEventListener("DOMContentLoaded", function () {
  const naturalInput = document.getElementById("natural");
  const juridicaInput = document.getElementById("juridica");

  function initializeRUCInput(input) {
    const prefix = input.getAttribute("data-prefix");
    input.value = prefix;

    input.addEventListener("input", function (event) {
      if (!input.value.startsWith(prefix)) {
        input.value = prefix;
      }
    });

    input.addEventListener("keydown", function (event) {
      if (
        input.selectionStart < prefix.length &&
        (event.key === "Backspace" || event.key === "Delete")
      ) {
        event.preventDefault();
      }
    });
  }

  if (naturalInput) {
    initializeRUCInput(naturalInput);
  }

  if (juridicaInput) {
    initializeRUCInput(juridicaInput);
  }
});
