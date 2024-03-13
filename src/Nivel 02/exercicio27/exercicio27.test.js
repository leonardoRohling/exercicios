import { test } from "node:test"
import assert from "node:assert"
import { idealWeightCheckup } from "./exercicio27.js"

test("Deve retornar Você está em forma (m)", (t) => {
    const weight = 72
    const height = 1.8

    const resultado = idealWeightCheckup(height, "masculine", weight)

    assert.strictEqual(resultado, "Você está em forma")
})

test("Deve retornar Melhor fazer uma dieta (m)", (t) => {
    const weight = 80
    const height = 1.8

    const resultado = idealWeightCheckup(height, "masculine", weight)

    assert.strictEqual(resultado, "Melhor fazer uma dieta")
})

test("Deve retornar Você está em forma (f)", (t) => {
    const weight = 66
    const height = 1.8

    const resultado = idealWeightCheckup(height, "feminine", weight)

    assert.strictEqual(resultado, "Você está em forma")
})

test("Deve retornar Melhor fazer uma dieta (f)", (t) => {
    const weight = 69
    const height = 1.8

    const resultado = idealWeightCheckup(height, "feminine", weight)

    assert.strictEqual(resultado, "Melhor fazer uma dieta")
})