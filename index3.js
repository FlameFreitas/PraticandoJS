//Operação ternária

const pontosUsuário = 999

const nivelUsuário = pontosUsuário >= 1000 ? 'Usuário VIP' : 'Usuário normal'
let corUsuário

if (pontosUsuário >= 1000) {
    corUsuário = 'Color: Gold'
} else {
    corUsuário = 'Color: White'
}

console.log(nivelUsuário, corUsuário)


//Operação Date

// parametros do "new Date()" (ano, mes, dia, hora, minutos, segundos e milesimos de segundos)
// parametros do "new Date()" com string ('ano, mes, dia hora,minutos, segundo') = ('2023-03-03 20:20:50')


//const data2 = new Date('2023-05-15 11:03:50:100')

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {

    const ano = zeroAEsquerda(data.getFullYear());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const dia = zeroAEsquerda(data.getDate());
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());
    const MS = zeroAEsquerda(data.getMilliseconds());
    const diaSemana = zeroAEsquerda(data.getDay()); // 0 - Domingo - 6 - Sabado


    return `${ano}/${mes}/${dia}   ${hora}:${minutos}:${segundos}:${MS} e Dia da semana ${diaSemana}`

}


const data = new Date('2023-05-05 09:09:09:005')
const horarioBrasil = formataData(data)

console.log(horarioBrasil)


// console.log(data2)
// console.log(data.toString())


const data4 = new Date()
const diaSemana = data4.getDay()


let diaDaSemanaTexto

// if(diaSemana === 0){
//     diaDaSemanaTexto = 'Domingo'
// }else if(diaSemana === 1){
//     diaDaSemanaTexto = 'Segunda'
// }else if(diaSemana === 2){
//     diaDaSemanaTexto = 'Terça'
// }else if(diaSemana === 3){
//     diaDaSemanaTexto = 'Quarta'
// }else if(diaSemana === 4){
//     diaDaSemanaTexto = 'Quinta'
// }else if(diaSemana === 5){
//     diaDaSemanaTexto = 'Sexta'
// }else if(diaSemana === 6){
//     diaDaSemanaTexto = 'Sabado'
// }else{
//     diaDaSemanaTexto = 'Data Inválida'
// }


// switch (diaSemana){
//     case 0:
//         diaDaSemanaTexto = 'Domingo'
//         break
//     case 1:
//         diaDaSemanaTexto = 'Segunda'
//         break
//     case 2:
//         diaDaSemanaTexto = 'Terça'
//         break
//     case 3:
//         diaDaSemanaTexto = 'Quarta'
//         break
//     case 4:
//         diaDaSemanaTexto = 'Quinta'
//         break
//     case 5:
//         diaDaSemanaTexto = 'Sexta'
//         break
//     case 6:
//         diaDaSemanaTexto = 'Sábado'
//         break
//         default:
//             diaDaSemanaTexto = ''
//             break
// }


//Agora em função

function getWeekText(diaSemana) {
    let diaDaSemanaTexto

    switch (diaSemana) {
        case 0:
            diaDaSemanaTexto = 'Domingo'
            return diaDaSemanaTexto
        case 1:
            diaDaSemanaTexto = 'Segunda'
            return diaDaSemanaTexto
        case 2:
            diaDaSemanaTexto = 'Terça'
            return diaDaSemanaTexto
        case 3:
            diaDaSemanaTexto = 'Quarta'
            return diaDaSemanaTexto
        case 4:
            diaDaSemanaTexto = 'Quinta'
            return diaDaSemanaTexto
        case 5:
            diaDaSemanaTexto = 'Sexta'
            return diaDaSemanaTexto
        case 6:
            diaDaSemanaTexto = 'Sábado'
            return diaDaSemanaTexto
        default:
            diaDaSemanaTexto = ''
            return diaDaSemanaTexto
    }

}

dayFromWeekText = getWeekText(diaSemana)


console.log(diaSemana, dayFromWeekText)


