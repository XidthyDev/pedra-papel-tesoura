let getComputerChoice = function () {
  let opcaoComputador = ['PEDRA', 'PAPEL', 'TESOURA']
  let valorEscolhido = Math.floor(Math.random() * opcaoComputador.length)
  return opcaoComputador[valorEscolhido]
}
// console.log(getComputerChoice())
let playRound = function (playerSelection, computerSelection) {
 
  if (playerSelection == 'PEDRA' && computerSelection == 'PEDRA') {
    return 'EMPATE'
  } else if (playerSelection == 'PEDRA' && computerSelection == 'TESOURA') {
    return 'PLAYER GANHOU'
  } else if (playerSelection == 'PEDRA' && computerSelection == 'PAPEL') {
    return 'PLAYER PERDEU'
  } else if (playerSelection == 'PAPEL' && computerSelection == 'PEDRA') {
    return 'PLAYER GANHOU'
  } else if (playerSelection == 'PAPEL' && computerSelection == 'PAPEL') {
    return 'EMPATE'
  } else if (playerSelection == 'PAPEL' && computerSelection == 'TESOURA') {
    return 'PLAYER PERDEU'
  } else if (playerSelection == 'TESOURA' && computerSelection == 'PEDRA') {
    return 'PLAYER PERDEU'
  } else if (playerSelection == 'TESOURA' && computerSelection == 'PAPEL') {
    return 'PLAYER GANHOU'
  } else if (playerSelection == 'TESOURA' && computerSelection == 'TESOURA') {
    return 'PLAYER GANHOU'
  }
}

let playerValor = 'pedra'
let computerSelection = getComputerChoice()
let playerSelection = playerValor.toUpperCase()
console.log(playRound(playerSelection, computerSelection))

