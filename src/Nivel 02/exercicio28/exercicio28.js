/**
 * recebe N e retorna N!
 */

export function factorial(number) {
    let n = number
    let x = n
    while (x > 1) {
        x = x - 1
        n = n * x
    }
    return n
}