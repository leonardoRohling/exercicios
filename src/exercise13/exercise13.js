/**
 * Calcula a conta da água,
 * recebe preço do litro e quantidade consumida,
 * se o consumo for maior que 2000 litros o valor da multa é 20%
 */

export function calculateTax(priceLiter, consumption) {
    if (consumption > 2000) {
        return (consumption * priceLiter) * 1.2
    }
    return consumption * priceLiter
}