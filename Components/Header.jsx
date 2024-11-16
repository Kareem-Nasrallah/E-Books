import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <div className="row p-4 px-5 gap-2 align-items-center">
      <h1 className="heading fs-3 fw-bold col-3 d-inline p-1 m-0">E-Books</h1>
      <nav className="d-inline-flex col align-items-center justify-content-between p-0 gap-3 m-auto">
        <NavLink to="/" className='navItem'>Home</NavLink>
        <NavLink to="/categories" className='navItem'>Categories</NavLink>
        {/* <NavLink to="/advanced-search" className='text-dark'>Advanced Search</NavLink> */}
        <NavLink to="/membership" className='navItem'>Membership</NavLink>
        <NavLink to="/about" className='navItem'>About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
