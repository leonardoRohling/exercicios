import { test } from "node:test"
import assert from "node:assert"
import { calculator } from "./exercise24.js"

test("deve retornar calculos com base no numero positivo fornecido", (t) => {
    const number = 4

    const resultado = calculator(number)

    assert.strictEqual(resultado, `16 64 2 1.59`)
})


test("Deve retornar falso fornecendo um numero negativo", (t) => {
    const number = -2

    const resultado = calculator(number)

    assert.strictEqual(resultado, false)
})