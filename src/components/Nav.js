import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
function Navbar() {
  return (
    <div>
      <nav className="nav-bar container">
        <div className="div-about">
          <Link to="/">
            <h2 className="logo">Shortly</h2>
          </Link>
          <Link to="/">
            <h2>Features</h2>
          </Link>
          <Link to="/">
            <h2>Pricing</h2>
          </Link>
          <Link to="/">
            <h2>Resources</h2>
          </Link>
        </div>
        <div className="login-signup">
          <Link to="/login">
            <h2>Login</h2>
          </Link>
          <Link to="/signup">
            <h2 className="signup">Sign Up</h2>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
