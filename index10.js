//Clousures

function retorna(nome) {
    return function () {
        return nome;
    }
}

const funcao1 = retorna('Hugo');
const funcao2 = retorna('Rizzo');

console.dir(funcao1);
console.dir(funcao2);



