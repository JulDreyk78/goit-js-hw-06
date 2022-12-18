const elemInput = document.querySelector("#font-size-control");
const elemSpan = document.querySelector("#text");

elemInput.addEventListener("input", changeFontSizeText);

function changeFontSizeText(evt) {
  console.log(evt.currentTarget);

  elemSpan.style.fontSize = ` ${evt.currentTarget.value}px`;
}
