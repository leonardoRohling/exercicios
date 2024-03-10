import { test } from "node:test"
import assert from "node:assert"
import { divisibleForTwoAndThree } from "./exercise19.js"

test("Deve retornar os numeros divisiveis por 2 e 3", (t) => {
    const number1 = 6
    const number2 = 9
    const number3 = 12
    const number4 = 2

    const resultado = divisibleForTwoAndThree(number1, number2, number3, number4)

    assert.strictEqual(resultado, "6 12 ")
})