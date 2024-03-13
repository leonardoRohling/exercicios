/**
 * Recebe salário e realiza reajuste com os seguintes criterios:
 * Inferior a 2000 reais: reajuste de 55%,
 * = ou > a 2000 reais e inferior a 5000 reais: reajuste de 30%,
 * igual ou superior a 5000 reais: reajuste de 20%
 */

function readjustmentCalculator(pay, percent) {
    return pay * (1 + percent)
}

export function readjustment(salary) {
    if (salary >= 5000) {
        return readjustmentCalculator(salary, 0.2)
    } else if (salary < 2000) {
        return readjustmentCalculator(salary, 0.55)
    } else {
        return readjustmentCalculator(salary, 0.3)
    }
}