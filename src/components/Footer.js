import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-sm">
        <a href="">
          <i className="fab fa-github" />
        </a>
        <a href="">
          <i className="fab fa-twitter-square" />
        </a>
      </div>
      <p>&copy;{` ${new Date().getFullYear()} Sayaka Ono`}</p>
    </footer>
  );
};

export default Footer;
