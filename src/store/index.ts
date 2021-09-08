import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { commonReducer, commonRootSaga } from './common.bundle'

// -------------------
// ------ SAGA -------
// -------------------
const sagaMiddleware = createSagaMiddleware()
const rootSaga = function* () {
    yield all([commonRootSaga()])
}

// -------------------
// ----- STORE -------
// -------------------

export const createStore = () => {
    return configureStore({
        devTools: true,
        reducer: {
            common: commonReducer,
        },
        middleware: [sagaMiddleware],
    })
}

export const store = createStore()

sagaMiddleware.run(rootSaga)

// -------------------
// ----- COMMON ------
// -------------------
export const useAppDispatch = () => {
    return useDispatch<AppDispatch>()
}

export type AppStoreType = typeof store
export type AppDispatch = typeof store.dispatch
export type StateType = ReturnType<typeof store.getState>
