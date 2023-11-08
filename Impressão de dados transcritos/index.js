const container = document.getElementById("container")
const formulario = document.getElementById("formulario")

const dados = document.getElementById("submit").value

formulario.addEventListener("submit", function (event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const sobrenome = document.getElementById("sobrenome").value
    const idade = document.getElementById("idade").value

    const p = document.createElement("p")
    p.innerHTML += `<p>Nome: ${nome}</p> <p>Sobrenome: ${sobrenome}</p> <p>Idade: ${idade}</p>`


    //botão Editar
    const btnEditar = document.createElement("button")
    btnEditar.addEventListener("click", function () {
        const novoForm = document.createElement("form")

        const novoInputNome = document.createElement("input")
        novoInputNome.value = nome
        novoForm.appendChild(novoInputNome)


        const novoInputSobrenome = document.createElement("input")
        novoInputNome.value = sobrenome
        novoForm.appendChild = (novoInputSobrenome)

        const novoInputIdade = document.createElement("input")
        novoInputIdade.value = idade
        novoForm.appendChild = (novoInputIdade)

        const btnSalvar = document.createElement("button")
        btnSalvar.textContent = "Salvar Dados"
        btnSalvar.addEventListener("click", function () {


        })

        novoForm.appendChild(btnSalvar)

        container.replaceChild(novoForm, p)

    })

    //Botão excluir
    const btnDelete = document.createElement("button")
    btnDelete.textContent = "Excluir Dados"
    btnDelete.addEventListener("click", function () {
        container.removeChild(p)

    })


    p.appendChild(btnEditar)
    p.appendChild(btnDelete)
    container.appendChild(p)

})


