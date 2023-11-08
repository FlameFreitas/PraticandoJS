const imprimirTodosOsDados = document.getElementById("imprimirTodosOsDados");

imprimirTodosOsDados.addEventListener("click", function () {
    const imprimirItens = localStorage.getItem("DadosArmazenados");

    if (imprimirItens) {
        // Parse dos dados JSON armazenados na localStorage
        const dados = JSON.parse(imprimirItens);

        const container = document.getElementById("dadosContainer");

        // Limpe o container antes de adicionar os novos dados
        container.innerHTML = "";

        // Itere sobre o array de dados e crie elementos para cada objeto
        dados.forEach((item, index) => {
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

            const spacoElement = document.createElement("p");
            spacoElement.innerText = `----------------------`;
            p.appendChild(spacoElement);

            container.appendChild(p);
        });
    } else {
        // Caso não haja dados na localStorage
        alert("Nenhum dado encontrado na localStorage.");
    }
});
