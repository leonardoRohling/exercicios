import { test } from "node:test"
import assert from "node:assert"
import { evenOrOdd } from "./exercicio25.js"

test("Deve retornar os dois são pares", (t) => {
    const number1 = 2
    const number2 = 4


    const resultado = evenOrOdd(number1, number2)

    assert.strictEqual(resultado, "OS DOIS SÃO PARES")
})

test("Deve retornar os dois são impares", (t) => {
    const number1 = 3
    const number2 = 3


    const resultado = evenOrOdd(number1, number2)

    assert.strictEqual(resultado, "OS DOIS SÃO ÍMPARES")
})

test("Deve retornar o primeiro é par e o segundo é impar", (t) => {
    const number1 = 2
    const number2 = 3


    const resultado = evenOrOdd(number1, number2)

    assert.strictEqual(resultado, "O PRIMEIRO É PAR E O SEGUNDO É ÍMPAR")
})

test("Deve retornar o primeiro é impar e o segundo é par", (t) => {
    const number1 = 3
    const number2 = 4


    const resultado = evenOrOdd(number1, number2)

    assert.strictEqual(resultado, "O PRIMEIRO É ÍMPAR E O SEGUNDO É PAR")
})