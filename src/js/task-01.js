const elemOfUl = document.querySelector("ul");

const listWithUl = elemOfUl.querySelectorAll("ul");
console.log("Number of categories:", listWithUl.length);

const titleAnimals = document.querySelector(".title-animals");
console.log("Category:", titleAnimals.textContent);

const listAnimals = document.querySelector(".list-animals");

const liAnimals = listAnimals.querySelectorAll(".list__item-animals");
console.log("Elements:", liAnimals.length);

const titleProducts = document.querySelector(".title-products");
console.log("Category:", titleProducts.textContent);

const listProducts = document.querySelector(".list-products");

const liProducts = listProducts.querySelectorAll(".list__item-products");
console.log("Elements:", liProducts.length);

const titleTech = document.querySelector(".title-technologies");
console.log("Category:", titleTech.textContent);

const listTech = document.querySelector(".list-technologies");

const liTech = listTech.querySelectorAll(".list__item-technologies");
console.log("Elements:", liTech.length);
