// Laços de Repetiçao:

const input = require("readline-sync")

const numeroSorteado = 5;

let numero = Number (input.question("Qual numero voce escolhe?"))


while(numero != numeroSorteado){
    console.log("Você Errou o número. Tente novamente")

    numero = Number (input.question("Qual numero voce escolhe?"))
}

console.log("Você Acertou!!!")

