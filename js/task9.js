/**
 *? З об'єкту concerts потрібно отримати масив
 *? в якому будуть лише імена міст.
 *? З масиву потрібно прибрати міста, в яких концерт уже пройшов і
 *? відсортувати їх у хронологічному порядку.
 *? Результат вивести у консоль.
 *? Очікуваний результат ["Умань", "Харків", "Одеса"]
 */
 const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2023-11-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2023-11-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2023-11-10"),
  };
function concetsNaw(param) {
 return Object.keys(param).filter((city) => param[city] > new Date()).sort((a, b) => param[a] - param[b]);

 
}


console.log(concetsNaw(concerts))