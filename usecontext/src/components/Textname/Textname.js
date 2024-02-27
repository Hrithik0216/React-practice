import React from 'react'
import { appContext } from '../../App'
import { useContext } from 'react'
import './Textname.css';

const Textname = () => {
    const { name} = useContext(appContext)
    return (
        <div className='App'>
            <p>Name: {name} </p>
        </div>
    )
}

export default Textname