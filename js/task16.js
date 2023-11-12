/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const box = document.querySelector("#box");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");

decreaseBtn.addEventListener("click", onHandlerDecreaseBtn);
increaseBtn.addEventListener("click", onHandlerIncreaseBtn);
let boxWidth = parseInt(getComputedStyle(box).width);
let boxHeight = parseInt(getComputedStyle(box).height);
// console.log(boxHeight);

function onHandlerDecreaseBtn() {
  boxWidth -= 10;
  boxHeight -= 10;

  box.style.width = boxWidth + "px";
  box.style.height = boxHeight + "px";
}

function onHandlerIncreaseBtn() {
  boxWidth += 10;
  boxHeight += 10;

  box.style.width = boxWidth + "px";
  box.style.height = boxHeight + "px";
}
