import { test } from "node:test"
import assert from "node:assert"
import { parDivisivelPor3 } from "./exercise5.js"

test("deve ser divisivel por 2 e 3", (t) => {
    // 6

    const numero = 6

    const resultado = parDivisivelPor3(numero)

    assert.strictEqual(resultado, true)
})

test("não deve ser divisivel por 2 e 3", (t) => {
    // 9

    const numero = 9

    const resultado = parDivisivelPor3(numero)

    assert.strictEqual(resultado, false)
})