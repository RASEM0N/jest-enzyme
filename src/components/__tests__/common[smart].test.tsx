import React from 'react'
import Common from '../Common'
import { mount, ReactWrapper } from 'enzyme'
import { createStore } from '../../store'
import { Provider } from 'react-redux'

// https://habr.com/ru/post/340514/
describe('common.tsx', () => {
    describe('smart components', () => {
        let mockStore
        // eslint-disable-next-line @typescript-eslint/ban-types
        let component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>

        beforeEach(() => {
            mockStore = createStore()
            component = mount(
                <Provider store={mockStore}>
                    <Common />
                </Provider>,
            )
        })

        it('snapshots', () => {
            expect(component.debug()).toMatchSnapshot()
        })

        it('click on the incr button', () => {
            const btnIncr = component.find('#incr')
            btnIncr.simulate('click')
            expect(mockStore.getState().common.number).toBe(1)
        })

        it('click on the decr button', () => {
            const btnDecr = component.find('#decr')
            btnDecr.simulate('click')
            expect(mockStore.getState().common.number).toBe(-1)
        })
    })
})
