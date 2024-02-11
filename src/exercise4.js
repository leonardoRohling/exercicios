/**
 * Calcular valor de velocidade média e checar se foi superior ao limite
 * Limite de 110km/h
 * VM = distância(KM) / Tempo(horas)
 * Maior que o Limite: 420KM / 3 Horas = 140KM/H > 110KM/H
 * Menor que o limite: 300KM / 3 Horas = 100KM/H < 110KM/H
 */

export function velocidadeLimite(distancia, tempo) {
    /** if (!distancia || !tempo || tempo < 0) {
        throw new Error("Distancia ou tempo inválido.")
    }
    */
   
    const limite = 110
    const velocidadeMedia = distancia / tempo
    return (Math.round(velocidadeMedia) > limite)
}