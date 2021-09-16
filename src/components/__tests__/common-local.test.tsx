import React from 'react'
import CommonLocale from '../CommonLocal'
import { shallow, render, mount } from 'enzyme'

describe('CommonLocal.tsx', () => {
    it('shapshot - render', () => {
        const component = mount(<CommonLocale />)

        expect(component.debug()).toMatchSnapshot()
    })

    it('click on the increment button', () => {
        const component = mount(<CommonLocale />)

        const h2 = component.find('h2')
        const btnIncr = component.find('#incr')
        // const btnDescr = component.find('#decr')

        btnIncr.simulate('click')

        expect(h2.text()).toBe('1')
    })

    it('click on the decrement button', () => {
        const component = mount(<CommonLocale />)

        const h2 = component.find('h2')
        const btnDescr = component.find('#decr')

        btnDescr.simulate('click')

        expect(h2.text()).toBe('-1')
    })
})