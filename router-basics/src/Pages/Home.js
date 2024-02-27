import React from 'react'
import { Link } from 'react-router-dom'
import '../Style/Style.css'

const Home = () => {
    return (
        <React.Fragment>
            <h1>Home</h1>
            <p>
                Welcome to our content index. Head over to{" "}
                <Link to="/topics">/topics</Link> to see our catalog.
            </p>
        </React.Fragment>
    )
}

export default Home
