import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <div>Order successfull
        <button onClick={()=>{navigate('/', {replace: 'true'})}}>Back</button>
    </div>
    
  )
}

export default OrderSummary