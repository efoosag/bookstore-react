import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav>
        <Link to="books">Bookstore CMS</Link>
        <Link to="books">Books</Link>
        <Link to="categories">Categories</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
