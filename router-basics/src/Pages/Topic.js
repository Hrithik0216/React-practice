import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { getTopic } from '../Api'
import '../Style/Style.css'


const Topic = () => {
    const topicId = useParams()
    const topic = getTopic(topicId)
    return (
        <div>
            <h1>{topic.name}</h1>
            <p>{topic.description}</p>

            <ul>
                {topic.resources.map((sub) => {
                    <li key={sub.id}>{sub.name}</li>
                })}
            </ul>
            <hr />
            <Outlet />

        </div>
    )
}

export default Topic