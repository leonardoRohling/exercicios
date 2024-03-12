/**
 * Recebe dois números e retorna uma das seguintes mensagens:
 * OS DOIS SÃO PARES
 * OS DOIS SÃO ÍMPARES
 * O PRIMEIRO É PAR E O SEGUNDO É ÍMPAR
 * O PRIMEIRO É ÍMPAR E O SEGUNDO É PAR
 */

export function evenOrOdd(number1, number2) {
    const isEven = (number) => number % 2 === 0

    if (isEven(number1) && isEven(number2)) {
        return "OS DOIS SÃO PARES"
    } else if (isEven(number1)) {
        return "O PRIMEIRO É PAR E O SEGUNDO É ÍMPAR"
    } else if (isEven(number2)) {
        return "O PRIMEIRO É ÍMPAR E O SEGUNDO É PAR"
    } else {
        return "OS DOIS SÃO ÍMPARES"
    }
}
