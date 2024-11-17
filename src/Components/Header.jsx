import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    /*

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-Books</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>



*/

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
        {/* <NavLink to="/advanced-search" className='text-dark'>Advanced Search</NavLink> */}
        <NavLink to="/membership" className="navItem p-1 px-2">
          Membership
        </NavLink>
        <NavLink to="/about" className="navItem p-1 px-2">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
