// Solicita ao usuário que digite um número e armazena na variável "numero"
let numero = Number(prompt("digite um número:"))

// Verifica se o número é positivo, negativo ou zero e imprime o resultado
if (numero > 0) {
    document.write("O número é positivo.")
} else if (numero < 0) {
    document.write("o número é negativo.")
} else {
    document.write("o número é zero.")
}

