import logo from './logo.svg';
import './App.css';
import { useState, useContext, createContext } from "react";
import InputBox from './components/Inputbox/InputBox';
import Textname from './components/Textname/Textname';


export const appContext = createContext(null)

function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <h1>UseContext Hook</h1>
      {/* <InputBox setName={setName} />
      <Textname name={name} /> */}
      <appContext.Provider value={{ name, setName }}>
        <InputBox />
        <Textname />
      </appContext.Provider>
    </div>
  );
}

export default App;
