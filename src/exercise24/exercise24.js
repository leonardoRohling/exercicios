/**
 * recebe um numero positivo e retorna:
 *   n² | N³ | Raiz²=> n | Raiz³ => n |
 */


export function calculator(number) {
    if(number < 0) {
        return false
    }

    const n2 = Math.pow(number, 2)
    const n3 = Math.pow(number, 3)
    const r2n = Math.sqrt(number)
    const r3n = Number((Math.cbrt(number)).toFixed(2))
    
    return `${n2} ${n3} ${r2n} ${r3n}`
}