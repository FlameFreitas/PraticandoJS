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


const imprimirTodosOsDados = document.getElementById("imprimirTodosOsDados")

var imprimirDados = window.localStorage.getItem('dados')

imprimirTodosOsDados.addEventListener("click", function () {
    console.log(window.localStorage.getItem('dados'));


})



