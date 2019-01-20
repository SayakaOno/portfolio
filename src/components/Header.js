import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-brand">
        sayaka
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/portfolio">Projects</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "100%", height: "1px" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </header>
  );
};

export default Header;
