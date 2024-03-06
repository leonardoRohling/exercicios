import { test } from "node:test"
import assert from "node:assert"
import { calcularAzulejo } from "./exercise3.js"

test("deve calcular valor total de uma compra de azulejos", (t) => {
    const altura = 5
    const comprimento = 5

    const resultado = calcularAzulejo(altura, comprimento)

    assert.strictEqual(resultado, 3352.50)
})

test("deve lançar um erro ao calcular com valor indefinido/nulo", (t) => {
    const altura = null
    const comprimento = undefined

    const resultadoFn = () => {
        calcularAzulejo(altura, comprimento)
    }

    assert.throws(resultadoFn)
    
})

test("deve lançar um erro ao calcular com valor negativo", (t) => {
    const altura = -5
    const comprimento = -5

    const resultadoFn = () => {
        calcularAzulejo(altura, comprimento)
    }

    assert.throws(resultadoFn)
    
})

test("deve lançar um erro ao calcular com valor nulo", (t) => {
    const altura = null
    const comprimento = undefined

    const resultadoFn = () => {
        calcularAzulejo(altura, comprimento)
    }

    assert.throws(resultadoFn)
    
})