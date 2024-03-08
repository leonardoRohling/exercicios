function calculate(gr, weight) {
    let pp = (weight/10)*gr
    return pp
}

export function convertWeightPlanet(weightInEarth, planetNumber) {
    const planets = [0.37, 0.88, 0.38, 2.64, 1.15, 1.17]
    return calculate(planets[planetNumber-1], weightInEarth)
}