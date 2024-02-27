import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <>
      <div>
        <input type="search" name="" id="" />
      </div>
      <nav>
        <Link to='features'>Features</Link>
        <br />
        <Link to='types'>Types</Link>
        <ul>
          {users.map((user) => (
            <li key={user}>
              <Link to={`/users/${user}`}>{user}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
