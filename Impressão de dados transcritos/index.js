const container = document.getElementById("container")

const nome = document.getElementById("nome").value
const sobrenome = document.getElementById("sobrenome").value
const idade = document.getElementById("idade").value

function p() {
    var p = document.createElement("p")
    return p
}

p().textContent = nome
p().textContent = sobrenome
p().textContent = idade


container.appendChild(p())



