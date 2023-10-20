const form = document.querySelector('#formulario')

form.addEventListener('submit', function(event){
event.preventDefault()
const  inPeso = event.target.querySelector('#peso')
const  inAltura = event.target.querySelector('#altura')

const peso = Number(inPeso.value)
const altura = Number(inAltura.value)

if (!peso){
    result('Peso Inválido', false)
}

if(!altura){
    result('Altura Inválida', false)
}

})

function createP(){
    const p = document.createElement('p')
return p

}


function Result(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = createP()


//    resultado.innerHTML = `<p>${}</p>`

}
