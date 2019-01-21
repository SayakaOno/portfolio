import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-brand">
        <span>sayaka</span>
        <div className="decoration">
          <span className="ui red empty circular label" />
          <span className="ui orange empty circular label" />
          <span className="ui yellow empty circular label" />
          <span className="ui olive empty circular label" />
          <span className="ui green empty circular label" />
          <span className="ui teal empty circular label" />
          <span className="ui blue empty circular label" />
        </div>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/portfolio">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
