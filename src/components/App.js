import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import NoMatch from '../components/NoMatch';

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
    console.log(response.data);
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
      <HashRouter hashType='noslash'>
        <ScrollToTop>
          <Route
            render={({ location }) => (
              <React.Fragment>
                <nav
                  ref={this.humbergerNav}
                  role='navigation'
                  className={`humberger-menu${
                    this.state.menuOpen ? ' open' : ''
                  }`}
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
                        <Link className='item' to='/portfolio'>
                          Portfolio
                        </Link>
                      </li>
                      <li>
                        <Link className='item' to='/about'>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className='item' to='/contact'>
                          Contact
                        </Link>
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

                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames='fade'
                    timeout={300}
                  >
                    <Switch location={location}>
                      <Route
                        path='/'
                        exact
                        render={() => <Home language={this.state.language} />}
                      />
                      <Route
                        path='/portfolio'
                        render={() => (
                          <Portfolio language={this.state.language} />
                        )}
                      />
                      <Route
                        path='/about'
                        render={() => <About language={this.state.language} />}
                      />
                      <Route
                        path='/contact'
                        render={() => (
                          <Contact language={this.state.language} />
                        )}
                      />
                      <Route
                        render={() => (
                          <NoMatch language={this.state.language} />
                        )}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </React.Fragment>
            )}
          />
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
