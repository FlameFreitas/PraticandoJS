//Clousures


function retorna(nome) {
    const nome = 'Hugo'
    return function () {
        return nome
    }
}

const funcao1 = retorna('Hugo')
const funcao2 = retorna('Rizzo')

console.log(funcao1)
console.log(funcao2)

