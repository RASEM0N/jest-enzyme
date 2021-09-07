export const sum = (a, b) => {
    return a + b
}

export const doThrow = () => {
    throw new Error('Unknown error')
}

export const doFetch = async (number) => {
    if (number > 0) {
        return number + 1
    }

    throw new Error('Bad number')
}
