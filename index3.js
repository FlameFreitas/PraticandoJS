//Operação ternária

const pontosUsuário = 999   

const nivelUsuário = pontosUsuário >= 1000 ? 'Usuário VIP' : 'Usuário normal'
let corUsuário

if(pontosUsuário >= 1000){
    corUsuário = 'Color: Gold'
}else{
    corUsuário = 'Color: White'
}

console.log(nivelUsuário, corUsuário)


//Operação Date

const data = new Date()

console.log(data.toString())


