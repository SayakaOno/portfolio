import React from 'react';

class Header extends React.Component {
  render() {
    const flag = this.props.language === 'en' ? 'jp' : 'ca';

    return (
      <header>
        <div className='header-content'>
          <a className='header-brand' href='#home'>
            <span>sayaka</span>
          </a>

          <nav className='pc-menu'>
            <ul>
              <li>
                <a activeClassName='active' href='#portfolio'>
                  Portfolio
                </a>
              </li>
              <li>
                <a activeClassName='active' href='#about'>
                  About
                </a>
              </li>
              <li>
                <a activeClassName='active' href='#contact'>
                  Contact
                </a>
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
