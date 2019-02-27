import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const flag = this.props.language === 'en' ? 'jp' : 'ca';

    return (
      <header>
        <div className='header-content'>
          <Link to='/' className='header-brand'>
            <span>sayaka</span>
          </Link>

          <nav className='pc-menu'>
            <ul>
              <li>
                <NavLink activeClassName='active' to='/portfolio'>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/about'>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName='active' to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className='lang'>
            <i
              className={`flag ${flag}`}
              onClick={this.props.onLanguageChange}
            />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
