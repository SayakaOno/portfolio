import React from 'react';
import Fade from 'react-reveal/Fade';

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
    imagesLoaded(
      document.querySelector('.index-banner'),
      {
        background: true
      },
      () => {
        let timeout = 1500;
        introduction.forEach((li, index) => {
          setTimeout(() => {
            this['input' + (index + 1)].current.className =
              'fas fa-check-square';
          }, timeout);
          timeout += 200;
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <Fade>
          <section name='home' id='home' className='index-banner home'>
            <div className='top-container'>
              <h2>Sayaka Ono</h2>
              <h1>React Developer</h1>
              <div className='checkboxes'>
                <ul>
                  {introduction.map((elem, index) => (
                    <li key={index}>
                      <i
                        className='far fa-square'
                        ref={this['input' + (index + 1)]}
                      />
                      {` ${elem}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Home;
