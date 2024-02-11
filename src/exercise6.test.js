import { test } from "node:test"
import assert from "node:assert"
import { somaDoisNumeros } from "./exercise6.js"

test("deve retornar a soma de dois numeros inteiros", (t) => {
    const numero1 = 5
    const numero2 = 10

    const resultado = somaDoisNumeros(numero1, numero2)

    assert.strictEqual(resultado, 15)
})

test("deve lançar um erro com numeros não-inteiros", (t) => {

    const numero1 = 1.5
    const numero2 = 2.5

    const resultadoFn = () => {
        somaDoisNumeros(numero1, numero2)
    }

    assert.throws(resultadoFn)
})