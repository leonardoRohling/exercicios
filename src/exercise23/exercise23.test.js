import { test } from "node:test"
import assert from "node:assert"
import { areaAndPerimeter } from "./exercise23.js"


test("Deve retornar area e perimetro", (t) => {
    const base = 5
    const height = 2

    const resultado = areaAndPerimeter(base, height)

    assert.strictEqual(resultado, `10 14`)
})