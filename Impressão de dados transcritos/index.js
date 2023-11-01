const container = document.getElementById("container")
const formulario = document.getElementById("formulario")

const dados = document.getElementById("submit").value






formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const idade = document.getElementById("idade").idade

    const p = document.createElement("p")
    p.textContent = `Nome: ${nome}, Sobrenome: ${sobrenome}, Idade: ${idade}`

    container.appendChild(p)

})


