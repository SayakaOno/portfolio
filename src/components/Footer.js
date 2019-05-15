import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p className='message'>
        <i className='fas fa-check-square' /> Thank you for visiting my site!
      </p>
      <p className='copylight'>
        Made with <i className='heart icon' /> &copy;
        {` ${new Date().getFullYear()} Sayaka Ono`}
      </p>
    </footer>
  );
};

export default Footer;
