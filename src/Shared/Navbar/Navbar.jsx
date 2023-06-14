import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Stack_Overflow-Logo.png";
import { FaSearch } from "react-icons/fa";
import Avatar from "../../Components/Avatar/Avatar";
import "./style.css";

const Navbar = () => {
  let user = null;

  return (
    <nav>
      <div className="navbar">
        <NavLink to="/" className="nav-item nav-logo">
          <img src={Logo} alt="" />
        </NavLink>
        <NavLink className="nav-item nav-btn" to="/">
          About
        </NavLink>
        <NavLink className="nav-item nav-btn" to="/">
          Products
        </NavLink>
        <NavLink className="nav-item nav-btn" to="/">
          For Teams
        </NavLink>
        <form>
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" />
        </form>
        {user === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px="10px"
              py="7px"
              borderRadius="50%"
              color="white"
            >
              <Link
                to="/user"
                style={{ color: "white", textDecoration: "none" }}
              >
                M
              </Link>
            </Avatar>
            <button className="nav-item nav-links">Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
