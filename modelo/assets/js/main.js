const form = document.querySelector('#formulario')

form.addEventListener('submit', function(event){
event.preventDefault()

const  inPeso = event.target.querySelector('#peso')
const  inAltura = event.target.querySelector('#altura')

const peso = Number(inPeso.value)
const altura = Number(inAltura.value)

if (!peso){
    Result('Peso Inválido', false)
}

if(!altura){
    Result('Altura Inválida', false)
}


const imc = getImc(peso, altura);
const nivelImc = getNivelImc(imc);

const msg = `Seu IMC é ${imc} (${nivelImc}).`;

setResultado(msg, true);
});

function getNivelImc (imc) {
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

if (imc >= 39.9) return nivel[5];
if (imc >= 34.9) return nivel[4];
if (imc >= 29.9) return nivel[3];
if (imc >= 24.9) return nivel[2];
if (imc >= 18.5) return nivel[1];
if (imc < 18.5) return nivel[0];
}

function getImc (peso, altura) {
const imc = peso / altura ** 2;
return imc.toFixed(2);
}

function createP(){
    const p = document.createElement('p')
return p

}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    
    const p = createP()

    if(isValid) {
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }


    p.innerHTML = msg
    resultado.appendChild(p)

    

//    resultado.innerHTML = `<p>${}</p>`

}
