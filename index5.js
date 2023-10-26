//Laços While

let o = 0

while (o <= 2) {
    console.log(o)
    o++
}



//-----------------------------------

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 80

let rand = random(min, max)

while (rand !== 50) {
    rand = random(min, max)
    console.log(rand)
}


do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10)


function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Ambos os valores devem ser numeros')
    }
    return x + y
}



try {
    //Executada quando não há erros
    console.log(soma(1, 2))
    console.log(soma('2', 4))

} catch (error) {
    //Executada quando há erros
    console.log(error)

}



