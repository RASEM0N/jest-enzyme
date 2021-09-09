import { forEach } from '../utils'

describe('mock functions', () => {
    let mockCallback: jest.Mock<any, any>

    beforeEach(() => {
        mockCallback = jest.fn()
    })

    it('[1]', () => {
        // ...
        mockCallback.mockImplementation((x) => {
            return x + 41
        })
        forEach([12, 43], mockCallback)
        expect(mockCallback).toHaveBeenCalledTimes(2)

        // второй [0] - это индекс аргумента
        expect(mockCallback.mock.calls[0][0]).toBe(12)
        expect(mockCallback.mock.calls[1][0]).toBe(43)

        expect(mockCallback.mock.results[0].value).toBe(12 + 41)
        expect(mockCallback.mock.results[1].value).toBe(43 + 41)
    })
    it('[2]', () => {
        mockCallback
            .mockReturnValueOnce(10)
            .mockReturnValueOnce('x')
            .mockReturnValue(true)

        expect(mockCallback()).toBe(10)
        expect(mockCallback()).toBe('x')
        expect(mockCallback()).toBeTruthy()
        expect(mockCallback()).toBeTruthy()
    })
    it('[3]', () => {
        mockCallback.mockReturnValueOnce(true).mockReturnValueOnce(false)

        const result = [13, 45].filter((num) => {
            return mockCallback(num)
        })

        expect(result).not.toContain(45)
        // toHaveBeenCalledWith
        // 1 - 13
        // 2 - 45
        // https://jestjs.io/ru/docs/mock-functions#пользовательские-матчеры
        expect(mockCallback).toHaveBeenCalledWith(45)
        expect(mockCallback).toHaveBeenCalledWith(13)
    })
})
