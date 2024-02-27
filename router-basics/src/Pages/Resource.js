import React from 'react'
import { getResource } from '../Api'
import { useParams } from 'react-router-dom'
import '../Style/Style.css'

const Resource = () => {
    const { topicId, resourceId } = useParams()
    const { name, description, id } = getResource({ topicId, resourceId })
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <a href={`https://ui.dev/${id}`}>Read Post</a>
        </div>
    )
}

export default Resource