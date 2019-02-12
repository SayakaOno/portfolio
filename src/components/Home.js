import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

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
    this.counter = 1;
  }

  componentDidMount() {
    setTimeout(this.animateText, 500);
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
    let id = setInterval(() => {
      if (this.counter !== value.length + 1) {
        this.setState({ [key]: value.slice(0, this.counter) });
        this.counter++;
      } else {
        this.counter = 1;
        clearInterval(id);
        if (callback) {
          callback();
        }
      }
    }, 100);
  };

  addClassToVerticalCenter = callback => {
    setTimeout(
      () => (this.verticalCenter.current.className += ' additional'),
      700
    );
    callback();
  };

  showPortfolioLink = () => {
    setTimeout(() => {
      this.linkToPortfolio.current.className += ' show';
    }, 2000);
  };

  render() {
    return (
      <React.Fragment>
        <section className='index-banner home'>
          <div ref={this.verticalCenter} className='vertical-center'>
            <h2>{this.state.name}</h2>
            <h1>{this.state.title}</h1>
            <p>{this.state.location}</p>
            <div ref={this.linkToPortfolio} className='link-to-portfolio'>
              <Link className='hvr-sweep-to-right' to='/portfolio'>
                PORTFOLIO <i className='fas fa-angle-double-right' />
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
