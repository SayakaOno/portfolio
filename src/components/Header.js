import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';

class Header extends React.Component {
  scrollToTop = this.scrollToTop.bind(this);

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    const flag = this.props.language === 'en' ? 'jp' : 'ca';

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
                  <Link
                    activeClassName='active'
                    to='portfolio'
                    spy={true}
                    smooth={true}
                    duration={400}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName='active'
                    to='about'
                    spy={true}
                    smooth={true}
                    duration={400}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    activeClassName='active'
                    to='contact'
                    spy={true}
                    smooth={true}
                    duration={400}
                  >
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

            {/* <div className='lang'>
            <i
              className={`flag ${flag}`}
              onClick={this.props.onLanguageChange}
            />
          </div> */}
          </div>
        </Fade>
      </header>
    );
  }
}

export default Header;
