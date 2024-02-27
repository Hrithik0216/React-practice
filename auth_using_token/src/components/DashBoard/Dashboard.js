import React from 'react'
import './Dashboard.css'
const Dashboard = ({setToken, message, setMessage, setLog}) => {
  const handleLogout = () =>{
    setLog(true)
    // setMessage("")
    setToken(false)
  }
  // const handleSignOut = () => {
  //   setToken(false)
  //   setMessage("")
  // }
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="logout">
        <p>{message}</p>
        <button type='submit'onClick={handleLogout}>Logout </button>
        {/* <button type="submit" onClick={handleSignOut}>SignOut</button> */}
      </div>
    </div>
  )
}

export default Dashboard