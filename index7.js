function conta(operador, acumulador, ...numeros) {

    for (let numero of numeros) {
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador)
    //arguments nao funciona em arrow function
    console.log(arguments)
}
conta('+', 0, 1, 2, 3, 4, 5)
conta('-', 0, 1, 2, 3, 4, 5)
conta('*', 0, 1, 2, 3, 4, 5)
conta('/', 0, 1, 2, 3, 4, 5)

const conta = (operador, acumulador, ...numeros) => {
    console.log(arguments)

}






