const imprimirTodosOsDados = document.getElementById("imprimirTodosOsDados");
const cpfInput = document.getElementById("cpfInput");

imprimirTodosOsDados.addEventListener("click", function () {
    const imprimirItens = localStorage.getItem("DadosArmazenados");

    if (imprimirItens) {
        // Parse dos dados JSON armazenados na localStorage
        const dados = JSON.parse(imprimirItens);

        const container = document.getElementById("dadosContainer");
        const cpfBuscado = cpfInput.value;

        // Limpe o container antes de adicionar os novos dados
        container.innerHTML = "";

        // Filtra os dados com base no CPF inserido
        const dadosFiltrados = dados.filter((item) => item.CPF === cpfBuscado);

        if (dadosFiltrados.length > 0) {
            dadosFiltrados.forEach((item, index) => {
                const p = document.createElement("p");

                const nomeElement = document.createElement("p");
                nomeElement.innerText = `Nome: ${item.nome}`;
                p.appendChild(nomeElement);

                const sobrenomeElement = document.createElement("p");
                sobrenomeElement.innerText = `Sobrenome: ${item.sobrenome}`;
                p.appendChild(sobrenomeElement);

                const idadeElement = document.createElement("p");
                idadeElement.innerText = `Idade: ${item.idade}`;
                p.appendChild(idadeElement);

                const cpfElement = document.createElement("p");
                cpfElement.innerText = `CPF: ${item.CPF}`;
                p.appendChild(cpfElement);

                container.appendChild(p);
            });
        } else {
            alert("Nenhum dado encontrado para o CPF inserido.");
        }
    } else {
        // Caso não haja dados na localStorage
        alert("Nenhum dado encontrado na localStorage.");
    }
});
