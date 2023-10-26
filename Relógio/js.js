const cont = document.querySelector('cont')

function datas() {
    const data = new Date()
    data.toLocaleDateString('pt-BR', {
        hour12: false
    })
}

function contTime(event) {
    cont.innerHTML = datas

}


