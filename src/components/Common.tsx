import React from 'react'
import { StateType, useAppDispatch } from '../store'
import { useSelector } from 'react-redux'
import {
    decrement,
    increment,
    asyncIncrement,
    asyncDecrement,
} from '../store/common.bundle'

const Common: React.FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const numberFromState = useSelector<StateType>((state) => {
        return state.common.number
    })

    const incr = () => {
        dispatch(increment())
    }

    const decr = () => {
        dispatch(decrement())
    }

    const asyncIncr = () => {
        dispatch(asyncIncrement())
    }

    const asyncDecr = () => {
        dispatch(asyncDecrement())
    }

    return (
        <React.Fragment>
            <h2>{numberFromState}</h2>
            <button onClick={incr}>+1</button>
            <button onClick={decr}>-1</button>
            <button onClick={asyncIncr}>async +1</button>
            <button onClick={asyncDecr}>async -1</button>
        </React.Fragment>
    )
}

export default Common
