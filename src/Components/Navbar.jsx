import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Logo from "../assets/GharKiRasoi.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/public/images/GharKiRasoi.png" alt="Logo" className="logo" />
        <span>Ghar Ki Rasoi</span>
      </div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/all-items">All Items</Link>
      </div>
      <div className="navbar-login">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
