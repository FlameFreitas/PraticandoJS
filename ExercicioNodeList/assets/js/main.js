const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll('p')

const bkColorBd = getComputedStyle(document.body)

const bkColor = bkColorBd.backgroundColor

console.log(bkColor)

let i

for (i of ps) {

    i.style.backgroundColor = bkColor
    i.style.color = "White  "
}