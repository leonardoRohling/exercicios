import { test } from "node:test"
import assert from "node:assert"
import { celsiusToFahrenheit } from "./exercise14.js"

test("Deve receber Celsius e retornar em Fahrenheit", (t) => {

    const celsius = 10

    const resultado = celsiusToFahrenheit(10)

    assert.strictEqual(resultado, 50)
})