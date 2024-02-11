/**
 * Receber um número inteiro, verificar se é par e divisivel por 3
 * Divisivel: 6
 * Não divisivel: 9
 */

export function parDivisivelPor3(numero) {
    return (numero % 2 == 0 && numero % 3 == 0)
}