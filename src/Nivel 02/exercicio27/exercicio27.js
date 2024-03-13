/**
 * recebe altura (h), sexo e peso de uma pessoa.
 * calcula o peso ideal:
 * homens (72,7*h) - 58
 * mulheres: (62,1*h)-44,7
 * retorna você está em forma com o peso menor ou igual ao peso ideal
 * ou retorna melhor fazer uma dieta
 */


function idealWeightCalculator(height, gender) {
    if (gender == "masculine") {
        return (72.7 * height) - 58
    } else {
        // femine
        return (62.1 * height) - 44.7
    }
}

export function idealWeightCheckup(height, gender, weight) {
    if (weight <= idealWeightCalculator(height, gender)) {
        return "Você está em forma"
    } else {
        return "Melhor fazer uma dieta"
    }
}