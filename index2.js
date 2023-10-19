// operadores lógicos
// < menor que
// > maior que
// >= maior ou igual que
// <= menor ou igual que
// == igualdade (valor)
// === igualdade estrita (valor e tipo)
// != diferente
// !== diferente estrito (valor e tipo)

const v1 = 10
const v2 = '10'


console.log('10 > 5', 10 > 5)
console.log('10 < 5', 10 < 5)
console.log('10 >= 10', 10 >= 10)
console.log('10 <= 11', 10 <= 11)
console.log('10 == 11', 10 == 11)
console.log('v1 == v2',v1 == v2)
console.log('v1 === v2',v1 === v2)
console.log('v1 != v2',v1 != v2)
console.log('v1 !== v2',v1 !== v2)

// tornando false em true e true em false

console.log('5 > 10', 5 > 10)
console.log('5 < 10', 5 < 10)
console.log('9 >= 10', 9 >= 10)
console.log('12 <= 11', 12 <= 11)
console.log('11 == 11', 11 == 11)
/*
Operadores lógicos
&& -> AND (TODAS DEVEM SER VERDADEIRAS)
|| -> OR (UMA DAS EXPRESSÕES DEVEM SER VERDADEIRAS)
! -> NOT
*/

console.log (5 > 10 && 10 < 5)
console.log (5>= 10 || 10 === 10)
console.log (!!true)




// Desenvolver um exercicio para checar se tem dinheiro para comprar uma 4090

//Exercicio

var botao = document.getElementById("btnComprar");

botao.addEventListener("click", function(){
    var resultado = window.prompt("Digite seu valor em Reais")

    resultado = parseFloat(resultado)

    if(resultado >= 13698){
        alert('Você possui dinheiro suficiente para comprar esta placa de video!!!!')
    }else{
        alert('Você infelizmente não possui dinheiro suficiente para comprar esta placa de video ;-;')

    }

})





