console.log('Meu nome é "Hugo". Estou aprendendo JavaScript às', 10, 'da manhã')

let nome;
nome = 'Cleiton';
nomeEmpresa = 'ifood';
cargoNovo = 'programação'
empresaNova = 'Nvidia'

console.log(nome, 'trabalha como entregador, na empresa', nomeEmpresa, 'mas recentemente ele esta querendo aprimorar seus conhecimentos para', cargoNovo, 'e entrar na empresa', empresaNova, 'para ter uma melhor qualidade de vida');


//------------------------------------------------

const primeiroNumero = 5
const segundoNumero = 15

const conta1 = primeiroNumero * segundoNumero;
const conta2 = primeiroNumero + segundoNumero;
const conta3 = primeiroNumero - segundoNumero;
const conta4 = primeiroNumero / segundoNumero;

console.log(conta1, conta2, conta3, conta4)


//Exercicio

const nome1 = 'Hugo'
const sobrenome = 'Rizzo'
const idade = 30
const peso = 84
const altura = 1.80

let imc

indiceDeMassaCorporal = 84 / (altura * altura);

console.log(indiceDeMassaCorporal)

let anoNascimento

anoNascimento = (2023 - idade)

console.log(anoNascimento)


console.log(nome1, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem', altura, 'de altura e seu IMC é de', indiceDeMassaCorporal)
console.log(nome, 'nasceu em', anoNascimento, '.')

//template strings

console.log(`${nome1} ${sobrenome} tem ${idade} anos pesa ${peso} kg`)

const num1 = 10
const num2 = 3

console.log(num1 ** num2) //potenciação

console.log(num1 % num2) //resto de divisão


//incremento/decremento
var i

for (i = 1; i <= 9; i++) {
    console.log(i)
}

// parseInt (trabalha com valores inteiror), parseFloat(trabalha com casas decimais), Number, qualquer numero

const num3 = 15
const num4 = parseInt('5')

console.log(num3 + num4)
console.log(typeof num3)

const num5 = parseFloat('5.5')

console.log(num3 + num5)

const num6 = Number('4.4')

console.log(num3 + num6)


//alert('Testando o "Alert"')

//window.confirm('Tem certeza que deseja sair da pagina?')

//window.prompt('Digite seu nome:')

//-------Exercicio-------

// let num7 = window.prompt('Digite um numero')
// let num8 = window.prompt('Digite outro numero')

// num7 = parseFloat(num7)
// num8 = parseFloat(num8)

// const resultado = num7 + num8

//alert ('O resultado foi:' + resultado);


//-----Exercicio2-----

// let varA = 'A' //B
// let varB = 'B' //C
// let varC = 'C' //A

// [varA, varB, varC] = [varB, varC, varA]

// console.log(varA, varB, varC)



//               01234567
let umaString = "Um texto"

//ver localidade especifica
console.log(umaString[5])

//trocar letras
console.log(umaString.replace(/t/g, 'r'))


//ver tamanho da string
console.log(umaString.length)

//fatear parte do texto
console.log(umaString.slice(3, 8))


//Começa a contar da frente para tras
console.log(umaString.slice(-3))

//começa a contar de tras para frente
console.log(umaString.slice(4))

//Letras maiusculas
console.log(umaString.toUpperCase)

//Letras minusculas
console.log(umaString.toLowerCase)

let num8 = 82.5789989019
let num9 = 2.5

//Concatenação
//console.log(num8.toString() + num9)

//Converter variavel para String
//num8 = num8.toString()

//Apresentar numeros binários
//console.log(num8.toString(2))

//Arredondar casas decimais de numeros grandes, (o numero dentro do parenteses é o numero de casas decimais)
console.log(num8.toFixed(2))

//informar se é um valor inteiro ou não (true or false)
console.log(Number.isInteger(num8))

//Verificar se é NaN
temp = num8 * 'Hello'
console.log(Number.isNaN(temp))


let num10 = 9.45589

//Arredonda o numero para baixo
// let num11 = Math.floor(num10)

//Arredonda o numero para cima
// let num11 = Math.ceil(num10)

//Arredonda para o mais proximo
// let num11 = Math.round(num10)

// console.log(num11)


//Pegar o maior numero da sequencia
console.log(Math.max(1, 4, 5, 8000, -50000, 20, -30, -19, -40))

//Pegar o menor numero da sequencia
console.log(Math.min(1, 4, 5, 8000, -50000, 20, -30, -19, -40))

//Gerar numero aleatório
console.log(Math.random())


//Exercicio index
// const numero = prompt ('Digite um numero:')
// const numeroTItulo = document.getElementById('numero-titulo')
// const TextoTitulo = document.getElementById('texto')
// const numeroInteiro = document.getElementById('numero-inteiro')

// numeroTItulo.innerHTML = numero



//Questões
// TextoTitulo.innerHTML = ''
// TextoTitulo.innerHTML += `<p> Raiz Quadrada: ${numero ** 0.5}.</p>`;
// TextoTitulo.innerHTML += `<p> O numero é inteiro?: ${Number.isInteger(numero)}.</p>`;
// TextoTitulo.innerHTML += `<p> é NaN?: ${Number.isNaN(numero)}.</p>`;
// TextoTitulo.innerHTML += `<p> Arredonda para baixo: ${Math.floor(numero)}.</p>`;
// TextoTitulo.innerHTML += `<p> Arredonda para cima: ${Math.ceil(numero)}.</p>`;
// TextoTitulo.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}.</p>`;


//Arrays

//Indices       0        1       2       3      (Similar a questão de indices anteriores, onde cada indice era uma letra)
const nomes = ['Luiza', 'Luiz', 'Hugo', 'Vitor']

console.log(nomes)

//Altera valor de Array de acordo com o indice
nomes[0] = 'Fernanda'

console.log(nomes)

//Adiciona Arrays no fim
nomes[nomes.length] = 'Fabiana'
nomes[nomes.length] = 'Fabiano'
nomes[nomes.length] = 'Maria'

console.log(nomes)

//Adiciona Arrays no fim
nomes.push('Luana')
nomes.push('Dione')

console.log(nomes)

//Adiciona Arrays no começo
nomes.unshift('Felipe')
nomes.unshift('Tais')

console.log(nomes)

//Remove o ultimo da lista
nomes.pop()

//Armazena o ultimo Array removido da lista

const removido1 = nomes.pop()

console.log(nomes)
console.log(removido1)

//Remove o primeiro indice
nomes.shift()

//Armazena o primeiro Array removido
const removido2 = nomes.shift()

console.log(nomes)
console.log(removido2)

//Deletar o valor de um indice especifico

delete nomes[1]

console.log(nomes)

//Fatear Arrays

console.log(nomes.slice(0, 3))

console.log(typeof nomes)
console.log(nomes instanceof Array)


//Funções

//Os valores de igualdade dentro do parenteses serão utilizados apenas se não houver atribuição de valores
//Os valores dentro da função não poderão ser alterados de fora da função

function soma(x = '"O primeiro valor não foi acrescentado"', y = ' "O segundo valor não foi acrescentado"'){
const resultado = x + y
return resultado
}

const resultado = soma(10, 10)

console.log(resultado)

//Objetos
//Obs.: "Chaves" são para objetos e "Colchetes" para Arrays

const pessoal = {
nome: 'Hugo',
sobrenome: 'Rizzo',
idade: 20
}

console.log(pessoal.nome)


function criaPessoa (nome, sobrenome, idade){
return{
nome,
sobrenome,
idade
}}

const pessoa1 = criaPessoa('Hugo', 'Rizzo', 20)
const pessoa2 = criaPessoa('Felipe', 'Rizzo', 25)
const pessoa3 = criaPessoa('Tais', 'Rizzo', 30)


console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade)

