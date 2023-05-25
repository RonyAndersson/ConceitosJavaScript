// coerção de tipos:

// Coerção Explícita:

const numero = 10

console.log(numero, typeof numero)

const numerEmFormatoDeString = String(numero)

console.log(numerEmFormatoDeString, typeof numerEmFormatoDeString)

console.clear()

// Coerção Implícita (Automática)

let n = 1 + "1"

n = n - 1

console.log(n);

// Exemplo 2:

console.log(2 + 3 + 4 + "5")

// Exemplo 3:

console.log("5" + 2 + 3 + 4)

// Exemplo 5:

console.log("10" - "4" - "3" - 2 + "5")
