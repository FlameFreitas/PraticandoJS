// Cadastro

const botaoEnviar = document.getElementById("botaoEnviar");

botaoEnviar.addEventListener("click", function () {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const sexo = document.getElementById("sexo").value;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !senha || !sexo) {
        alert("Preencha todos os campos antes de enviar.");
        return;
    }

    const userData = {
        nome: nome,
        senha: senha,
        sexo: sexo
    };

    // Verifica se a chave (email) já existe no localStorage
    if (localStorage.getItem(email)) {
        alert("Este email já foi cadastrado. Use outro email.");
    } else {
        // Tenta salvar os dados no localStorage
        try {
            localStorage.setItem(email, JSON.stringify(userData));
            alert("Cadastro realizado com sucesso!");
        } catch (error) {
            alert("Ocorreu um erro ao salvar os dados. Tente novamente mais tarde.");
        }
    }
});



// Login

const botaoLogin = document.getElementById("botaoLogar");

botaoLogin.addEventListener("click", function () {
    const emailLogin = document.getElementById("emailLogin").value;
    const senhaLogin = document.getElementById("senhaLogin").value;

    if (!emailLogin || !senhaLogin) {
        alert("Preencha o email e a senha antes de fazer o login.");
        return;
    }

    const userData = JSON.parse(localStorage.getItem(emailLogin));

    if (userData) {
        if (userData.senha === senhaLogin) {
            alert("Login bem-sucedido!");
            // Você pode redirecionar o usuário ou executar outras ações após o login bem-sucedido.
        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    } else {
        alert("Email não encontrado. Verifique seu email e tente novamente.");
    }
});
