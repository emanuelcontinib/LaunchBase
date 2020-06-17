Desafio 1-1

const nome = "carlos"
const peso = 85
const altura = 1.96

imc = (peso /(altura*altura))
if(imc >= 30) {
    console.log(`${nome}, vocês está acima do peso`)
}else{
    console.log(`${nome}, vocês não está acima do peso`)
}
console.log(`${nome}, seu imc é de ${imc}`);

==========================================================================================
const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 23

const calculaCONTRIB = idade + contribuicao

const homemAposenta = sexo == "M" && contribuicao >= 35 && calculaCONTRIB >= 95
const mulherAposenta = sexo == "F" && contribuicao >= 30 && calculaCONTRIB >= 85

if (homemAposenta || mulherAposenta){
    console.log(`${nome}, você pode se aposentar`)
}else{
    console.log(`${nome}, você não pode se aposentar ainda`)
}
==========================================================================================


const usuarios = [{
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    }
];

//   for(let usuario of usuarios){
//       console.log(`${usuario.nome} trabalha com as tecnologias ${usuario.tecnologias.join (',')}`)
//   }

function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }
}


for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}
==========================================================================================

const usuarios = [{
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];


function somaNumeros(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)
    
    return somaReceitas - somaDespesas
}


for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo}`)
    }
}

==========================================================================================

const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
}

// Adicionar transações
function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

// Relatórios
function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValue = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for(let transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0,
    }
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}


createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

console.table(user.balance) // 60

console.table(getHigherTransactionByType('credit')) // { type: 'credit', value: 120 }
console.table(getHigherTransactionByType('debit')) // { type: 'debit', value: 80 }

console.table(getAverageTransactionValue()) // 70

console.table(getTransactionsCount())
