const h1 = document.querySelector('.container h1')

const data = new Date()

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

function getNomeMes(numero) {
    let nomeMes;

    switch (numero) {
        case 0:
            nomeMes = 'Janeiro';
            break;
        case 1:
            nomeMes = 'Fevereiro';
            break;
        case 2:
            nomeMes = 'Março';
            break;
        case 3:
            nomeMes = 'Abril';
            break;
        case 4:
            nomeMes = 'Maio';
            break;
        case 5:
            nomeMes = 'Junho';
            break;
        case 6:
            nomeMes = 'Julho';
            break;
        case 7:
            nomeMes = 'Agosto';
            break;
        case 8:
            nomeMes = 'Setembro';
            break;
        case 9:
            nomeMes = 'Outubro';
            break;
        case 10:
            nomeMes = 'Novembro';
            break;
        case 11:
            nomeMes = 'Dezembro';
            break;
        default:
            nomeMes = 'Mês inválido';
    }

    return nomeMes;
}


function getDateEx(data) {
    let diaSemana

    const diaSem = data.getDay()
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())

    switch (diaSem) {
        case 0:
            diaSemana = `Domingo`
            break;
        case 1:
            diaSemana = `Segunda`
            break;
        case 2:
            diaSemana = `Terça`
            break;
        case 3:
            diaSemana = `Quarta`
            break;
        case 4:
            diaSemana = `Quinta`
            break;
        case 5:
            diaSemana = `Sexta`
            break;
        case 6:
            diaSemana = `Sábado`
            break;
    }

    return `<p>${diaSemana}, ${dia} do mês ${mes} de ${ano}, ${hora}:${min}</p>`;
}




h1.innerHTML = getDateEx(data);
