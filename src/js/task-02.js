const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addToUl = document.querySelector("#ingredients");

const li = ingredients.map((element) => {
  const creatLi = document.createElement("li");
  creatLi.classList.add("item");
  creatLi.textContent = element;
  return creatLi;
});

addToUl.append(...li);
console.log(addToUl);
