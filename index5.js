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



function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando uma instancia válida')
    }
    if (!data) {
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })

}

try {
    const data = new Date('01-01-2000 20:20:19')
    const hora = retornaHora()
    console.log(hora)
} catch {
    console.log('Tratando erro...')
} finally {
    console.log('Tenha um excelente dia')
}




const message = "testanto output"

const outputElement = document.getElementById("output")

outputElement.innerHTML = message





