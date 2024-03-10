/**
 * Recebe preço de compra e preço de venda
 * retorna lucro percentual
 * lucro percentual = (V - C) / V * 100
 */

export function profitPercentage(sale, productCost) {
    return ((sale - productCost) / sale) * 100
}