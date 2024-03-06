/**
 * Recebe dois numeros inteiros
 * Retorna a soma deles com a String "Soma = "
 */

export function somaDoisNumeros(numero1, numero2) {
    if(!Number.isInteger(numero1) && !Number.isInteger(numero2)) {
        throw new Error("Números não inteiros")
    }
    return numero1 + numero2
}