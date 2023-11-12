/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/


const button = document.querySelector("#passwordButton")
const input = document.querySelector("#passwordInput")

button.addEventListener("click", eventHandler)
function eventHandler(){
    const inputAttribute = input.getAttribute("type")
    console.log(inputAttribute);
    if (inputAttribute === "text") {
        input.setAttribute("type", "password")
button.textContent = "Розкрити"
    } else {
        input.setAttribute("type", "text")
        button.textContent = "Приховати"
    }
}