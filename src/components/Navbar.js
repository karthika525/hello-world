import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
  <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
  <div className="container">
  <h4 className="navbar-brand">My Personal Website</h4>
  <ul className="navbar-nav">
  <li className="nav-item"><NavLink to="/" end className="nav-link">Home</NavLink></li>
  <li className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></li>
  <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
  </ul>
  </div>
   </nav>
  );
}

export default Navbar;
