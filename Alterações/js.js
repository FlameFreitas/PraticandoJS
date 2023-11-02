const result1 = document.getElementById("texto1")
const result2 = document.getElementById("texto2")
const result3 = document.getElementById("texto3")
const result4 = document.getElementById("texto4")
const result5 = document.getElementById("texto5")
const result6 = document.getElementById("texto6")


const textoOriginal = ["Texto 1", "Texto 2", "Texto 3", "Texto 4", "Texto 5", "Texto 6"]


var alteraTexto = [texto1, texto2, texto3, texto4, texto5, texto6]

alteraTexto[0] = "Novo texto 1"
alteraTexto[1] = "Novo texto 2"
alteraTexto[2] = "Novo texto 3"
alteraTexto[3] = "Novo texto 4"
alteraTexto[4] = "Novo texto 5"
alteraTexto[5] = "Novo texto 6"


function substituiTexto() {
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


function mudarIndividual() {
    const muda1 = document.getElementById("muda1")
    const muda2 = document.getElementById("muda2")
    const muda3 = document.getElementById("muda3")
    const muda4 = document.getElementById("muda4")
    const muda5 = document.getElementById("muda5")
    const muda6 = document.getElementById("muda6")


    muda1.addEventListener("click", function mudarTexto1() {
        const newText1 = alteraTexto[0]
        result1.textContent = newText1
    })
    muda2.addEventListener("click", function mudarTexto2() {
        const newText2 = alteraTexto[1]
        result1.textContent = newText2
    })
    muda3.addEventListener("click", function mudarTexto3() {
        const newText3 = alteraTexto[2]
        result1.textContent = newText3
    })
    muda4.addEventListener("click", function mudarTexto4() {
        const newText4 = alteraTexto[3]
        result1.textContent = newText4
    })
    muda5.addEventListener("click", function mudarTexto5() {
        const newText5 = alteraTexto[4]
        result1.textContent = newText5
    })
    muda6.addEventListener("click", function mudarTexto6() {
        const newText6 = alteraTexto[5]
        result1.textContent = newText6
    })
}


