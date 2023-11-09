function criaPessoa(nome, sobrenome, idade, p, a) {

    const dados = {
        fala(assunto) {
            console.log(`${nome} esta falando de ${assunto}`)
        },
        nome: nome,
        sobrenome: sobrenome,
        idade, idade,
        peso: p,
        altura: a,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);

        }
    }

}




