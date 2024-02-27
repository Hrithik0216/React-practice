import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Signin from './components/Signin/Signin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='headerr'>
          <Link to="/login">Login</Link>
          <Link to="/signin">SignIn</Link>
        </header>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
