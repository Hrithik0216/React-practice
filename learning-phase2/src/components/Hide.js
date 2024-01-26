import React, { useState } from 'react'

const Hide = () => {
    const [val,setVal] = useState(true)
    const change = (e) =>{
        setVal(!val)
    }
  return (
    <div>
        {val && <h1>Hello Hrithik</h1>}
        <button type="button" onClick={change}>Change</button>
    </div>
  )
}

export default Hide