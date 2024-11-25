import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useRef, useState } from "react";

const Header = ({ searchValue, setSearchV }) => {
  const searchBar = useRef("");
  const navigat = useNavigate();
  const [searchInput, setSearchI] = useState("");

  const searchfun = (e) => {
    e.preventDefault();
    if (!searchInput) {
      searchBar.current.focus();
      searchBar.current.classList.add("redFocus");
    } else {
      navigat("/search");
      setSearchV(searchBar.current.value);
      console.log(searchValue);
    }
  };

  return (
    <nav
      className="p-3 px-4 mx-5 radius-15 mt-3 navbar navbar-expand-lg navbar-ligh"
      style={{
        background: "#eef2f3",
      }}
    >
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
        <div
          className="collapse navbar-collapse d-flex justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav justify-content-evenly mb-2 mb-lg-0 gap-2 px-2 w-75">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navActive navItem p-1 px-2" : "navItem p-1 px-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  isActive ? "navActive navItem p-1 px-2" : "navItem p-1 px-2"
                }
              >
                Categories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/membership"
                className={({ isActive }) =>
                  isActive ? "navActive navItem p-1 px-2" : "navItem p-1 px-2"
                }
              >
                Membership
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive ? "navActive navItem p-1 px-2" : "navItem p-1 px-2"
                }
              >
                Search
              </NavLink>
            </li>
          </ul>
        </div>
        <form className="input-group d-inlign-block w-25" onSubmit={searchfun}>
          <input
            type="text"
            className="form-control"
            placeholder="Book's Name / Author"
            ref={searchBar}
            value={searchInput}
            onChange={(e) => setSearchI(e.target.value)}
            aria-label="Recipient's username"
            aria-describedby="searchBtn"
            style={{ borderRadius: "10px 0 0 10px", boxShadow: "none" }}
          />
          <button
            className="btn btn-outline-success"
            id="searchBtn"
            type="submit"
            style={{
              borderRadius: "0 10px 10px 0",
              border: "#ddd solid 1px",
            }}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
