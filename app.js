"use strict";
let number = 0;

window.addEventListener("load", start);

function start() {
  document
    .querySelector("#btn-increment")
    .addEventListener("click", incrementnumber);
  document
    .querySelector("#btn-decrement")
    .addEventListener("click", decrementnumber);
}

function incrementnumber() {
  console.log("plus-knap");
  console.log(number);
  number = number + 1;
  console.log(number);
  displayNumber();
}
function decrementnumber() {
  console.log("minus-knap");
  console.log(number);
  number = number - 1;
  console.log(number);
  displayNumber();
}
function displayNumber() {
  console.log("displayNumber");
  document.querySelector("#number").textContent = number;
}
