import { test } from "node:test"
import assert from "node:assert"
import { profitPercentage } from "./exercise18.js"

test("Deve retornar o lucro percentual", (t) => {
    const sale = 20
    const productCost = 10

    const resultado = profitPercentage(sale, productCost)

    assert.strictEqual(resultado, 50)
})