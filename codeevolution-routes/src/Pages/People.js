import React from 'react'
import { Outlet } from 'react-router-dom'

const People = () => {
    return (
        <div>
            People 1
            People 2
            People 3
            <Outlet/>
        </div>
    )
}

export default People