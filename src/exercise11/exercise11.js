function calculate(gr, weight) {
    return (weight/10)*gr
}

export function convertWeightPlanet(weightInEarth, planetNumber) {
    const planets = [0.37, 0.88, 0.38, 2.64, 1.15, 1.17]
    if (planetNumber > 0  && planetNumber <= planets.length)  {
        return calculate(planets[planetNumber-1], weightInEarth)
    }
    return undefined
    
}