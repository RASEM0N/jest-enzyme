import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import commonReducer from './common.slice'

export const store = configureStore({
    devTools: true,
    reducer: {
        common: commonReducer,
    },
})
export const useAppDispatch = () => {
    return useDispatch<AppDispatch>()
}

export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>
