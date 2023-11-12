/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення
 (дивіться на елементи в html-розмітці)
*/

const button = document.querySelector("#alertButton");
console.log(button);
const input = document.querySelector("#alertInput");

const buttonClickHandler = (event) => {
  if (!input.value.trim()) {
    return alert(`Please fill in the form`);
  }
  alert(input.value);
};
button.addEventListener("click", buttonClickHandler);
