import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer>
      <Fade>
        <p className='message'>
          <i className='fas fa-check-square' /> Thank you for visiting my site!
        </p>
      </Fade>
      <p className='copylight'>
        Made with <i className='heart icon' /> &copy;
        {` ${new Date().getFullYear()} Sayaka Ono`}
      </p>
    </footer>
  );
};

export default Footer;
