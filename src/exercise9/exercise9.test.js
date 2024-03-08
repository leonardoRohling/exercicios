import { test } from "node:test"
import assert from "node:assert"
import { calculateTotalPower, roundNumber } from "./exercise9.js"

function isArraysEqual(array1 , array2) {
    if (array1.length !== array2.length) {
        return false
    }

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false
        }
    }

    return true
}

test("Deve calcular EP, EC, ET utilizando m, v e h", (t) => {
    const m = 10
    const v = 10
    const h = 15

    const resultado = calculateTotalPower(m, v, h)
    const check = [roundNumber(1471.50), roundNumber(500.00), roundNumber(1971.50)]

    assert.strictEqual(true, isArraysEqual(resultado, check))

})