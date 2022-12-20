// Напиши скрипт, який змінює кольори фону елемента <body> через
//  інлайн-стиль по кліку на button.change-color і виводить значення
//   кольору в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const span = document.querySelector('.color')
// const btn = document.querySelector('.change-color')

const refs = {
  span: document.querySelector(".color"),
  btn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

refs.btn.addEventListener("click", onChangeBackgroundColor);

function onChangeBackgroundColor() {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor;
}
// console.log(window);
