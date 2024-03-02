import React, { useContext } from 'react'
import { context } from '../Utils/Context'

const Child1 = () => {
    const state = useContext(context)

    return (
        <div>
            {state.name} [{state.age}]
        </div>
    )
}

export default Child1