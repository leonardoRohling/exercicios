// Energia Potencial (EP) = m.g.h
// m - massa do objeto | g - aceleração da gravidade | h - altura sobre a superficie terrestre
// Energia cinética (EC) = (1/2).m.(v.v)
// m - massa do objeto | v - velocidade | g = 9,81m/s . 9,81m/s
// o algoritmo deve ler m, v e h, calcular a energia total: ET = EP + EC
// possuida por um objeto no campo gravitacional da terra, e escreva os valores de
// EP EC e ET

export function roundNumber(x) {
    return Number.parseFloat(x).toFixed(2)
}

export function calculateTotalPower(m, v, h) {
    const g = 9.81
    const energiaPotencial = m*g*h
    const energiaCinetica = (1/2)*m*(v*v)
    const energiaTotal = energiaPotencial + energiaCinetica
    return [roundNumber(energiaPotencial), roundNumber(energiaCinetica), roundNumber(energiaTotal)]
}