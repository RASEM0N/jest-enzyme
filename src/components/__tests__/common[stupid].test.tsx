import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import Common from '../Common'

let mockUseSelector: jest.Mock<any, any>
let mockUseAppDispatch: jest.Mock<any, any>
let mockDispatch
let mockIncrement: jest.Mock<any, any>
let mockDecrement: jest.Mock<any, any>

jest.mock('react-redux', () => {
    mockUseSelector = jest.fn().mockReturnValue(1)

    return {
        useSelector: mockUseSelector,
    }
})

jest.mock('../../store', () => {
    mockDispatch = jest.fn()
    mockUseAppDispatch = jest.fn().mockImplementation(() => {
        return mockDispatch
    })

    return {
        useAppDispatch: mockUseAppDispatch,
    }
})

jest.mock('../../store/common.bundle', () => {
    mockIncrement = jest.fn()
    mockDecrement = jest.fn()

    return {
        increment: mockIncrement,
        decrement: mockDecrement,
    }
})

describe('Common.jsx with mock', () => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

    beforeEach(() => {
        component = mount(<Common />)
    })

    // afterEach(() => {
    //     mockIncrement.mockClear()
    // })

    it('click on the incr button', () => {
        const btnIncr = component.find('#incr')
        btnIncr.simulate('click')

        expect(mockDispatch).toHaveBeenCalledWith(mockIncrement())
        expect(mockIncrement).toHaveBeenCalled()
        expect(mockDecrement).not.toHaveBeenCalled()
    })

    it('click on the decr button', () => {
        const btnDecr = component.find('#decr')
        btnDecr.simulate('click')

        expect(mockUseSelector).toHaveBeenCalledTimes(1)
        expect(mockUseAppDispatch).toHaveBeenCalledTimes(1)
        expect(mockIncrement).not.toHaveBeenCalled()
        expect(mockDecrement).toHaveBeenCalledTimes(1)
    })
})
