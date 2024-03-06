import { test } from "node:test"
import assert from "node:assert"
import { velocidadeLimite } from "./exercise4.js"




test("Deve retornar true, com a velocidade acima do limite", (t) => {
    // Maior que o Limite: 420KM / 3 Horas = 140KM/H > 110KM/H
    const distancia = 420
    const tempo = 3

    const resultado = velocidadeLimite(distancia, tempo)
    
    assert.strictEqual(resultado, true)
})

test("Deve retornar false, com a velocidade abaixo do limite", (t) => {
    // Menor que o limite: 300KM / 3 Horas = 100KM/H < 110KM/H
    const distancia = 300
    const tempo = 3

    const resultado = velocidadeLimite(distancia, tempo)
    
    assert.strictEqual(resultado, false)
})