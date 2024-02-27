import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Link to='/order-summary'><button>Go to Order Summary</button></Link>
    </div>
  )
}

export default Home