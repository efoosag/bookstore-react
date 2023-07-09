import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';

function Navigation() {
  return (
    <>
      <nav className="panel-bg">
        <div>
          <Link to="books" className="no-Link"><span className="Bookstore-CMS Text-Style-3">Bookstore CMS</span></Link>
          <Link to="books" className="no-Link"><span className="BOOKS Text-Style-6">BOOKS</span></Link>
          <Link to="categories" className="no-Link">
            <span className="CATEGORIES Text-Style-6">
              CATEGORIES
            </span>

          </Link>
        </div>
        <divc className="Oval">
          <Link to="/books">
            <FaRegUserCircle className="Mask" />
          </Link>
        </divc>
      </nav>
      <Outlet />
    </>
  );
}

export default Navigation;
