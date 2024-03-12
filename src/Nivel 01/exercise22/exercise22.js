/**
 * Recebe duas notas e retorna a média ponderada
 * a 1° nota tem peso 2 e a 2° nota tem peso 3
 */

export function weightedAverage(firstNote, secondNote) {
    const firstWeight = 2
    const secondWeight = 3
    return ((firstNote * firstWeight) + (secondNote * secondWeight)) / (firstWeight + secondWeight)
}
