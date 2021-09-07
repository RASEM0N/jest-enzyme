import { createSlice } from '@reduxjs/toolkit'

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

export const { decrement, increment } = commonSlice.actions
export default commonSlice.reducer
