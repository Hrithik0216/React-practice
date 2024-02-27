import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getTopics } from '../Api'
import '../Style/Style.css'

const Topics = () => {
    const topics = getTopics()
    return (
        <div>
            <h1>Topics</h1>
            <ul>
                {topics.map(({ name, id }) => (
                    <li key={id}>
                        <Link to={id}> {name}</Link>
                    </li>
                ))}
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}

export default Topics