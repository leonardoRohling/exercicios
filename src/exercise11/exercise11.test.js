import { test } from "node:test"
import assert from "node:assert"
import { convertWeightPlanet } from "./exercise11.js"

test("Deve calcular o peso no planeta escolhido", (t) => {
    const planeta = 5
    const peso = 100

    const resultado = convertWeightPlanet(peso, planeta)

    assert.strictEqual(resultado, 11.5)
})