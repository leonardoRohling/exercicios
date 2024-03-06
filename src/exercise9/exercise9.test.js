import { test } from "node:test"
import assert from "node:assert"
import { calculateTotalPower, roundNumber } from "./exercise9.js"


test("Deve calcular EP, EC, ET utilizando m, v e h", (t) => {
    const m = 10
    const v = 10
    const h = 15

    const resultado = calculateTotalPower(m, v, h)
    const check = [roundNumber(1471.50), roundNumber(500.00), roundNumber(1971.50)]

    resultado.forEach((v, i) => {
        assert.strictEqual(resultado[i], check[i])
    })

})