const cont = document.querySelector('.cont')

function datas() {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
    cont.textContent = hora
}

setInterval(datas, 1000)

datas()