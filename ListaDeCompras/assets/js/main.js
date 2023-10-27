const inputTarefa = document.querySelector('.input-tarefa')
const buttonWork = document.querySelector('.add-work')
const listWorks = document.querySelector('.works')

function criaLi() {
    const li = document.createElement('li')
    return li
}

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        console.log('Enter press')
        if (!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

function clearInput() {
    inputTarefa.value = ''
    inputTarefa.focus()

}

function createDeleteButton(li) {
    li.innerText += ''
    const buttonDelete = document.createElement('button')
    buttonDelete.innerText = 'Delete'
    li.appendChild(buttonDelete)
    buttonDelete.setAttribute('class', 'delete')
    buttonDelete.setAttribute('title', 'deleteThisWork')
    li.appendChild(buttonDelete)
}

function criaTarefa(textInput) {
    const li = criaLi()
    li.innerText = textInput
    listWorks.appendChild(li)
    clearInput()
    createDeleteButton(li)
    saveWork()
}


buttonWork.addEventListener('click', function (e) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})


document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('delete')) {
        el.parentElement.remove()
    }

})

function saveWork() {
    const liWork = listWorks.querySelectorAll('li')
    const listOfWorks = []

    let work
    for (work of liWork) {
        let workText = work.innerText
        workText = workText.replace('Delete', '').trim()
        console.log(workText)
        listOfWorks.push(workText)
    }

    const workJSON = JSON.stringfy(listOfWorks)
    localStorage.setItem('works', workJSON)

}
