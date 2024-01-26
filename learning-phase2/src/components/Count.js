import React from 'react'
import { useState } from 'react';

const Count = () => {
    // let count = 0
    const [count, setCount] = useState(0)

    let increase = () => {
        // count +=1
        // console.log(count)
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            <div className="App">
                <div>
                    <input type="button" onClick={decrease} value="decrease" />
                    <input type="button" onClick={reset} value="reset" />
                    <input type="button" onClick={increase} value="increase" />
                    {count}
                </div>
            </div>
        </div>
    )
}

export default Count