import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header-brand">
        <span>sayaka</span>
        <div className="decoration">
          <a class="ui red empty circular label" />
          <a class="ui orange empty circular label" />
          <a class="ui yellow empty circular label" />
          <a class="ui olive empty circular label" />
          <a class="ui green empty circular label" />
          <a class="ui teal empty circular label" />
          <a class="ui blue empty circular label" />
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
