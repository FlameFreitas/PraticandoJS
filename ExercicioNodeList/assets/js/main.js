const form = document.querySelector('#formulario')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const  inPeso = event.target.querySelector('#peso')
    const  inAltura = event.target.querySelector('#altura')

    const peso = Number(inPeso.value)
    const altura = Number(inAltura.value)

})

function setResultado (peso, altura){
const resultado = document.querySelector('#resultado')

calculoImc = peso/ altura ** 2
resultado.toFixed(2);

const p = createP()

if(calculoImc >= 39.9){
    resultado.innerHTML += 'Abaixo do peso'
}else if(calculoImc >= 34.9){
    resultado.innerHTML += 'Peso normal'
}else if(calculoImc >= 29.9){
    resultado.innerHTML += 'Peso normal'
}else if(calculoImc >= 24.9){
    resultado.innerHTML += 'Peso normal'
}else if(calculoImc < 18.5){
    resultado.innerHTML += 'Peso normal'
}else{
    resultado.innerHTML += 'Resultado inválido'
}

if(isValid) {
    p.classList.add('paragrafo-resultado')
}else{
    p.classList.add('bad')
}

resultado.appendChild(p)
}


function createP(){
    const p = document.createElement('p')
return p
}