import './App.css';
import { createBrowserRouter, Link, RouterProvider, Outlet } from 'react-router-dom'
import Error404 from './Pages/Error404';
import Home from './Pages/Home';
import Teams from './Pages/Teams';
import Header from './Pages/Header';
import Contact from './Pages/Contact';
import About from './Pages/About';

const router = createBrowserRouter([{
  path: "/",
  element: <Header />,
  errorElement: <Error404 />,
  children: [
    {
      path: "/home",
      element: <Home />,
      errorElement: <Error404 />
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/teams",
      element: <Teams />,
    },
    {
      path: "/about",
      element: <About />,
    }
  ]
},
])
function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
