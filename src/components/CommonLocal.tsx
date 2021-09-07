import React, { useState } from 'react'

const Common: React.FunctionComponent = () => {
    const [count, setCount] = useState<number>(0)

    const incr = () => {
        setCount((prev) => {
            return prev + 1
        })
    }

    const decr = () => {
        setCount((prev) => {
            return prev - 1
        })
    }

    return (
        <div>
            <h2>{count}</h2>
            <button id="incr" onClick={incr}>
                +1
            </button>
            <button id="decr" onClick={decr}>
                -1
            </button>
        </div>
    )
}

export default Common
