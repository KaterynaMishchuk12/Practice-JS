/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const button = document.querySelector("#swapButton");

const input1 = document.querySelector("#leftSwapInput");

const input2 = document.querySelector("#rightSwapInput");

// console.log(button);

console.dir(input1);

// console.log(input2);

button.addEventListener("click", onClick);

function onClick(event) {
  const input1Value = input1.value;
  const input2Value = input2.value;

  input1.value = input2Value;
  input2.value = input1Value;
}
