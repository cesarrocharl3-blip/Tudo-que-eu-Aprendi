
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

