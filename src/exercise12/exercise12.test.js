import { test } from "node:test"
import assert from "node:assert"
import { highNumber } from "./exercise12.js"

test("deve retornar o numero maior (numero 1)", (t) => {
    const numberOne = 5
    const numberTwo = 3

    const resultado = highNumber(numberOne, numberTwo)

    assert.strictEqual(resultado, numberOne)
})

test("deve retornar o numero maior (numero 2)", (t) => {
    const numberOne = 3
    const numberTwo = 5

    const resultado = highNumber(numberOne, numberTwo)

    assert.strictEqual(resultado, numberTwo)
})