
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

console.log('----------------------------------------------')

const McLaren = {

    motor: '5.0 Biturbo',
    portas: 'Para cima',
    rodas: 'Cromadas',
    preço: 1000000,
    ano: 2024
}

const Bugatti = ['Bugatti:', 'Rodas Cromadas', 'Portas para cima', 'Motor 5.2 Biturbo', 'Preço: 1500000', 'Ano: 2024']

let key

//Retorna os indices

for (key in McLaren) {
    console.log(key, McLaren[key])
}

console.log('----------------------------------------------')

// Retorna os valores

let y

for (y of Bugatti) {
    console.log(y)

}

console.log('----------------------------------------------')

Bugatti.forEach(function (valores, indices, array) {
    console.log(valores, indices, array)

})


