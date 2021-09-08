import React from 'react'
import Common from '../Common'
import { mount } from 'enzyme'
import { renderWithRedux } from '../../utils/test-utils'
import { store } from '../../store'

describe('common.tsx', () => {
    describe('with redux', () => {
        let myStore

        beforeEach(() => {
            myStore = store
        })

        it('snapshots', () => {
            const { component } = renderWithRedux(<Common />, myStore)

            expect(component.debug()).toMatchSnapshot()
        })

        it('click on a incr and decr button', () => {
            const { component } = renderWithRedux(<Common />, myStore)

            const btnIncr = component.find('#incr')
            btnIncr.simulate('click')
            expect(myStore.getState().common.number).toBe(1)

            const btnDecr = component.find('#decr')
            btnDecr.simulate('click')
            expect(myStore.getState().common.number).toBe(-1)
        })
    })
})
