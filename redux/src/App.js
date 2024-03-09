import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import ProtectedRouter from './Utils/ProtectedRouter';
import Login from './Pages/Login';
import { TOKEN, isAuth } from './Utils/Token';

function App() {
  const token = localStorage.getItem(TOKEN)
  console.log("Token: "+token)
  return (
    <Router>
      <div className="App">
        {token === "" ? (
          <Login />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<ProtectedRouter><Home /></ProtectedRouter>} />
              <Route path="/contact" element={<ProtectedRouter><Contact /></ProtectedRouter>} />
              <Route path="/home" element={<ProtectedRouter><Home /></ProtectedRouter>} />
              <Route path="/dashboard" element={<ProtectedRouter><Dashboard /></ProtectedRouter>} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  )
}

export default App;
