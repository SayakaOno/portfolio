import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import imagesLoaded from 'imagesloaded';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      location: ''
    };
    this.verticalCenter = React.createRef();
    this.linkToPortfolio = React.createRef();
    this.id = null;
    this.showPortfolioLinkId = null;
    this.addClassToVerticalCenterId = null;
    this.animateTextId = null;
    this.counter = 1;
  }

  componentDidMount() {
    imagesLoaded(
      document.querySelector('.index-banner'),
      {
        background: true
      },
      () => {
        this.animateTextId = setTimeout(this.animateText, 500);
      }
    );
  }

  componentWillUnmount() {
    clearInterval(this.animateTextId);
    clearInterval(this.id);
    clearInterval(this.showPortfolioLinkId);
    clearInterval(this.addClassToVerticalCenterId);
  }

  animateText = () => {
    let name = { name: 'Sayaka Ono' };
    let title = { title: 'Web Developer' };
    let location = { location: 'Vancouver' };

    this.setText(name, () =>
      this.setText(title, () =>
        this.setText(location, () =>
          this.addClassToVerticalCenter(this.showPortfolioLink)
        )
      )
    );
  };

  setText = (text, callback = null) => {
    let key = Object.keys(text)[0];
    let value = Object.values(text)[0];
    this.id = setInterval(() => {
      if (this.counter !== value.length + 1) {
        this.setState({ [key]: value.slice(0, this.counter) });
        this.counter++;
      } else {
        this.counter = 1;
        clearInterval(this.id);
        if (callback) {
          callback();
        }
      }
    }, 100);
  };

  addClassToVerticalCenter = callback => {
    if (!this.verticalCenter.current) {
      return;
    }
    this.addClassToVerticalCenterId = setTimeout(
      () => (this.verticalCenter.current.className += ' additional'),
      700
    );
    callback();
  };

  showPortfolioLink = () => {
    if (!this.linkToPortfolio.current) {
      return;
    }
    this.showPortfolioLinkId = setTimeout(() => {
      this.linkToPortfolio.current.className += ' show';
    }, 2000);
  };

  render() {
    return (
      <React.Fragment>
        <section className='index-banner home'>
          <Helmet>
            <title>Sayaka Ono | Web Developer</title>
            <meta
              name='description'
              content='Portfolio Website of Sayaka Ono, Web Developer based in Vancouver'
            />
          </Helmet>
          <div ref={this.verticalCenter} className='vertical-center'>
            <h2>{this.state.name}</h2>
            <h1>{this.state.title}</h1>
            <p>{this.state.location}</p>
            <div ref={this.linkToPortfolio} className='link-to-portfolio'>
              <Link className='hvr-icon-float-away pulse' to='/portfolio'>
                PORTFOLIO <i className='fas fa-angle-double-right hvr-icon' />
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
