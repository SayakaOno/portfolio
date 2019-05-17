import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';

class Header extends React.Component {
  state = {
    menuOpen: false
  };

  render() {
    return (
      <header>
        <Fade>
          <div className='header-content'>
            <Link
              className='header-brand'
              to='home'
              spy={true}
              smooth={true}
              duration={400}
            >
              <span>sayaka</span>
            </Link>

            <nav className='pc-menu'>
              <ul>
                <li>
                  <Link to='portfolio' spy={true} smooth={true} duration={400}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to='about' spy={true} smooth={true} duration={400}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to='contact' spy={true} smooth={true} duration={400}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className='sns_icons'>
              <a
                href='https://github.com/SayakaOno'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='github icon' />
              </a>
              <a
                href='https://www.linkedin.com/in/sayakaono/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='linkedin icon' />
              </a>
            </div>
          </div>
        </Fade>
      </header>
    );
  }
}

export default Header;
