import React from 'react'
import { StateType, useAppDispatch } from '../store'
import { useSelector } from 'react-redux'
import { decrement, increment } from '../store/common.slice'

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

    return (
        <React.Fragment>
            <h2>{numberFromState}</h2>
            <button onClick={incr}>+1</button>
            <button onClick={decr}>-1</button>
        </React.Fragment>
    )
}

export default Common
