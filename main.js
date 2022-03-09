// N1
// const changeBgColor = () => {
//     const table = document.querySelector(".table")
//     for (const i = 0; i < table.rows.length; i++) {
//         table.rows[i].cells[i].style.backgroundColor = "red"
//     }
// }

// N2
// const countElems = () => {
//     for (const li of document.querySelectorAll('li')) {
//         console.log(li.firstChild.textContent, li.getElementsByTagName("li").length)
//     }
// }

// N3
// const getElemData = () => {
//     const elem = document.querySelector("[data-widget-name]")
//     console.log(elem.dataset.widgetName)
// }

// N4
// const changeLinkColor = () => {
//     const elem = document.querySelectorAll("a")
//     for (const a of elem) {
//         if (a.innerText.includes("://")) a.style.color = "orange"
//     }
// }
//
// N5
// function clear(elem) {
//     elem.innerHTML = '';
// }
// clear(document.querySelector("#elem"))

//N6
// const createList = () => {
//     const ul = document.createElement("ul")
//     document.body.append(ul)
//     while (true) {
//         const inputData = prompt("type")
//         if (!inputData) break
//
//         const li = document.createElement("li")
//         li.textContent = inputData
//         ul.append(li)
//     }
// }

//N7
// function createTree(container, obj) {
//     container.innerHTML = createTreeText(obj);
// }
// function createTreeText(obj) {
//     let li = '';
//     let ul;
//     for (let key in obj) {
//         li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//     }
//     if (li) {
//         ul = '<ul>' + li + '</ul>'
//     }
//     return ul || '';
// }
//N8
// function getLiCount(){
//     const lis = document.getElementsByTagName('li');
//
//     for (const li of lis) {
//         let descendantsCount = li.getElementsByTagName('li').length;
//         if (!descendantsCount) continue;
//
//         li.firstChild.data += ' [' + descendantsCount + ']';
//     }
// }

//N9
// function updateTime(){
//     const clock = document.getElementById("clock")
//     const date = new Date()
//
//     const hours = date.getHours()
//     clock.firstElementChild.innerHTML = hours.toString()
//
//     const minutes = date.getMinutes()
//     clock.children[1].innerHTML = minutes.toString()
//
//     const seconds = date.getSeconds()
//     clock.lastElementChild.innerHTML = seconds.toString()
// }
//
// function startClock(){
//     setInterval(updateTime, 1000)
// }
// startClock()

// N10
// function insertLi(){
//     const li = document.getElementById("one")
//     const newLi1 = document.createElement("li")
//     newLi1.innerText = "2"
//     li.after(newLi1)
//
//     const newLi2 = document.createElement("li")
//     newLi2.innerText = "3"
//     newLi1.after(newLi2)
//
// }
// insertLi()