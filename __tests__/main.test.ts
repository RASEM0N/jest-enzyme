import { sum, doThrow, doFetch } from '../main'

describe('main.js', () => {
    describe('sum', () => {
        it('when the answer is correct', () => {
            const a: number = 1

            const result = sum(5, 12)

            expect(result).toBe(17)
        })
    })

    it('doThrow', function () {
        expect(doThrow).toThrow('Unknown error')
        expect(doThrow).toThrow(Error)
    })

    describe('doFetch - промисы', () => {
        it('success', () => {
            doFetch(10).then((data) => {
                expect(data).toBe(11)
            })

            expect(doFetch(10)).resolves.toBe(11)
        })

        it('error', () => {
            doFetch(-1).catch((e) => {
                expect(e.message).toBe('Bad number')
            })
        })

        it('catch error', async () => {
            try {
                await doFetch(-1)
            } catch (e) {
                expect(e.message).toBe('Bad number')
            }
        })
    })
})
