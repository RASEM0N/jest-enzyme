import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { EnhancedStore } from '@reduxjs/toolkit'
import { AppDispatch, StateType } from '../store'

export const renderWithRedux = (Component: JSX.Element, store: EnhancedStore) => {
    const component = mount(<Provider store={store}>{Component}</Provider>)
    const state = store.getState() as StateType
    const dispatch = store.dispatch as AppDispatch

    return {
        component,
        state,
        dispatch,
    }
}
