const numero1 = parseFloat(document.getElementById("numero1").value);
const numero2 = parseFloat(document.getElementById("numero2").value);
const operacao = document.getElementById("operacao").value;
const resultado = document.getElementById("resultado");

function calculo() {
    var result;

    if (operacao === "+") {
        result = numero1 + numero2;
    } else if (operacao === "-") {
        result = numero1 - numero2;
    } else if (operacao === "/") {
        result = numero1 / numero2;
    } else if (operacao === "*") {
        result = numero1 * numero2;
    } else {
        // Lidar com operação inválida ou não selecionada
        result = "Operação inválida ou não selecionada";
    }

    return result;
}

function resultadoFinal() {
    const result = calculo();

    // Verificar se o resultado não é uma mensagem de erro

    if (typeof result === "number") {
        resultado.innerHTML = "Resultado: " + result;
    } else {
        // Exibir mensagem de erro
        resultado.innerHTML = result;
    }
}
