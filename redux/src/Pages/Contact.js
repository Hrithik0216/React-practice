import React from 'react'
import { useSelector } from 'react-redux'


const Contact = (props) => {
  const name = useSelector(state => state.baseVal.name)
  const mail = useSelector(state => state.baseVal.email)

  return (
    <div>
      contact
      <br />
      name: {name}
      <br />
      Mail: {mail}
    </div>
  )
}

export default Contact
