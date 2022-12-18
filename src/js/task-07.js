// Напиши скрипт, який реагує на зміну значення input#font-size-control
//  (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість
//   font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір
//   тексту.

const elemInput = document.querySelector("#font-size-control");
const elemSpan = document.querySelector("#text");

elemInput.addEventListener("input", changeFontSizeText);

function changeFontSizeText(evt) {
  console.log(evt.currentTarget);

  elemSpan.style.fontSize = ` ${evt.currentTarget.value}px`;
}
