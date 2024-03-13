import { test } from "node:test"
import assert from "node:assert"
import { factorial } from "./exercicio28.js"

test("deve retornar fatorial de n", (t) => {
    const n = 5

    const resultado = factorial(n)

    assert.strictEqual(resultado, 120)
})