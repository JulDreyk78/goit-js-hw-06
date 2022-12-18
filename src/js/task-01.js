// Для кожного элемента li.item у списку ul#categories, знайде і
//  виведе в консоль текст заголовку елемента (тегу <h2>) і
//  кількість елементів в категорії (усіх <li>, вкладених в нього).

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const elemOfUl = document.querySelector("#categories");

const listWithUl = elemOfUl.querySelectorAll("ul");
console.log("Number of categories:", listWithUl.length);

// --------------------------------

const item = document.querySelectorAll(".item");

const titleElem = document.querySelectorAll("h2");

// const elemLiOfItem = document.querySelectorAll("li");
// console.log(elemLiOfItem);

console.log(titleElem);
