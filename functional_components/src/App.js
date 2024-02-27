import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Afun from './components/Afun';

function App() {
const [name, setame] = useState("Hrithik") 
  return (
    <div className="App">
      {"My name is "+name}
      <Afun name = {name}/>
    </div>
  );
}

export default App;