const pessoa4 = {
    nome: 'Hugo',
    sobrenome: 'Rizzo',
    idade: 20,

    fala(){
    console.log(`${this.nome} ${this.sobrenome} esta falando oi...`)
    console.log(`Ele tem ${this.idade} anos de idade`)
},

    incrementaIdade(){
        ++this.idade
    }
}

pessoa4.fala()
pessoa4.incrementaIdade()

    console.log(`após 1 ano ele tera ${pessoa4.idade}`)




    
//Exercicio 3

function formulario(){
    const form = document.querySelector('.form')
    const resultado1 = document.querySelector('.resultado')
    const pessoas = []

    function recebeEvendo(evento){
        evento.preventDefault();
        const nome2 = form.querySelector('.nomeFormulario')
        const sobrenome1 = form.querySelector('.sobrenomeFormulario')
        const idade1 = form.querySelector('.idadeFormulario')
        const altura1 = form.querySelector('.alturaFormulario')
    }

    pessoas.push({
        nome2: nome2.value,
        sobrenome1: sobrenome1.value,
        idade1: idade1.value,
        altura1: altura1.value
    })

    console.log(pessoas)
    resultado1.innerHTML += `<p>${nome2.value} ${sobrenome1.value}, ${idade1.value} ${altura1.value}</p>`

    form.addEventListener('submit', recebeEvendo())
}

formulario()

