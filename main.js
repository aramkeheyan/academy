// N1
// const table = document.querySelector(".table")
// for (const i = 0; i < table.rows.length; i++) {
//     table.rows[i].cells[i].style.backgroundColor = "red"
// }

//N2
// for (const li of document.querySelectorAll('li')) {
//     console.log(li.firstChild.textContent,  li.getElementsByTagName("li").length)
// }

//N3
// const elem = document.querySelector("[data-widget-name]")
// console.log(elem.dataset.widgetName)

//N4
// const elem = document.querySelectorAll("a")
// for (const a of elem) {
//     if(a.innerText.includes("://")) a.style.color = "orange"
// }

//N5
// function clear(elem) {
//     elem.innerHTML = '';
// }
// clear(document.querySelector("#elem"))

//N6
const ul = document.createElement("ul")
document.body.append(ul)
while(true){
    const inputData = prompt("type")
    if(!inputData) break

    const li = document.createElement("li")
    li.textContent = inputData
    ul.append(li)
}