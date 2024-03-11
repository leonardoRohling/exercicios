import { test } from "node:test"
import assert from "node:assert"
import { amount } from "./exercise20.js"

test("deve retornar o montante total", (t) => {
    const p = 100
    const i = 10
    const n = 3

    const resultado = amount(p, i, n)

    assert.strictEqual(resultado, 133.1)
})