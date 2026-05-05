
const result = document.querySelector(".result")
const playerScore = document.querySelector(".ps")
const iaScore = document.querySelector(".ia")

let playerPoints = 0
let iaPoints = 0

const playerChoice = (player) => {           //Arrow Function com o parâmetro "onlcick" no html

    startGame(player, enemyChoice())
}

const enemyChoice = () => {

    const choices = ['pedra', 'papel', 'tesoura']

    const randomChice = Math.floor(Math.random() * choices.length)
    //const randomChice = Math.floor(Math.random() * 3);  --->  Essa linha faz a mesma coisa que a linha de cima, porém com a linha de 
    // cima se eu tivesse mais de 3 opções eu teria que alterar esse número 3, ja com o "choices.length" não precisa, pois ele se adapta a quantidade existente.
    return choices[randomChice]

}

const startGame = (player, enemy) => {

    if (player === enemy) {
        result.textContent = "Empate !"
    }

    else if (
        player === 'pedra' && enemy === 'tesoura'
        || (player === 'papel' && enemy === 'pedra')
        || (player === 'tesoura' && enemy === 'papel')
    ) {
        playerPoints++
        playerScore.textContent = playerPoints
        result.textContent = "Jogador Venceu !"
    }

    else {
        iaPoints++
        iaScore.textContent = iaPoints
        result.textContent = "Adversário Venceu !"
    }

}

