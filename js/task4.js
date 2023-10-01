// *? Дано рядок, що складається із символів, наприклад, 'abcde'.
//   *? Перевірте, що першим символом цього рядка є буква 'a'.
//   *? Якщо це так - виведіть 'так', інакше виведіть 'ні'.

const string = "abcde";
function letterCheck(string, letterNumber) {
  //  const arr = string.split('')
  //  console.log(arr)
  //  if (arr[0] === 'a') {
  // return "Так";
  //  } else { return 'Ні'
  // }
  // }

  console.log(string.charAt(0));
  if (string.charAt(letterNumber) === "a") {
    return "Так";
  } else {
    return "Ні";
  }
}
console.log(letterCheck(string, 2));
