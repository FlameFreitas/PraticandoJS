const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'section', texto: 'Frase 3' },
    { tag: 'footer', texto: 'Frase 4' }

]

const container = document.querySelector('.container')

const div = document.createElement('div')

let i

for (i = 0; i < elementos.length(); i++) {
    console.log(elementos[i])
}


