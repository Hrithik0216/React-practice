import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Topics from './Pages/Topics';
import Home from './Pages/Home';
import Topic from './Pages/Topic';
function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'></Link>Home
            </li>
            <li>
              <Link to='/topics'></Link>Topics
            </li>
          </ul>
        </div>
        <hr />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Topics' element={Topics}>
            <Route path=':topicId' element={Topic}/>
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
