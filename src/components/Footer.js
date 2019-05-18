import React from 'react';

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
                  200
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
        <p ref={this.message} className='message'>
          <i className='far fa-square' ref={this.checkbox} />{' '}
          {this.state.message}
        </p>
        <p className='copylight'>
          Made with <i className='heart icon' /> &copy;
          {` ${new Date().getFullYear()} Sayaka Ono`}
        </p>
      </footer>
    );
  }
}

export default Footer;
