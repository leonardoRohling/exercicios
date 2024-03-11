import { test } from "node:test"
import assert from "node:assert"
import { applyBhaskara } from "./exercise21.js"

test("Deve retornar X1 e X2 da bhaskara", (t) => {
    const a = 1
    const b = 12
    const c = -13

    const resultado = applyBhaskara(a, b, c)

    assert.strictEqual(resultado, `1 -13`)
})