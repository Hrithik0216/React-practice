import React, { useContext } from 'react'
import { appContext } from '../../App'
import './InputBox.css';

const InputBox = () => {
    const { setName} = useContext(appContext)
    const handleInput = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    return (
        <div className='App'>
            <input type="text" name="" onChange={handleInput} placeholder="Enter your name" id="" />
        </div>
    )
}

export default InputBox