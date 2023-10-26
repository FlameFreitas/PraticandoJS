function mostrarHora() {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })

}

const Timer = setInterval(() => {
    console.log(mostrarHora())
}, 1000);


setTimeout(() => {
    clearInterval(Timer)
}, 3000);

setTimeout(() => {
    console.log('Stop')
}, 5000);


