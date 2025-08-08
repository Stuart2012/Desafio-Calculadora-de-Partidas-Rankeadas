// Variaveis com o nome, o saldo de vitórias e o nivel do herói

let nome = "Gerald"
let saldoVitorias = getWinLoss(90, 10)
let nivel

// Estrutura de decisão para identificar o nivel do personagem

if (saldoVitorias <= 10) {
    nivel = "Ferro" 

} else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "Bronze"

} else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "Prata"

} else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro"

} else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"

} else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = "Lendário"

} else if (saldoVitorias >= 101){
    nivel = "Imortal"

} else {
    nivel = "Desconhecido"
}

console.log("O Herói " + nome + " tem de saldo de vitórias de " + saldoVitorias + " e está no nível de " + nivel)

// Função onde é calculado o valor das vitórias do herói

function getWinLoss(win, loss) {
    let winLoss = (win - loss)
    return winLoss
}






