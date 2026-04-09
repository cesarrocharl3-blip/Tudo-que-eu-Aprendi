
// crase = Fn + Esc ou A tecla do lado direito do P //
/* Abrir console no VSCode: Ctrl + Alt + N */

console.log("Olá, mundo!"); //Código para escrever algo no console//

//Variáveis//

let variavel1 = 'Pode alterar'
const variavel2 = 'Não pode alterar (MAIS RECOMENDADA A SE USAR)'
var variavel3 = 'Quando a variável não esta mais em uso'

console.log(variavel1);
console.log(variavel2);
console.log(variavel3);

//Strings//

const tx1 = "Texto com aspas duplas"
const tx2 = 'Texto com aspas simples'
const tx3 = `Texto com crase` //Template String ou Template Literals//

console.log(tx1);
console.log(tx2);
console.log(tx3);

//Template Strings//

const idade = 28
const carro = "Fusca"

console.log(`Eu tenho ${idade} anos e meu carro é um ${carro}, estamos no ano de ${2000 + 26}.`);  //Com as template strings, é possível fazer contas dentro do ${}//

// Numbers //

const idade2 = "28" 
const conta = 30 + 20 

console.log(`Minha idade ${idade2} e ${conta} reais na conta`) 

// Functions //

function Cheguei() {
    console.log("Olá, seja bem-vindo!");
}
// Para executar a função, basta "chamar-la" ex://
Cheguei();

//Objetos//

const usuario1 = {
    nome: "Cesar",
    idade: 28,
    email: "cesar@gmail.com",
}
console.log(usuario1);

console.log(usuario1.idade);
console.log(usuario1.nome);

// Objetos dentro de Objetos//

const usuario2 = {
    nome: "Cesar",
    idade: 28,
    email: "cesar@gmail.com",
    endereco: {
        rua: " Rua Brasil",
        numero: 87,
        cidade: "Guarulhos",
        estado: "SP",}
}

console.log(usuario2);

//Arrays//

const arrayUsuarios = [
    {
        nome: "Cesar",
        idade: 28,
    },
    {
        nome: "Lucas",
        idade: 30,
    },
    {
        nome: "Pedro",
        idade: 29,
    }
]
console.log(arrayUsuarios);

arrayUsuarios[0].nome = "Cesar Rocha"

console.log(arrayUsuarios);

//If e Else//

const notaAluno1 = 7
const notaDeCorte = 5

//Se for só duas respostas usar só IF e ELSE agr se for 3 ou mais usar IF igual fiz abaixo://

if (notaAluno1 > notaDeCorte) {
    console.log("Aluno aprovado!");
}

if (notaAluno1 < notaDeCorte) {
    console.log("Aluno reprovado!");
}

if (notaAluno1 == notaDeCorte) {
    console.log("Aluno aprovado por pouco!");
}

// Eventos //

function eventoClickB1() {

    alert("Você clicou no botão 1!");
}   

// onkeypress - Pedi para a IA me ajudar a colocar um contador //

const input = document.querySelector(".inputEventos")  //Está pegando o elemento HTML que tem a class inputEventos e guardando ele na variável input para poder usar depois.//

const contador = document.getElementById("contador")    //Está pegando o elemento HTML que tem o id contador (o <span> abaixo do button do HTML) e guardando na variável contador.//

let teclas = 0                                          //Está criando uma variável chamada "teclas" começando com o valor zero, ela vai ser usada para contar as teclas.//

input.onkeypress = function() {                         //Está dizendo: "quando uma tecla for pressionada dentro do input, execute essa função".//
    teclas++                                            //O ++ significa somar 1 na variável "teclas". Então cada vez que apertar uma tecla, o valor aumenta em 1.//
    contador.textContent = teclas + " teclas"           //Está atualizando o texto do <span> com o valor atual de teclas. Por exemplo, se pressionou 3 teclas, vai mostrar "3 teclas" na tela.//
    console.log("Você digitou algo no input!");         //Mostra a mensagem no console do navegador toda vez que uma tecla for pressionada.//
}

//Coloca no console o que foi digitado no input //
const input2 = document.querySelector(".inputEventos2")

function digiteiNoInput2() {

    console.log(input2.value)
}

// Faz um alert com o que foi digitado no input //
const input3 = document.querySelector(".inputEventos3")

function eventoClickB2() {
    
    alert(input3.value)
}   

// Aparecer em baixo o que foi digitado no input 1 //
const paragrafo = document.getElementById("p-eventos")
function eventoClickB3() {

    paragrafo.textContent=(input.value) 
}
    
// Add Event Listener //

const inputAel = document.querySelector(".inputAel")
const select = document.querySelector(".selectAel")
const buttonAel = document.querySelector(".buttonAel")

select. addEventListener("change", function() {      // Está dizendo: "quando o select for alterado, execute essa função"( Essa é uma função anônima, sem nome).//

    console.log("O select foi alterado!")           //Mostra a mensagem no console do navegador toda vez que o select for alterado.//
})

//Outra forma de fazer a mesma coisa://

function valorAlterado() {
    console.log("O select foi alterado! 2ª forma")
}

select. addEventListener("change", valorAlterado)

//Para pegar informações do evento coloca qualquer palavra no parentêses do "function" e console.log (event) //
function valorAlterado(event) {
    console.log(event)
}

select. addEventListener("change", valorAlterado)