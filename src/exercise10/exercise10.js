/**
 * v = raiz de 2.g.h
 * g aceleração devido a gravidade (9.81) h = altura
 * recebe h e retorna v
 */

export function calculateSpeed(h) {
    const g = 9.8
    let v = Math.sqrt((2*g*h))
    return v
}