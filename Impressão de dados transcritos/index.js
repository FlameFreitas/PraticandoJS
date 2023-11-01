const container = document.getElementById("container")
const formulario = document.getElementById("formulario")

const dados = document.getElementById("submit").value






formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const idade = document.getElementById("idade").idade

    const p = document.createElement("p")
    p.textContent = `<p>Nome: ${nome}</p> <p>Sobrenome: ${sobrenome}</p> <p>Idade: ${idade}</p>`
    p.textContent = `Sobrenome: ${sobrenome}`

    container.appendChild(p)

})


