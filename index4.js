
const teste = {

    nome: 'Hugo',
    sobrenome: 'Rizzo',
    idade: 20,
    endereco: {
        rua: 'valentim',
        numero: 222,
        bairro: 'Random'

    }
}

const { nome = 'Não existe', sobrenome, idade, endereco: { rua, numero, bairro }, endereco } = teste

console.log(nome, sobrenome, idade, endereco)

//------------------------------------------------------------------------------------------------------
const frutas = ['Pera', 'Maça', 'Banana', 'Mamão', 'Abacate', 'Abacaxi']

let i

// for (i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])

// }

for (i in frutas) {
    console.log(frutas[i])
}


const McLaren = {

    motor: '5.0 Biturbo',
    portas: 'Para cima',
    rodas: 'Cromadas',
    preço: 1000000,
    ano: 2024
}

let key

for (key in McLaren) {
    console.log(key, McLaren[key])
}

