import React, { useContext, useReducer } from 'react'
import { useState } from 'react';
import { reducer } from './Utils/Reducer'
import { context } from "./Utils/Context"
import Child1 from './Pages/Child1';
import Child2 from './Pages/Child2';
import Child3 from './Pages/Child3';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Error from './Pages/Error';
import Header from './components/Header';

const initialState = {
    user: "",
    password: "",
    error: "",
    loggedIn: false,
    name: "Hrithik",
    age: 22
}
const Login = () => {

    // const [user, setUser] = useState("")
    // const [password, setPassword] = useState("")
    // const [error, setError] = useState("")
    // const [loggedIn, setLoggedIn] = useState(false)

    const [updatedState, dispatch] = useReducer(reducer, initialState)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (updatedState.user === "Hrithik" && updatedState.password === "Arun") {
            console.log(updatedState.user, updatedState.password)
            dispatch({ type: "SUCCESS" })
            // setUser("")
            // setPassword("")
            // setLoggedIn(true)
            // setError("Success")
        } else {
            // setError("Invalid password or username")
            dispatch({ type: "ERROR" })
        }

    }
    return (
        <context.Provider value={updatedState}>

            <div>
                {updatedState.loggedIn ?
                    (
                        <>
                            {updatedState.error}
                            <h1>Hello {updatedState.user}!</h1>
                            <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
                            <Child1 />
                            <Child2 />
                            <Child3 />
                            <BrowserRouter>
                                <Routes>
                                    <Route path='/contact' element={<Contact />} />
                                    <Route path='/about' element={<About />} />
                                    <Route path='/dashboard' element={<Dashboard />} />
                                    <Route path ="*" element={<Error/>}></Route>
                                </Routes>
                            </BrowserRouter>
                        </>
                    ) :
                    (
                        <>
                            {/* <p className='red'>{updatedState.error}</p> */}
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <input type="text" values={updatedState.user}
                                    placeholder='Enter the username'
                                    value={updatedState.user}
                                    onChange={(e) => dispatch({ type: "USERNAME", value: e.target.value })} />
                                <input type="password" value={updatedState.password}
                                    onChange={(e) => dispatch({ type: "PASSWORD", value: e.target.value })}
                                    placeholder='Enter the password' />
                                <button type="submit" >Submit</button>
                            </form>
                        </>
                    )}
            </div>
        </context.Provider>


    )
}

export default Login