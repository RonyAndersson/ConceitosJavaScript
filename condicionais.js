// Estruturas Condicionais:

const idade = 20;

if (idade >= 18){
    console.log("Você é maior de idade!")
}else{
    console.log("Você é menor de idade!")
}

console.clear()

// Se media for >= 7 ---> Aprovado
// Se media for < 7  e media <= 5, ---> Recuperação;
// Se media < 5 ---> Reprovado

let media = 5

if (media >= 7){
    console.log("Aprovado(a)")
}
    else if (media < 7 && media >= 5){
        console.log("Recuperação")
}

    else{
        console.log("Reprovado")
    }

console.log(0 <= 0)

console.log(0 <= 0)
console.log(1 < 1)
console.log(-2 > -22)
console.log(-22 > 0)

console.clear()

if (50 > 100) {
    console.log("Falta um tanto");
  } else {
    if ("1" == "-1") {
      console.log("Quase lá");    
    }
  
    if (!null) {
      console.log("Sucesso");
    }
  }