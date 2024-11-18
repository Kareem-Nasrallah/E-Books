import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-ligh">
      <div className="container-fluid p-0">
        <span className="navbar-brand fw-bold">E-Books</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarContent">
          <ul className="navbar-nav justify-content-evenly mb-2 mb-lg-0 gap-2 px-2 w-75">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({isActive})=>isActive?"navActive navItem p-1 px-2":"navItem p-1 px-2"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/categories"
                className={({isActive})=>isActive?"navActive navItem p-1 px-2":"navItem p-1 px-2"}
              >
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/membership"
                className={({isActive})=>isActive?"navActive navItem p-1 px-2":"navItem p-1 px-2"}
              >
                Membership
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({isActive})=>isActive?"navActive navItem p-1 px-2":"navItem p-1 px-2"}
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    /*

    <div className="d-flex pb-4 gap-2 align-items-end">
      <h1
        className="heading fs-3 fw-bold col-3 d-inline p-0 m-0"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        E-Books
      </h1>
      <nav className="navbar navbar-expand-lg d-inline-flex col align-items-center justify-content-between px-0 ps-1 gap-2 my-0 m-auto">
        <NavLink to="/" className="navItem p-1 px-2">
          Home
        </NavLink>
        <NavLink to="/categories" className="navItem p-1 px-2">
          Categories
        </NavLink>
        //  <NavLink to="/advanced-search" className='text-dark'>Advanced Search</NavLink> 
        <NavLink to="/membership" className="navItem p-1 px-2">
          Membership
        </NavLink>
        <NavLink to="/about" className="navItem p-1 px-2">
          About
        </NavLink>
      </nav>
    </div>
    */
  );
};

export default Header;
