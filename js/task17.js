/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

const outerCircle = document.querySelector(".outerCircle")
console.log(outerCircle)
outerCircle.addEventListener('click', moveCircle)
function moveCircle(event) {
    const item = event.currentTarget
    if (item.style.position === "absolute") {
    item.style.position = "static"
        window.removeEventListener("mousemove", onMouseMove)
        return
    } 
    item.style.position = "absolute"
    window.addEventListener("mousemove", onMouseMove)
}
function onMouseMove(event) {
    console.log(event)
    let left = event.pageX
    let top = event.pageY

    outerCircle.style.top = top-15 + "px"
    outerCircle.style.left = left-15 + "px"
    console.log(left)
    console.log(top)
}

