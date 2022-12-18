// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input), підставляє його поточне значення в span#name-output.
//  Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputName = document.querySelector("#name-input");
console.log(inputName);

const spanName = document.querySelector("#name-output");
console.log(spanName);

// inputName.textContent = "Anonymous";

inputName.addEventListener("input", changeSpanName);

function changeSpanName(event) {
  spanName.textContent =
    event.currentTarget.value.length !== 0
      ? event.currentTarget.value
      : "Anonymus";
}

// inputName.addEventListener("focus", onFocus);
// inputName.addEventListener("blur", offFocus);

// function onFocus() {
//   console.log("Є фокус");
// }
// function offFocus() {
//   console.log("Немає фокусу");
// }
