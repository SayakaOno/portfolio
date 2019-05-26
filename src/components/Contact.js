import React from 'react';
import axios from 'axios';
import path from 'path';
import Fade from 'react-reveal/Fade';
import { contactData } from '../data';

const API_PATH = path.join(window.location.href, '../contact.php');

function ValidateEmail(mail) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(mail)) {
    return true;
  }
  // console.log('You have entered an invalid email address!');
  return false;
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { text: '', error: true },
      email: { text: '', error: true },
      message: { text: '', error: true },
      mailSent: null,
      errorMessage: null
    };
  }

  componentWillUnmount() {
    this.setState({ mailSent: null, error: null });
  }

  formClass = (name, element) => {
    let classes = {
      div: {
        success: 'form-group row has-success',
        error: 'form-group row has-warning'
      },
      input: {
        success: 'form-control form-control-success',
        error: 'form-control'
      }
    };
    return this.state[name].error
      ? classes[element].error
      : classes[element].success;
  };

  handleChange = e => {
    const { target } = e;
    this.setState(() => {
      let error = false;
      if (target.name === 'email' && target.value) {
        error = !ValidateEmail(target.value);
      } else if (!target.value) {
        error = true;
      }
      return {
        [target.name]: { text: target.value, error }
      };
    });
  };

  renderButton = lang => {
    for (let key of ['name', 'email', 'message']) {
      if (this.state[key].error) {
        return (
          <button type='submit' className='ui disabled button'>
            {contactData.send[lang]}
          </button>
        );
      }
    }
    return (
      <button type='submit' className='ui button' onClick={this.handleSubmit}>
        {contactData.send[lang]}
      </button>
    );
  };

  renderResultMessage = () => {
    if (this.state.mailSent) {
      return this.props.language === 'en'
        ? 'Thank you for contacting me :)'
        : 'メッセージをお送りくださり、ありがとうございます。';
    } else if (this.state.errorMessage) {
      return this.state.errorMessage;
    } else {
      return null;
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const response = await axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: { name: name.text, email: email.text, message: message.text }
    });
    if (!response || response.data.message) {
      this.setState({
        errorMessage: response.data.message[this.props.language]
      });
    } else {
      this.setState({
        mailSent: response.data.sent,
        error: response.data.error && response.data.error,
        name: { text: '', error: true },
        email: { text: '', error: true },
        message: { text: '', error: true }
      });
    }
  };

  render() {
    const lang = this.props.language;
    return (
      <React.Fragment>
        <Fade>
          <div name='contact' id='contact' className='wrapper contact page'>
            <h2>Contact</h2>
            {contactData.description[lang]}
            <form>
              <div className={this.formClass('name', 'div')}>
                <div className='col-12'>
                  <input
                    id='name'
                    ref={this.nameInput}
                    type='text'
                    className={this.formClass('name', 'input')}
                    value={this.state.name.text}
                    onChange={this.handleChange}
                    name='name'
                    autoComplete='off'
                    placeholder={contactData.name[lang]}
                  />
                </div>
              </div>
              <div className={this.formClass('email', 'div')}>
                <div className='col-12'>
                  <input
                    id='email'
                    ref={this.emailInput}
                    type='email'
                    className={this.formClass('email', 'input')}
                    value={this.state.email.text}
                    onChange={this.handleChange}
                    name='email'
                    autoComplete='off'
                    placeholder={contactData.email[lang]}
                  />
                </div>
              </div>
              <div className={this.formClass('message', 'div')}>
                <div className='col-12'>
                  <textarea
                    id='message'
                    ref={this.messageInput}
                    type='email'
                    className={this.formClass('message', 'input')}
                    rows='5'
                    value={this.state.message.text}
                    onChange={this.handleChange}
                    name='message'
                    placeholder={contactData.message[lang]}
                  />
                </div>
              </div>
              <div className='button-container'>{this.renderButton(lang)}</div>
            </form>
            <div className='result-message'>{this.renderResultMessage()}</div>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Contact;
