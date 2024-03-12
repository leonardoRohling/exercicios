/**
 * recebe: a = aplicação | i = juros | n = meses
 * retorna montante final
 * M = P.(1 + (i/100))^N
 */

export function amount(application, jures, timeinMonths) {
    return Number((application * ((1 + (jures/100))**timeinMonths)).toFixed(1))
}