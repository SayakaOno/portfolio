import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-sm">
        <a
          href="https://github.com/SayakaOno"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="github icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sayakaono/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="linkedin icon" />
        </a>
      </div>
      <p>
        Made with <i className="heart icon" /> &copy;
        {` ${new Date().getFullYear()} Sayaka Ono`}
      </p>
    </footer>
  );
};

export default Footer;
