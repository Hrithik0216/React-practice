import logo from './logo.svg';
import './App.css';
import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Contact1 from './Pages/Contact/Contact1';
import Contact3 from './Pages/Contact/Contact3';
import Contact2 from './Pages/Contact/Contact2';
import Left from './Components/Left/Left';
import Right from './Components/Right/Right';

function App() {


  return (
    <div className="App">
      <Navbar />
      <Left />
      <Right/>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/contact/contact1' element={<Contact1 />} />
          <Route path='/contact/contact3' element={<Contact3 />} />
          <Route path='/contact/contact2' element={<Contact2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
