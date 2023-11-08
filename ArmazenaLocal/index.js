const enviaDados = document.getElementById("enviaDados");

enviaDados.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const idade = document.getElementById("idade").value;
    const CPF = document.getElementById("CPF").value;

    //Vamos verificar se os dados estão preencidos

    if (!nome || !sobrenome || !idade || !CPF) {

        alert("Por favor preencha todos os campos fornecidos");
        return;
    };

    const dados = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        CPF: CPF
    };

    try {
        localStorage.setItem("Dados armazenados", JSON.stringify(dados));
        alert("Dados armazenados com sucesso");
    } catch (error) {
        alert("Ocorreu um erro ao salvar os dados. Tente novamente.");
    }
});




var imprimirItens = localStorage.getItem(dados);

const imprimirTodosOsDados = document.getElementById("imprimirTodosOsDados")

formulario.addEventListener("click", function (event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const idade = document.getElementById("idade").value;
    const CPF = document.getElementById("CPF").value;

    const p = document.createElement("p")
    p.innerHTML += `<p>Nome: ${nome}</p> <p>Sobrenome: ${sobrenome}</p> <p>Idade: ${idade}</p> <p>Idade: ${CPF}</p>`

    container.appendChild(p)

})





