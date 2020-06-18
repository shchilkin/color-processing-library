export function numberRangeCheck(colorValue) {
    if (parseInt(colorValue) > 255) {
        return 255
    } else if (parseInt(colorValue) < 0) {
        return 0
    } else {
        return parseInt(colorValue)
    }
}

export function calculateShadowFactor(number) {
    let factor = parseInt(number) / 100
    if (factor > 2) {
        return 2
    } else if (factor < 0) {
        return 0
    } else {
        return factor
    }
}

export function getRandomInt(maximumNumber) {
    return Math.floor(Math.random() * Math.floor(maximumNumber+1));
}