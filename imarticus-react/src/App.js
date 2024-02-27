import logo from './logo.svg';
import './App.css';

import './Components/StyleSheets/Dashboard.css';
import Header from './Components/Dashboard/Header';
import Right from './Components/Dashboard/Right';
import Footer from './Components/Dashboard/Footer';
import Left from './Components/Dashboard/Left';


function App() {
  const json = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
    { name: "Subham", age: 25, gender: "Male" },
    { name: "Subham", age: 25, gender: "Male" }
  ]

  return (
    <div className="App">
      <Header />
      <div class="content">
        <Left />
        <Right jsonData={json} />
      </div>
      <Footer />
    </div>
  );
}



export default App;
