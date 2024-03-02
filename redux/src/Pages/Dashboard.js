import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mailUpdate } from '../Utils/ReduxState'

const Dashboard = (props) => {
  const email = useSelector(state => state.baseVal.email)
  const dispatch = useDispatch()
  const mailChange = () => {
    dispatch((mailUpdate({ type: "mailChange", email: "hrithik3285@gmail.com" })))
  }
  return (
    <div>
      Dashboard
      <br />
      mail: {email}
      <br />
      <button onClick={() => mailChange()}> Change mail ID</button>

    </div>
  )
}

export default Dashboard