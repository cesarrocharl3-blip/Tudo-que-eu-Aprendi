
// Function
console.log('---------- Function ----------')

function myName2(name) { // (name) variável da função

    console.log(`Olá ${name} como você ta ?`)
}

myName2("Cesar") // (Cesar) valor da variável

// Function com duas variáveis

function soma(num1, num2, num3) { // (num1, num2, num3) variáveis da função
    console.log(num1 + num2 + num3)
}

soma(10, 20, 30)

// Function com valor padrão

function myName2(name = "Sem nome", age = "Não informado") {
    console.log(`Olá ${name} , sua idade é ${age} ?`)
}

myName2() // Se não for atribuido nenhum valor a "name", será atribuido "Sem nome"

//Function / Return

function soma(value, value2) { //função de exemplo
    console.log(value + value2) //resultado que era pra ir para variável abaixo (30)
}

//void
function soma(value, value2) { // void - Função vazia, não reponde de volta o valor, somente executa a ação
    console.log(value + value2) //resultado que era pra ir para variável abaixo (30)
}

const resultVoid = soma(10, 20)
console.log(resultVoid + " resultado")

//return

function soma2(value, value2) { // return - Agora com o return, a função responde de volta o valor
    return value + value2        // agora usando o return no que você quiser retornar
}

const resultReturn = soma2(10, 20)
console.log(resultReturn + " resultado") // agora com o return, a resposta vai dar correta (30 resultado)

// Ou, também pode ser assim: Criando a variável com o retorno da função

function soma3(value, value2) { // return 
    const result = value + value2
    return result      // retornando função direto 
}

const resultFinal = soma3(10, 20)
console.log(resultFinal + " resultado") // agora com o return, a resposta vai dar correta (30 resultado)

//Mini Desafio: Caixa de Mercado 


//1- Somar os produtos 
//2 - Aplicar 10% de desconto nos produtos acima de R$30,00 
//Valor dos Produtos = 10, 244, 99, 2, 20 e 33. 

const cart = [10, 244, 99, 2, 20, 33, 250]
const prodComDesconto = []
const prodSemDesconto = []

const escrever = document.getElementById("p-caixa")


for (let i = 0; i < cart.length; i++) {

    if (cart[i] > 30) {
        prodComDesconto.push((cart[i] * 0.90).toFixed(2))
    }

    else {
        prodSemDesconto.push(cart[i])
    }
}

function comDesconto(prodComDesconto) {
    const somaDesconto = Number(prodComDesconto[0]) + Number(prodComDesconto[1]) + Number(prodComDesconto[2]) + Number(prodComDesconto[3])
    return somaDesconto
}

comDesconto(prodComDesconto)

function semDesconto(prodSemDesconto) {
    const somaSemDesconto = Number(prodSemDesconto[0]) + Number(prodSemDesconto[1]) + Number(prodSemDesconto[2])
    return somaSemDesconto
}

semDesconto(prodSemDesconto)

const valorTotal = comDesconto(prodComDesconto) + semDesconto(prodSemDesconto)

escrever.innerHTML = (`Valor Total: ${valorTotal}`)

// Jeito mais correto de se fazer:

const cart1 = [10, 244, 99, 2, 20, 33, 250]

const escrever1 = document.getElementById("p-caixa2")
let totalValue = 0
let discauntValue = 0
let economyValue = 0

cart1.forEach(value => {

    totalValue += value // esse código é a mesma coisa que: totalValue = totalValue + value

    value > 30 ? discauntValue += value * 0.9 : discauntValue += value

    economyValue = totalValue - discauntValue
})

escrever1.innerHTML = `
<p> Valor total com desconto: R$ ${discauntValue.toFixed(2)}</p>
<p> Valor total sem desconto: R$ ${totalValue.toFixed(2)}</p>
<p> Valor economizado: R$ ${economyValue.toFixed(2)}</p>`

// Arrow Functions


//Function Normal 
console.log('---------- Function Normal ----------')

function apresentação(name, age, valueA, valueB) {

    return (`Olá eu sou o ${name}, tenho ${age} anos. A soma é ${valueA + valueB}.`)
}
console.log(apresentação("Cesar", 28, 25, 50))

// Arrow Function com 1 parâmetro
console.log('---------- Arrow Function - 1 parâmetro ----------')

