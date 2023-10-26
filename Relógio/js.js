const relogio = document.querySelector('.cont')

const data = new Date()

function contTime(event) {
    relogio.innerHTML = data.toLocaleDateString('pt-BR', {
        hour12: false,
    })

}


