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

for (i = 1; i<=9; i++){
    console.log(i)
}

// parseInt (trabalha com valores inteiror), parseFloat(trabalha com casas decimais), Number, qualquer numero

const num3 = 15
const num4 = parseInt('5')

console.log(num3 + num4)
console.log(typeof num3)

const num5 = parseFloat('5.5')

console.log(num3 + num5)

const num6 = Number ('4.4')

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

let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)






