import { test } from "node:test"
import assert from "node:assert"
import { calcularDesconto } from "./exercise2.js"

test("deve aplicar um desconto", (t) => {
    // R$ 100,00 | 10% | R$ 90,00
    const preco = 100
    const desconto = 10

    const resultado = calcularDesconto(preco, desconto)

    assert.strictEqual(resultado, 90)
})