// BOOLEANOS (TRAE RESULTADO YA SEA FALSO O VERDADERO).

//Igualdade  ----------- > (==).
//Desigualdade --------- > (!=).
//Maior que  ----------- > (>).
//Maior ou igual que --- > (>=).
//Menor que ------------ > (<).
//Menor ou igual que --- > (<=).     

const numero = 10

console.log(numero == 10)
console.log(numero != 20)
console.log(numero > 20)
console.log(numero >= 20)
console.log(numero < 20)
console.log(numero <= 20)


// DIFERENÇA ENTRE OS (==) E (===):

// PARA COMPARAR CONTEUDO E TIPO DE VARIAVEL É UTILIZADO OS ===:

console.clear() //limpa o console

console.log(10 != 10)
console.log(10 != "10")
console.log(10 !== "10") //compara o conteudo e tipo de variavel.

// - Conjunções Lógicas:

// And --> &&

let idade = 26
let tenhoCNH = false

const possoDirigir = idade >= 18 && tenhoCNH === true

console.log("Posso dirigir?", possoDirigir)

// OR --> ||

idade = 40

const votoFacultativo = idade < 18 || idade >= 70

// NOT --> !

const estouGostandoDoCurso = false

console.log(!estouGostandoDoCurso)

