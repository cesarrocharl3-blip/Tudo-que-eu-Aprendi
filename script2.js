// Function

function myName(name) { // (name) variável da função

    console.log(`Olá ${name} como você ta ?`)
}

myName("Cesar") // (Cesar) valor da variável

// Function com duas variáveis

function soma(num1, num2, num3) { // (num1, num2, num3) variáveis da função
    console.log(num1 + num2 + num3)
}

soma(10, 20, 30)

// Function com valor padrão

function myName(name = "Sem nome", age = "Não informado") {
    console.log(`Olá ${name} , sua idade é ${age} ?`)
}

myName() // Se não for atribuido nenhum valor a "name", será atribuido "Sem nome"

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

const cart = [10, 244, 99, 2, 20, 33]
const prodComDesconto = []
const prodSemDesconto = []

const escrever = document.getElementById("p-caixa")


for (let i = 0; i < cart.length; i++) {

    if (cart[i] > 30) {
        prodComDesconto.push ((cart[i] * 0.90).toFixed(2))
    }

    else {
        prodSemDesconto.push(cart[i])
    }
}

function comDesconto(prodComDesconto) {
    const somaDesconto = Number(prodComDesconto[0]) + Number(prodComDesconto[1]) + Number(prodComDesconto[2])
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