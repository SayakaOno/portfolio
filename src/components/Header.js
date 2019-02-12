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
            <div className='decoration'>
              <span className='ui red empty circular label' />
              <span className='ui orange empty circular label' />
              <span className='ui yellow empty circular label' />
              <span className='ui olive empty circular label' />
              <span className='ui green empty circular label' />
              <span className='ui teal empty circular label' />
              <span className='ui blue empty circular label' />
              <span className='ui violet empty circular label' />
              <span className='ui purple empty circular label' />
              <span className='ui pink empty circular label' />
            </div>
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
