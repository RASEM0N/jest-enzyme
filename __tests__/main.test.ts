const { sum } = require('../main.js')

describe('main.js', () => {
    describe('sum', () => {
        it('when the answer is correct', () => {
            const result = sum(5, 12)

            expect(result).toBe(17)
        })
    })
})
