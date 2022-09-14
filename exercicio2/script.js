

function somaNumeros(numero1, numero2){
     const soma = numero1 + numero2
    console.log(`${numero1} + ${numero2} = ${soma}`)
}
somaNumeros(2,4)

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function verdadeiro(num1, num2){
    if (num1 >= num2){
        console.log("Este número é maior que o segundo")
    }else{
        console.log(`O número ${num2} é maior que o ${num1}`)
    }
}
verdadeiro(1, 4)

// c) Uma função que receba um número e imprima se ele é par ou não
function par(num){
    if (num % 2 === 0){
        console.log("Este número é par")
    }else{
        console.log("Número ímpar")
    }
}
par(prompt("Me dê um número"))

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
function minhaString(string){
    console.log("Essa string tem o tamanho de", string.length)
    console.log(string.toUpperCase())
}
minhaString((prompt("Escreva algo para saber o tamanho")))