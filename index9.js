//Escopo léxico

//Podemos declarar uma variavel global e chama-la dentro da função que ja dara certo
const nome = 'Hugo Rizzo'

function falaNome() {
    //Porém se declararmos uma variavel "nome" dentro da própria função "pai", automaticamente sera executado
    //a variável que esteja dentro do mesmo

    const nome = 'Mostrando Hugo Rizzo'
    console.log(nome)
}

//Podemos fazer funções compostas tambem

function apresentarFalaNome() {
    falaNome()
}


//Ocorrera exatamente o mesmo resultado
apresentarFalaNome()


