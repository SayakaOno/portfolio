import React from 'react';
import Fade from 'react-reveal/Fade';

import imagesLoaded from 'imagesloaded';

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: '',
    //   title: '',
    //   location: ''
    // };
    this.verticalCenter = React.createRef();
    this.linkToPortfolio = React.createRef();
    this.id = null;
    this.showPortfolioLinkId = null;
    this.addClassToVerticalCenterId = null;
    this.animateTextId = null;
    this.counter = 1;
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
        this.animateText();
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
      // () => {
      //   this.animateTextId = setTimeout(this.animateText, 500);
      // }
    );
  }

  // componentWillUnmount() {
  //   clearInterval(this.animateTextId);
  //   clearInterval(this.id);
  //   clearInterval(this.showPortfolioLinkId);
  //   clearInterval(this.addClassToVerticalCenterId);
  // }

  animateText = () => {
    // let name = { name: 'Sayaka Ono' };
    // let title = { title: 'React Developer' };
    // let location = { location: 'Vancouver' };

    // this.setText(name, () =>
    //   this.setText(title, () =>
    //     this.setText(location, () =>
    this.addClassToVerticalCenter(this.showPortfolioLink);
    //     )
    //   )
    // );
  };

  // setText = (text, callback = null) => {
  //   let key = Object.keys(text)[0];
  //   let value = Object.values(text)[0];
  //   this.id = setInterval(() => {
  //     if (this.counter !== value.length + 1) {
  //       this.setState({ [key]: value.slice(0, this.counter) });
  //       this.counter++;
  //     } else {
  //       this.counter = 1;
  //       clearInterval(this.id);
  //       if (callback) {
  //         callback();
  //       }
  //     }
  //   }, 100);
  // };

  addClassToVerticalCenter = callback => {
    if (!this.verticalCenter.current) {
      return;
    }
    this.addClassToVerticalCenterId = setTimeout(
      () => (this.verticalCenter.current.className += ' additional'),
      0
    );
    // callback();
  };

  // showPortfolioLink = () => {
  //   if (!this.linkToPortfolio.current) {
  //     return;
  //   }
  //   this.showPortfolioLinkId = setTimeout(() => {
  //     this.linkToPortfolio.current.className += ' show';
  //   }, 2000);
  // };

  render() {
    return (
      <React.Fragment>
        <Fade>
          <section id='home' className='index-banner home'>
            <div ref={this.verticalCenter} className='vertical-center'>
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
