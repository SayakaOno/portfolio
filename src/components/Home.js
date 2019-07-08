import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import imagesLoaded from 'imagesloaded';
import { introduction } from '../data';

class Home extends React.Component {
  constructor(props) {
    super(props);
    introduction.forEach((e, index) => {
      this['input' + (index + 1)] = React.createRef();
    });
  }

  componentDidMount() {
    imagesLoaded(document.querySelector('.index-banner'), () => {
      let timeout = 1500;
      introduction.forEach((li, index) => {
        setTimeout(() => {
          this['input' + (index + 1)].current.className = 'fas fa-check-square';
        }, timeout);
        timeout += 200;
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Fade>
          <section name="home" id="home" className="index-banner home">
            <div className="top-container">
              <h2>Sayaka Ono</h2>
              <h1>React Developer</h1>
              <div className="checkboxes">
                <ul>
                  {introduction.map((elem, index) => (
                    <li key={index}>
                      <i
                        className="far fa-square"
                        ref={this['input' + (index + 1)]}
                      />
                      {` ${elem}`}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className="ui inverted basic button"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={400}
              >
                PORTFOLIO <i className="fas fa-angle-down" />
              </Link>
              <div className="hero_sns_icons">
                <a
                  href="https://github.com/SayakaOno"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="github icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sayakaono/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="linkedin icon" />
                </a>
              </div>
            </div>
          </section>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Home;
