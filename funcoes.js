// Funçoes :


//Definiçao da funçao:
function saudacao() {
    console.log("Seja Bem Vindo(a) ao curso básico de JavaScript!")
}

//Para poder executar a função:
saudacao()

console.clear()
// Enviar parametros

function saudacao(nome, curso="JavaScript"){
    
    console.log(`Olá, ${nome} seja bem vindo(a) ao nosso curso de ${curso}`)
}

saudacao("Rony")

// Retorno da funçao

function soma(numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado)

