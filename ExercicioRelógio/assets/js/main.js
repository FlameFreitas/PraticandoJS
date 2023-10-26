const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')


let tempoDecorrido = 0;
let intervalId;

function atualizarTimer() {
    tempoDecorrido++;
    document.querySelector('.relogio').textContent = `Tempo decorrido: ${tempoDecorrido} segundos`;
}

document.querySelector('.iniciar').addEventListener("click", function () {
    intervalId = setInterval(atualizarTimer, 1000);
    document.querySelector('.inicia').disabled = true;
    document.querySelector('.pausar').disabled = false;
    document.querySelector('.zerar').disabled = false;
});

document.querySelector('.pausar').addEventListener("click", function () {
    clearInterval(intervalId);
    document.querySelector('.iniciar').disabled = false;
    document.querySelector('.pausar').disabled = true;
});

document.querySelector('.zerar').addEventListener("click", function () {
    clearInterval(intervalId);
    tempoDecorrido = 0;
    document.querySelector('.relogio').textContent = "Tempo decorrido: 0 segundos";
    document.querySelector('.iniciar').disabled = false;
    document.querySelector('.pausar').disabled

})