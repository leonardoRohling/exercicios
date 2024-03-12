/**
 * Recebe base e altura de um retângulo e retorna o perímetro e sua área
 * Área = base*altura | Perímetro = 2.(base + altura)
 */


export function areaAndPerimeter(base, height) {
    const area = base * height
    const perimeter = 2 * (base + height)
    return `${area} ${perimeter}`
}