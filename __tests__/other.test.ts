describe('other', () => {
    it('container ', () => {
        const someList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk']
        expect(someList).toContain('diapers')
    })

    describe('promises', () => {
        it('default testing - resolve', () => {
            Promise.resolve(40).then((data) => {
                expect(data).toBe(40)
            })
        })

        it('default testing - reject', () => {
            Promise.reject(40).catch((data) => {
                expect(data).toBe(40)
            })
        })

        it('resolve', () => {
            expect(Promise.resolve(40)).resolves.toBe(40)
        })

        it('reject', () => {
            expect(Promise.reject(40)).rejects.toBe(40)
        })
    })
})
