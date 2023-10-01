//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10

const value = 65;

const hour = Math.floor(value / 60);
const modifyHour = String(hour).padStart(2,0);

const minutes = value % 60;
const modifyMinutes = String(minutes).padStart(2,0);

console.log(`${modifyHour}:${modifyMinutes}`);