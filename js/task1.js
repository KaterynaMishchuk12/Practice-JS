//  Використовуючи функцію if...else,
//   *? напишіть код, який запитуватиме:
//   *? "Яка офіційна назва JavaScript?"
//   *? Якщо користувач вводить "ECMAScript",
//   *? то показати через alert: "Вірно!"
//   *? інакше відобразити:"Не знаєте? ECMAScript!"

// const message = prompt("Яка офіційна назва JavaScript?");

// const CORR_ANSW = "ECMAScript";
// // if (message === CORR_ANSW) {
// //   alert("Вірно!");
// // } else {
// //   alert("Не знаєте? ECMAScript!");
// // }

// message === CORR_ANSW ? alert("Вірно!") : alert("Не знаєте? ECMAScript!")


// task 2
//  *? Напишіть програму, яка отримає від користувача
//   *? число (кількість хвилин) та виведе в консоль
//   *? рядок у форматі годин та хвилин
//  *?      https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
//  *?      70 === 01:10

// const value = 70;

// const hour = Math.floor(value / 60);
// const modifyHour = String(hour).padStart(2,0);
// console.log(hour);

// const minutes = value % 60;
// const modminutes = String(minutes).padStart(2,0);

// console.log(`${modifyHour} : ${modminutes}`);


// Task 3 - need to do and solve!!!!!!!!
//  *? Напишіть цикл, який виводить у консоль
//   *? числа від max до min за спаданням
// const max = 50;
// const min = 23;
// let totalSum = 0;
//  for(let i = max; i >= min; i -= 1) {
//     if(i % 2 === 0){
//         sum += i;
        
//     }
//     console.log(i);
//  }
//  console.log(sum);


// task 4

// *? Дано рядок, що складається із символів, наприклад, 'abcde'.
//   *? Перевірте, що першим символом цього рядка є буква 'a'.
//   *? Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = 'abcde';
// function letterCheck(letter, letterNumber) {
// // const array = string.split('');
// // if(array[0] === 'a'){
// //     return 'yes'
// // } else {'No'}
// // }
// console.log(string.charAt(0));
// if(string.charAt(letterNumber) === 'a') {
//     return 'yes';
// } else {
//     'no';
// }
// }
// console.log(letterCheck(string, 'a'));

// Task 5

/**
  *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
  *? розгорнути масив,
  *? вирізати foo,
  *? перевести його в рядок розділений пробілами
  */

  const arr = ['BEST', 'the', 'foo', 'is', 'JS' ];
  arr.reverse();
  arr.splice(arr.indexOf('foo'), 1);
  

  const result = arr.join(' ');
  console.log(result);