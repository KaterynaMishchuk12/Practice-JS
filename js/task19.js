// * ЗАВДАННЯ 4
//   * Кнопка increment повинна кожну секунду збільшувати значення на 1
// * Кнопка decrement повинна кожну секунду зменшувати значення на 1
// */
// let timer = null;
// const count = document.querySelector('.counter-value');
// const buttons = document.querySelectorAll('.counter-button');

const refs = {
  increment: document.querySelector("button[data-action ='increment']"),
  decrement: document.querySelector('button[data-action = "decrement"]'),
  text: document.querySelector(".counter-value"),
};

let timer = null;
let counter = 0;

refs.increment.addEventListener("click", onIncrementClick);
refs.decrement.addEventListener("click", onDecrementionClick);

function onIncrementClick() {
  clearInterval(timer);
  timer = setInterval(() => {
    counter += 1;
    refs.text.textContent = counter;
  }, 1000);
}

function onDecrementionClick() {
  clearInterval(timer);
  setInterval(() => {
    counter -= 1;
    refs.text.textContent = counter;
  }, 1000);
}
