import { Users } from '../utils'

let mockAxiosGet: jest.Mock<any, any>

jest.mock('axios', () => {
    mockAxiosGet = jest.fn()

    return {
        get: mockAxiosGet,
    }
})

describe('Mocking module', () => {
    it('Users', async () => {
        // по-другому
        // https://jestjs.io/ru/docs/mock-functions#mocking-modules
        const users = [{ name: 'Bob' }]
        const resp = { data: users }

        mockAxiosGet.mockResolvedValue(resp)

        const result = await Users.all()
        expect(result).toEqual([{ name: 'Bob' }])
    })
})
