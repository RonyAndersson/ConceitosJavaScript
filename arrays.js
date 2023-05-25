// Arrays em Javacrip:


console.clear()

// Como Criar um Array?

let array = ["Rony", 26, 1.77, true]

console.log(array)

// Como acessar os elementos do array:

console.log("Primeiro elemento: ", array[0])
console.log("Segundo elemento: ", array[1])
console.log("Terceiro elemento: ", array[2])
console.log("Quarto elemento: ", array[3])

// Como obter o tamanho do array:

console.log("Quantidade de elementos do array:", array.length)

// Percorrendo arrays:

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// segundo metodo para percorrer arrays:

for(let elemento of array){
    console.log(elemento)
}

// Ultimo exemplo:

for(let variavel in array){
    console.log(variavel)    //Percorre os indices do array.
}