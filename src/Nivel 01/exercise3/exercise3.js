/**
 * Azulejo Custa R$ 14,90
 * Receber comprimento e altura (em metros)
 * Retorna valor gasto
 * 1m² é formado por 9 azulejos
 * m² = comprimento * altura
 * 5 x 5 = 25m² | 25 x 9 = 225 azulejos * R$ 14,90 = R$ 3.352,50
 */

export function calcularAzulejo(altura, comprimento) {
    if (!altura || !comprimento || altura < 0 || comprimento < 0) {
        throw new Error("Altura ou comprimento inválido.")
    }
    
    const metrosQuadrados = altura * comprimento
    const valorAzulejos = (metrosQuadrados * 9) * 14.90
    return valorAzulejos
}