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
        }, 2000);
        setTimeout(() => {
          this.input3.current.className = 'fas fa-check-square';
        }, 2500);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <Fade>
          <section name='home' id='home' className='index-banner home'>
            <div className='vertical-center'>
              <div className='top-container'>
                <h2>Sayaka Ono</h2>
                <h1>React Developer</h1>
                {/* <p>Vancouver</p> */}
                {/* <div ref={this.linkToPortfolio} className='link-to-portfolio'>
              <a className='hvr-icon-float-away pulse' href='#portfolio'>
                PORTFOLIO <i className='fas fa-angle-double-right hvr-icon' />
              </a>
            </div> */}
                <div className='ui four cards'>
                  <div className='input' href='#portfolio'>
                    <i className='far fa-square' ref={this.input1} /> Checkbox1
                  </div>
                  <div className='input' href='#about'>
                    <i className='far fa-square' ref={this.input2} /> Vancouver2
                  </div>
                  <div className='input' href='#contact'>
                    <i className='far fa-square' ref={this.input3} /> Checkbox3
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Home;
