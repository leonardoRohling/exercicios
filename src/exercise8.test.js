import { test } from "node:test"
import assert from "node:assert"
import { calcularFormula } from "./exercise8.js"


test("Deve calcular a formula com os valores de x e y", (t) => {
    const x = 10
    const y = 5

    const resultado = calcularFormula(x, y)

    assert.strictEqual(resultado, `X = 10 | Y = 5 | Formula = 15.5`)
})