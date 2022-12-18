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

// const item = document.querySelectorAll(".item");

// const titleElem = document.querySelectorAll("h2");

// const elemLiOfItem = document.querySelectorAll("li");
// console.log(elemLiOfItem);

// console.log(titleElem);

// ("use strict");----------------------------------

const itemsRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsRef.length}`);

//example-1
console.log("Example-1");
for (let i = 0; i < itemsRef.length; i += 1) {
  console.log(
    `Category: ${itemsRef[i].children[0].textContent}\nElements: ${itemsRef[i].children[1].children.length}`
  );
}

//example-2
console.log("Example-2");
itemsRef.forEach((item) => {
  console.log(
    `Category: ${item.children[0].textContent}\nElements: ${item.children[1].children.length}`
  );
});

//example-3
console.log("Example-3");
itemsRef.forEach((item) => {
  console.log(
    `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
  );
});
