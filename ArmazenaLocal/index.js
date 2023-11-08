const enviaDados = document.getElementById("enviaDados");

enviaDados.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const idade = document.getElementById("idade").value;
    const CPF = document.getElementById("CPF").value;

    // Verifique se todos os campos estão preenchidos
    if (!nome || !sobrenome || !idade || !CPF) {
        alert("Por favor, preencha todos os campos fornecidos");
        return;
    }

    // Recupere os dados existentes da localStorage (se houver)
    let dadosArmazenados = JSON.parse(localStorage.getItem("DadosArmazenados")) || [];

    // Crie um novo objeto de dados
    const novoDados = {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        CPF: CPF
    };

    // Adicione o novo conjunto de dados ao array
    dadosArmazenados.push(novoDados);

    // Salve o array atualizado na localStorage
    localStorage.setItem("DadosArmazenados", JSON.stringify(dadosArmazenados));

    alert("Dados armazenados com sucesso");
});
