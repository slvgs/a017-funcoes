let numero1 = (+prompt("Insirra um número"))
let numero2 = (+prompt("Insirra outro número"))

const soma = (num1, num2) => {
        return num1 + num2

}
console.log(soma(numero1, numero2))

const subtracao = (num1, num2) => {
    const sub = num1 - num2
    return sub
}
console.log(subtracao(numero1, numero2))

const divisao = (num1, num2) => {
    return num1/num2
}
console.log(divisao(numero1, numero2))

const multiplicacao = (num1, num2) => {
    return num1*num2
}
console.log(multiplicacao(numero1, numero2))



