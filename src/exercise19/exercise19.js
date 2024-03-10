/**
 * Recebe 4 numeros
 * e retorna os numeros divisiveis por 2 e 3
 */


export function divisibleForTwoAndThree(number1, number2, number3, number4) {
    const array = [number1, number2, number3, number4]
    let numbers = []
    let result = ""
    numbers = array.filter((element) => element % 2 == 0 && element % 3 == 0)
    numbers.forEach((element) => {
        result += `${element} `
    })
    return result
}