const inputTarefa = document.querySelector('.input-tarefa')
const buttonWork = document.querySelector('.add-work')
const listWorks = document.querySelector('.works')

function criaLi() {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) console.log('Enter press')
})

function criaTarefa(textInput) {
    const li = criaLi()
    li.innerText = textInput
    listWorks.appendChild(li)
}


buttonWork.addEventListener('click', function (e) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})



