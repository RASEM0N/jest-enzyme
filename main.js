module.exports = {
    sum(a, b) {
        return a + b
    },

    doThrow() {
        throw new Error('Unknown error')
    },

    async doFetch(number) {
        if (number > 0) {
            return number + 1
        }

        throw new Error('Bad number')
    },
}
