import React from "react";

const Header = () => {
  return (
    <header>
      <a href="index.html" className="header-brand">
        sayaka
      </a>
      <nav>
        <ul>
          <li>
            <a href="portfolio.html">Projects</a>
          </li>
          <li>
            <a href="about.html">About me</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
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
