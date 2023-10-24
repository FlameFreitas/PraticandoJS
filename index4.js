
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




