
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
    }




})






