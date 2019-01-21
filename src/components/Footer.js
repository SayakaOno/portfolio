import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-sm">
        <a href="https://github.com/SayakaOno">
          <i className="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/sayakaono/">
          <i className="linkedin icon" />
        </a>
      </div>
      <p>&copy;{` ${new Date().getFullYear()} Sayaka Ono`}</p>
    </footer>
  );
};

export default Footer;
