import React from 'react';
import Fade from 'react-reveal/Fade';

import imagesLoaded from 'imagesloaded';
import { introduction } from '../data';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.input1 = React.createRef();
    this.input2 = React.createRef();
    this.input3 = React.createRef();
    this.input4 = React.createRef();
    this.input5 = React.createRef();
  }

  componentDidMount() {
    imagesLoaded(
      document.querySelector('.index-banner'),
      {
        background: true
      },
      () => {
        setTimeout(() => {
          this.input1.current.className = 'fas fa-check-square';
        }, 1500);
        setTimeout(() => {
          this.input2.current.className = 'fas fa-check-square';
        }, 1700);
        setTimeout(() => {
          this.input3.current.className = 'fas fa-check-square';
        }, 1900);
        setTimeout(() => {
          this.input4.current.className = 'fas fa-check-square';
        }, 2100);
        setTimeout(() => {
          this.input5.current.className = 'fas fa-check-square';
        }, 2300);
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
