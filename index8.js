// document.addEventListener("click", function () {
//     document.body.style.backgroundColor = 'red'
//     document.body.style.backgroundColor = 'green'
//     document.body.style.backgroundColor = 'blue'
//     document.body.style.backgroundColor = 'yellow'
//     document.body.style.backgroundColor = 'lightBlue'


// })


function multiplica(multipiicador) {
    //Recebe multiplicador
    return function (n) {
        return n * multipiicador
    }
}

const duplica = multiplica(2)
const triplica = multiplica(3)
const quadriplica = multiplica(4)

console.log(duplica(2))
console.log(triplica(3))
console.log(quadriplica(4))



