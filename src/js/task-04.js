const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = Number(value.textContent);

console.log(btnDecrement);
console.log(btnIncrement);

btnDecrement.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

btnIncrement.addEventListener("click", plusClick);
function plusClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
