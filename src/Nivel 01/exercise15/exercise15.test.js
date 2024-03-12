import { test } from "node:test"
import assert from "node:assert"
import { dolarToReal } from "./exercise15.js"

test("Deve receber dolar e retornar em reais", (t) => {
    const dolar = 10
    const dolarPrice = 4.98

    const resultado = dolarToReal(dolar, dolarPrice)

    assert.strictEqual(resultado, 49.8)
})