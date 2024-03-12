/**
 * Recebe um valor do usuário em dólares e a cotação, converte e retorna em reais
 * Cotação Utilizada: US$ 1 = R$ 4,98
 */

export function dolarToReal(dolar, dolarPrice) {
    return Number((dolar * dolarPrice).toFixed(1))
    // toFixed converte para uma string representando o numero com ponto flutuante com a quantidade de casas respectivamente fornecidas.
    // Number irá converter essa string novamente para um Number
}