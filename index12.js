function criaPessoa(nome, sobrenome, idade, p, a) {

    const dados = {
        nome: nome,
        sobrenome: sobrenome,
        idade, idade,
        fala(assunto) {
            console.log(`${nome} esta falando ${assunto}`)
        },
        peso: p,
        altura: a,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);

        }
    }
    return dados
}

const p1 = criaPessoa('Hugo', 'Rizzo', 20, 80, 1.80)
const p2 = criaPessoa('Felipe', 'Rizzo', 25, 75, 1.70)

console.log(p1.fala('sobre JS'))




