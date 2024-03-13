import { test } from "node:test"
import assert from "node:assert"
import { readjustment } from "./exercicio26.js"


test("Deve realizar o ajuste salarial sob o salario de 1500", (t) => {
    const salario = 1500

    const resultado = readjustment(salario)

    assert.strictEqual(resultado, 2325)
})

test("Deve realizar o ajuste salarial sob o salario de 2000", (t) => {
    const salario = 2000

    const resultado = readjustment(salario)

    assert.strictEqual(resultado, 2600)
})

test("Deve realizar o ajuste salarial sob o salario de 2500", (t) => {
    const salario = 2500

    const resultado = readjustment(salario)

    assert.strictEqual(resultado, 3250)
})

test("Deve realizar o ajuste salarial sob o salario de 5000", (t) => {
    const salario = 5000

    const resultado = readjustment(salario)

    assert.strictEqual(resultado, 6000)
})

test("Deve realizar o ajuste salarial sob o salario de 5500", (t) => {
    const salario = 5500

    const resultado = readjustment(salario)

    assert.strictEqual(resultado, 6600)
})