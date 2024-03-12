import { test } from "node:test"
import assert from "node:assert"
import { weightedAverage } from "./exercise22.js"

test("Deve retornar a media ponderada", (t) => {
    const firstNote = 8
    const secondNote = 9

    const resultado = weightedAverage(firstNote, secondNote)

    assert.strictEqual(resultado, 8.6)
})