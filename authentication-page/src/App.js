import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <div className="App">
       <>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <span className="appName">
                        React User Authentication</span>
                </div>
            </nav>
           <LoginButton/>
           <LogoutButton/>
        </>
    </div>
  );
}

export default App;
