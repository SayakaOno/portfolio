import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: 'en' };

    this.humbergerNav = React.createRef();
    this.inputBox = React.createRef();
  }

  handleLanguageChange = () => {
    this.setState(prevState => {
      return { language: prevState.language === 'en' ? 'ja' : 'en' };
    });
  };

  toggleMenu = e => {
    if (e.target.closest('ul#menu') && !e.target.closest('ul#menu li')) {
      return;
    }
    this.humbergerNav.current.classList.toggle('open');
    if (e.target.closest('ul#menu li')) {
      this.inputBox.current.checked = !this.inputBox.current.checked;
    }
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
                  className='humberger-menu'
                >
                  <div id='menuToggle' onClick={this.toggleMenu}>
                    <input ref={this.inputBox} type='checkbox' />
                    <span />
                    <span />
                    <span />
                    <ul id='menu'>
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
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                {/* <Contact /> */}
              </React.Fragment>
            )}
          />
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
