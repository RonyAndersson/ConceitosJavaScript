// Objetos

// como criar?

let pessoa = {
    nome: "Rony",
    idade: 23,

}

console.log(pessoa)

console.log(pessoa.nome)

// como adicionar um par chave-valor?

pessoa.altura = 1.77

console.log(pessoa)

//como remover um par chave-valor:

delete pessoa.idade

console.log(pessoa)

console.clear()
//como percorrer:

for(let chave in pessoa){
    console.log(chave)
}