const myName = name => `Olá, meu nome é ${name} .`

console.log(myName("Cesar"))

// Arrow Function
console.log('---------- Arrow Function ----------')

const apresent = (name, age, valueA, valueB) => (`Olá eu sou o ${name}, tenho ${age} anos. A soma é ${valueA + valueB}.`)

console.log(apresent("Cesar", 28, 25, 50))

// ENUM 
console.log('---------- ENUM ----------')

const ENUM = {
    VARIAVEL_1: "Valor 1",
    VARIAVEL_2: "Valor 2",
    VARIAVEL_3: "Valor 3"
}

console.log(ENUM.VARIAVEL_2)


// Map ( Array )
console.log('---------- Map ( Array ) ----------')

const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const exemplo1 = arrayNumber.map(item => item * 2)
console.log('Exemplo 1', exemplo1)

const exemplo2 = arrayNumber.map((item, index) => `O número ${item} está na posição ${index}`)
console.log('Exemplo 2', exemplo2)

//Usamos a Arrow Function para otimizar nosso código, lembrando que quando pulamos a linha precisamos colocar o Return, pois a arrow function já tem um retorno implícito se for 
// em apenas 1 linha.

const exemplo3 = arrayNumber.map((item) => {

    const vezes10 = item * 10
    return vezes10
})

console.log('Exemplo 3', exemplo3)


// Map Desafio 1 ( Pulseira VIP )
console.log('---------- Map Desafio 1 ( Pulseira VIP ) ----------')

const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
];

const newList = list.map(user => {

    const newUser = {
        nome: user.name,
        pulseira: user.vip ? "Preta" : "Verde"
    }
    return newUser
})

console.log(newList)


// Map Desafio 2 ( Alunos )
console.log('---------- Map Desafio 2 ( Alunos ) ----------')


const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 }
];

const gradeResult = students.map(student => {

    const aproved = {
        name: student.name,
        aproved: student.testGrade >= 5 ? "Yes" : "No"
    }
    return aproved
})

console.log(gradeResult)


// Reduce ( Array )
console.log('---------- Reduce ( Array ) ----------')

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const novaArray1 = array.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, 0)

console.log('Exemplo 1: ' + novaArray1)


// Exemplo 1 ( Carrinho de Compras )
console.log('---------- Exemplo: Carrinho de Compras ----------')

const cartReduce = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerKg: 11.9, kg: 3 },
];

const newCartR = cartReduce.reduce((acc, valueR) => {

    const totalPrice = valueR.pricePerKg * valueR.kg

    return acc + totalPrice
}, 0)

console.log(`Valor total da compra: R$ ${newCartR.toFixed(2)}`)


// Filter ( Array )
console.log('---------- Filter ( Array ) ----------')

const listF = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const listFilter = listF.filter(item => item < 100)

console.log(listFilter)


// Desafio Completo
console.log('---------- Desafio Completo ----------')

// Adicionar 10% de valor de mercado a todas as companhias -> MAP
// Filtrar somente companhias fundadadas abaixo de 1990 -> FILTER
// Somar o valor de mercado das restantes -> REDUCE

const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 }
];

//Map
const map10 = companies.map(value10 => {

    const market10 = {
        name: value10.name,
        marketValueAt: (value10.marketValue * 1.10),
        CEO: value10.CEO,
        foundedOn: value10.foundedOn
    }

    return market10
})

console.log('Adicionando 10% de valor de mercado a todas as companhias:', map10)

//Filter
const filter90 = map10.filter(age => age.foundedOn < 1990)

console.log('Empresas fundadas antes de 1990:', filter90)

//Reduce
const companiesReduce = filter90.reduce((acc, totalM) => {

    const totalMarketV = totalM.marketValueAt + acc
    return totalMarketV

}, 0)

console.log(`Market value total das empresas fundadas antes de 1990: R$ ${companiesReduce.toFixed(1)}`)

//Jeito mais correto de se fazer:

const marketValueOldCompanies = companies
    .map((company) => {
        company.marketValue = company.marketValue * 1.10

        return company
    })
    .filter((company) => company.foundedOn < 1990)
    .reduce((acc, company) => acc + company.marketValue, 0)

console.log('Valor total = ' + marketValueOldCompanies)
