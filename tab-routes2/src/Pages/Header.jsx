import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Style/Header.css";
const Header = () => {
  return (
    <>
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
    <main>
    <Outlet /> {/* Nested routes render here */}
  </main>
    </>
    
  );
};

export default Header;
