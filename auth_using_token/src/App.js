import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/DashBoard/Dashboard';
import SignIn from './components/SignIn/SignIn';
import Login from './components/Log_In/Login';

function App() {
  const [token, setToken] = useState();
  const [message, setMessage] = useState("");
  const [log, setLog] = useState();
  const [logout, setLogout] = useState(true)
  if(token){
    return <Dashboard setToken={setToken} message={message} setMessage={setMessage} setLog={setLog} /> 
  }
  if(!token && log){
    return <Login setToken = {setToken} setMessage={setMessage} setLogout={setLogout} />
  }
  if(!token){
    return <SignIn setToken={setToken} setMessage={setMessage} message={message} />
  }

  return (
    <div className='Wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard setToken={setToken} message={message} setMessage={setMessage} setLog={setLog} />} />
          <Route path="/signin" element={<SignIn setToken={setToken} setMessage={setMessage} message={message} />} />
          <Route path="/login" element={<Login setToken={setToken} setMessage={setMessage}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
