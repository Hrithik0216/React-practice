import React from 'react'
import { Outlet, useParams } from 'react-router-dom'

const Users = () => {
    const { userId } = useParams()
    return (
        <div>
            <h2>The user is {userId}</h2>
            <Outlet/>
        </div>
    )
}

export default Users
