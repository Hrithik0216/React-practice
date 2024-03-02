import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userUpdate } from '../Utils/ReduxState'

const Home = (props) => {
  const name = useSelector((state) => state.baseVal.name)
  const dispatch = useDispatch()
  const nameChange = () => {
    
    dispatch((userUpdate({ type: "nameChange", name: "Arun" })))
  }
  return (
    <div>Home
      <br />
      name: {name}
      <br />
      <button onClick={()=>nameChange()}>Change name</button>
    </div>
  )
}

export default Home