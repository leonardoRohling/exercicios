import { test } from "node:test"
import assert from "node:assert"
import { pairOrOdd } from "./exercise17.js"

test("Deve retornar Par", (t) => {
    const number = 2

    const resultado = pairOrOdd(number)

    assert.strictEqual(resultado, "Par")
})

test("Deve retornar Impar", (t) => {
    const number = 3

    const resultado = pairOrOdd(number)

    assert.strictEqual(resultado, "Impar")
})