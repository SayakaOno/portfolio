import React from 'react';
import Fade from 'react-reveal/Fade';

const message = 'Thank you for visiting my site!'.split('');

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      show: false
    };

    this.message = React.createRef();
    this.checkbox = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.showMessage);
  }

  showMessage = () => {
    if (!this.state.show) {
      if (
        this.message.current.getBoundingClientRect().top < window.innerHeight
      ) {
        setTimeout(() => {
          this.message.current.className = 'message show';
          setTimeout(() => {
            let id = setInterval(() => {
              if (message.length) {
                this.setState(prevState => {
                  return { message: prevState.message + message.shift() };
                });
              } else {
                clearInterval(id);
                setTimeout(
                  () =>
                    (this.checkbox.current.className = 'fas fa-check-square'),
                  900
                );
              }
            }, 10);
          }, 700);
        }, 100);
        this.setState({ show: true });
        window.removeEventListener('scroll', this.showMessage);
      }
    }
  };
  render() {
    return (
      <footer>
        {/* <Fade> */}
        <p ref={this.message} className='message'>
          <i className='far fa-square' ref={this.checkbox} />{' '}
          {this.state.message}
        </p>
        {/* </Fade> */}
        <p className='copylight'>
          Made with <i className='heart icon' /> &copy;
          {` ${new Date().getFullYear()} Sayaka Ono`}
        </p>
      </footer>
    );
  }
}

export default Footer;
