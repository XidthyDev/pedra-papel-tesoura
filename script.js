let getComputerChoice = function () {
  let opcaoComputador = ['PEDRA', 'PAPEL', 'TESOURA']
  let valorEscolhido = Math.floor(Math.random() * opcaoComputador.length)
  return opcaoComputador[valorEscolhido]
}
// console.log(getComputerChoice())
let playRound = function (playerSelection, computerSelection) {
  if (playerSelection == "PEDRA"){
    if(computerSelection == 'PEDRA'){
      return 'EMPATE'
    }else if(computerSelection == "TESOURA"){
      return 'PLAYER GANHOU'
    } else{
      return 'PLAYER PERDEU'
    }
  }

  else if (playerSelection == 'PAPEL'){
    if(computerSelection == 'PEDRA'){
      return 'PLAYER GANHOU'
    }else if(computerSelection == "TESOURA"){
      return 'PLAYER PERDEU'
    } else{
      return 'EMPATE'
    }
  }
  
  else if (playerSelection == 'TESOURA'){
    if(computerSelection == 'PEDRA'){
      return 'PLAYER PERDEU'
    }else if(computerSelection == "TESOURA"){
      return 'EMPATE'
    } else{
      return 'PLAYER GANHOU'
    }
  }

}

let playerValor = 'pedra'
let computerSelection = getComputerChoice()
let playerSelection = playerValor.toUpperCase()
console.log(playRound(playerSelection, computerSelection))

