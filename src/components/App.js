import React from 'react';
import { Link } from 'react-scroll';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en',
      menuOpen: false
    };

    this.inputBox = React.createRef();
    this.headerBar = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', e => {
      if (!this.state.menuOpen || e.target.closest('nav')) {
        return;
      }
      this.toggleMenuOpenState();
    });

    window.addEventListener('scroll', () => {
      this.handleHeaderbarVisibility();
    });

    this.handleHeaderbarVisibility();
  }

  handleHeaderbarVisibility = () => {
    if (window.scrollY >= window.innerHeight) {
      this.headerBar.current.className = '';
    } else {
      this.headerBar.current.className = 'none';
    }
  };

  componentWillUnmount() {
    window.removeEventListener('click', e => {
      if (!this.state.menuOpen || e.target.closest('nav')) {
        return;
      }
      this.toggleMenuOpenState();
    });
  }
  handleLanguageChange = () => {
    this.setState(prevState => {
      return { language: prevState.language === 'en' ? 'ja' : 'en' };
    });
  };

  toggleMenuOpenState = () => {
    this.setState(prevState => {
      return {
        menuOpen: !prevState.menuOpen
      };
    });
  };

  toggleMenu = e => {
    if (e.target.closest('ul#menu') && !e.target.closest('ul#menu li')) {
      return;
    }
    this.toggleMenuOpenState();
  };

  render() {
    return (
      <React.Fragment>
        <div ref={this.headerBar} id='header-bar' className='none'>
          <nav
            role='navigation'
            className={`humberger-menu${this.state.menuOpen ? ' open' : ''}`}
          >
            <div id='menuToggle'>
              <input
                ref={this.inputBox}
                type='checkbox'
                onChange={this.toggleMenu}
                checked={this.state.menuOpen}
              />
              <span />
              <span />
              <span />

              <ul id='menu' onClick={this.toggleMenu}>
                <li>
                  <Link
                    className='item'
                    to='portfolio'
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    className='item'
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className='item'
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <div className='sm_sns_icons'>
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
                </li>
              </ul>
            </div>
          </nav>
          <Header
            onLanguageChange={this.handleLanguageChange}
            language={this.state.language}
          />
        </div>

        <Home language={this.state.language} />
        <Portfolio language={this.state.language} />
        <About language={this.state.language} />
        <Contact language={this.state.language} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
