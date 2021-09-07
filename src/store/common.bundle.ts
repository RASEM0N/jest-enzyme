import { createAction, createSlice } from '@reduxjs/toolkit'
import { all, takeEvery, delay, put } from 'redux-saga/effects'

// -------------------
// ----- TOOLKIT -----
// -------------------
const commonSlice = createSlice({
    name: 'common',
    initialState: {
        number: 0,
    },
    reducers: {
        increment: (state) => {
            state.number++
        },
        decrement: (state) => {
            state.number--
        },
    },
})

export default commonSlice
export const { decrement, increment } = commonSlice.actions
export const commonReducer = commonSlice.reducer
export const asyncIncrement = createAction('async:increment')
export const asyncDecrement = createAction('async:decrement')

// -------------------
// ------ SAGA -------
// -------------------

export const decrementStore = function* () {
    yield delay(3000)
    yield put(decrement())
}

export const incrementStore = function* () {
    yield delay(3000)
    yield put(increment())
}

export const watchChangeAction = function* () {
    yield takeEvery(asyncDecrement.type, decrementStore)
    yield takeEvery(asyncIncrement.type, incrementStore)
}

export const commonRootSaga = function* () {
    yield all([watchChangeAction()])
}
