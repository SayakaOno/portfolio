import React from 'react';
import Fade from 'react-reveal/Fade';

import imagesLoaded from 'imagesloaded';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.input1 = React.createRef();
    this.input2 = React.createRef();
    this.input3 = React.createRef();
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
                  <li>
                    {' '}
                    <i className='far fa-square' ref={this.input1} /> Checkbox1
                  </li>
                  <li>
                    {' '}
                    <i className='far fa-square' ref={this.input2} /> Vancouver2
                  </li>
                  <li>
                    {' '}
                    <i className='far fa-square' ref={this.input3} /> Checkbox3
                  </li>
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
