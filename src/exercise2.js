export function calcularDesconto(preco, desconto) {
    if(desconto > 100) {
        desconto = 100
    }
    let resultado = preco - (preco * (desconto / 100))
    return resultado
}