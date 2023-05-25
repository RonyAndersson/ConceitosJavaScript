// > OPERADORES ARITMETICOS

let primeiroNumero = 20
let segundoNumero = 2

// ADIÇÃO:                    +
// SUBSTRAÇAO:                -
// MULTIPLICAÇÃO:             *
// DIVISÃO:                   /
// EXPONENCIAÇÃO:             **
// RESTO DA DIVISÃO:          %

const soma = primeiroNumero + segundoNumero

const substracao = primeiroNumero - segundoNumero

const multiplicacao = primeiroNumero * segundoNumero

const divisao = primeiroNumero / segundoNumero

const potencia = primeiroNumero ** segundoNumero

const resto = primeiroNumero % segundoNumero

console.log("Soma =", soma)
console.log("Substarção =", substracao)
console.log("Multiplicação =", multiplicacao)
console.log("Divisão =", divisao)
console.log("A Potencia =", potencia)
console.log("O Resto da Divisão é =", resto)

//PRECEDENCIA DS OPERADORES

console.log(3 + 7 * 3)
console.log((3 + 7) * 3)

//BIBLIOTECA MATH

console.log(Math.sqrt(16))