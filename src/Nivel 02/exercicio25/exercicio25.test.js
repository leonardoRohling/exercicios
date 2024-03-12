import { test } from "node:test"
import assert from "node:assert"
import { evenOrOdd } from "./exercicio25.js"

test("Deve retornar os dois são pares", (t) => {
    const number1 = 2
    const number2 = 4


    const resultado = evenOrOdd(number1, number2)

    assert.strictEqual(resultado, "OS DOIS SÃO PARES")
})