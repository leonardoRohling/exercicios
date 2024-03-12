import { test } from "node:test"
import assert from "node:assert"
import { module } from "./exercise16.js"


test("Deve retornar o modulo do numero negativo", (t) => {
    const number = -5

    const resultado = module(number)

    assert.strictEqual(resultado, 5)
})

test("Deve retornar o mesmo numero por ser positivo", (t) => {
    const number = 10

    const resultado = module(number)

    assert.strictEqual(resultado, 10)
})