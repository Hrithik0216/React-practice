import React from 'react'
import { useParams } from 'react-router-dom'

const PeopleDetails = () => {
    const params = useParams()
    const peopleId = params.peopleId
    console.log(peopleId)
    return (
        <div>
            <p>Details section {peopleId}</p>
        </div>
    )
}

export default PeopleDetails