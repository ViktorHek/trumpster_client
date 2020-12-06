import React from "react";
import "../index.css";
// import LoginForm from "./components/LoginForm";

function Header() {
  return (
    <nav className="header">
      <div className="header-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <div className="nav-links">Trumpster!</div>
          </li>
          <li className="nav-item">
            <button
              className="nav-links"
            >
              login
            </button>
          </li>
          <li className="nav-item">
            <div className="nav-links">Create an account</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;