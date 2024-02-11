export function calcularDesconto(preco, desconto) {
    let resultado = preco - (preco * (desconto / 100))
    return resultado
}