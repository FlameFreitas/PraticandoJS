const numero1 = parseFloat(document.getElementById("numero1").value)
const numero2 = parseFloat(document.getElementById("numero2").value)
const operacao = document.getElementById("operacao").value
const resultado = document.getElementById("resultado")


function calculo() {

    var result

    if (operacao == "+") {
        result = numero1 + numero2;
    } else if (operacao == "-") {
        result = numero1 - numero2
    } else if (operacao == "/") {
        result = numero1 / numero2
    } else if (operacao == "*") {
        result = numero1 * numero2
    }

}

function resultadoFinal() {

    calculo()
    resultado.innerHTML += result
}


