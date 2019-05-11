import React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const API_PATH = 'https://sayaka38.minibird.jp/location.php';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: 'en', menuOpen: false };

    this.humbergerNav = React.createRef();
    this.inputBox = React.createRef();
  }

  async componentDidMount() {
    const response = await axios({
      method: 'get',
      url: `${API_PATH}`
    });
    if (response && response.data == 'ja') {
      this.setState({
        language: 'ja'
      });
    } else {
      this.setState({
        language: 'en'
      });
    }

    window.addEventListener('click', e => {
      if (!this.state.menuOpen || e.target.closest('nav')) {
        return;
      }
      this.toggleMenuOpenState();
    });
  }

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
        <nav
          ref={this.humbergerNav}
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
                <a className='item' to='/portfolio'>
                  Portfolio
                </a>
              </li>
              <li>
                <a className='item' to='/about'>
                  About
                </a>
              </li>
              <li>
                <a className='item' to='/contact'>
                  Contact
                </a>
              </li>
              <li>
                <div
                  className='item language'
                  onClick={this.handleLanguageChange}
                >
                  {this.state.language === 'en' ? '日本語' : 'English'}
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <Header
          onLanguageChange={this.handleLanguageChange}
          language={this.state.language}
        />

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
