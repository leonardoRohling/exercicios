/**
 * Recebe o valor de x e y
 * realiza a função e retorna o valor de x, y e a função calculada
 * f(x,y) = (x² + 3x + y²) / (x.y - 5.y - 3x + 15)
 * 
 * x = 10 | y = 5
 * 
 * f = (155) / (10) = 15,50
 * 
 * teste resultado = `X = 10 | Y = 5 | Formula = 15.5`
 */

export function calcularFormula(x, y) {
    const formula = (Math.pow(x, 2) + (3*x) + Math.pow(y, 2)) / ((x*y) - (5*y) - (3*x) + 15)
    return `X = ${x} | Y = ${y} | Formula = ${formula}`
}