import React, { useState } from 'react'

const Text = () => {
    // const value = "hello"
    const [val, setVal] = useState("hello")
    const handleInput =(event)=>{
        setVal(event.target.value)
    }
    const setEmpty = (e) =>{
        
        setVal("")
    }
  return (
    <div>
        <input type="text" onChange={handleInput} value = {val} />{val}
        <button type="submit" onClick={setEmpty}>Submit</button>
    </div>
  )
}

export default Text