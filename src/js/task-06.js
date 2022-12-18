const valueInput = document.querySelector("#validation-input");
valueInput.addEventListener("blur", onInputNumSymbols);

function onInputNumSymbols(event) {
  if (
    event.currentTarget.value.length == valueInput.getAttribute("data-length")
  ) {
    valueInput.classList.add("valid");
    valueInput.classList.remove("invalid");
  } else {
    valueInput.classList.add("invalid");
    valueInput.classList.remove("valid");
  }
}
