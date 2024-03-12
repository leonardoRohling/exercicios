import { test } from "node:test"
import assert from "node:assert"
import { calculateTax } from "./exercise13.js"


test("Deve calcular conta de água sem multa", (t) => {

    const consumo = 1500
    const precoLitro = 0.00484

    const resultado = calculateTax(precoLitro, consumo)

    assert.strictEqual(resultado, 7.26)

})

test("Deve calcular conta de água com multa", (t) => {

    const consumo = 2500
    const precoLitro = 0.00484

    const resultado = calculateTax(precoLitro, consumo)

    assert.strictEqual(resultado, 14.52)

})