/**
 * recebe A,B,C de uma equação de 2° Grau
 * e retorna X' e X''
 */

export function applyBhaskara(a, b, c) {
    const x1 = (-b + (Math.sqrt((b**2) - 4*a*c)))/(2*a)
    const x2 = (-b - (Math.sqrt((b**2) - 4*a*c)))/(2*a)
    return `${x1} ${x2}`
}