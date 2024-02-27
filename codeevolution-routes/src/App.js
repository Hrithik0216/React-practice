import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import OrderSummary from './Pages/OrderSummary';
import Products from './Pages/Products';
import Error404 from './Pages/Error404';
import Features from './Components/Features'
import Types from './Components/Types'
import Users from './Pages/Users';
import People from './Pages/People';
import PeopleDetails from './Pages/PeopleDetails';
function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/order-summary' element={<OrderSummary />} />
          <Route path='/products' element={<Products />} >
            <Route path='features' element={<Features />}></Route>
            <Route path='types' element={<Types />}></Route>
            <Route path='users/:userId' element={<Users />} />
          </Route>
          <Route path='/people' element={<People />}>
            <Route path=':peopleId' element={<PeopleDetails />} />
          </Route>
          <Route path='*' element={<Error404 />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
