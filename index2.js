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

    }else if(resultado == 1 || resultado == 7){

        alert('Você descobriu o código secreto!!!! You Are a Hacker, Please click in Ok!'),
        alert('Você não devia ter clicado em Ok...')

        var barraDeCarregamento = document.createElement("div");
        barraDeCarregamento.className = "barra-de-carregamento";
        document.body.appendChild(barraDeCarregamento);

        // Após um atraso (simulando um processo de carregamento), remova a barra de carregamento
        setTimeout(function() {
            document.body.removeChild(barraDeCarregamento);
            alert("Virús aplicado com sucesso, agora você esta sendo observado....");
        }, 5000); // 2000 milissegundos (2 segundos) como exemplo de tempo de carregamento            
        
    }else{
        alert('Você infelizmente não possui dinheiro suficiente para comprar esta placa de video ;-;')
    }

})






