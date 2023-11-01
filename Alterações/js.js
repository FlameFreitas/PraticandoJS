const texto1 = "Texto 1"
const texto2 = "Texto 2"
const texto3 = "Texto 3"
const texto4 = "Texto 4"
const texto5 = "Texto 5"
const texto6 = "Texto 6"


var alteraTexto = [texto1, texto2, texto3, texto4, texto5, texto6]

alteraTexto[0] = "Novo texto 1"
alteraTexto[1] = "Novo texto 2"
alteraTexto[2] = "Novo texto 3"
alteraTexto[3] = "Novo texto 4"
alteraTexto[4] = "Novo texto 5"
alteraTexto[5] = "Novo texto 6"


function substituiTexto() {
    const result1 = document.getElementById("texto1")
    const result2 = document.getElementById("texto2")
    const result3 = document.getElementById("texto3")
    const result4 = document.getElementById("texto4")
    const result5 = document.getElementById("texto5")
    const result6 = document.getElementById("texto6")

    const newText1 = alteraTexto[0]
    const newText2 = alteraTexto[1]
    const newText3 = alteraTexto[2]
    const newText4 = alteraTexto[3]
    const newText5 = alteraTexto[4]
    const newText6 = alteraTexto[5]

    result1.textContent = newText1
    result2.textContent = newText2
    result3.textContent = newText3
    result4.textContent = newText4
    result5.textContent = newText5
    result6.textContent = newText6


}

