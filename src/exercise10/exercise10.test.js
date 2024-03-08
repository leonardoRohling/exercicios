import { test } from "node:test"
import assert from "node:assert"
import { calculateSpeed } from "./exercise10.js"

test("Deve calcular velocidade da bola utilizando h", (t) => {
    const h = 5

    const resultado = calculateSpeed(h)

    assert.strictEqual(resultado, 9.899494936611665)
})