import React from "react";
import axios from "axios";
// just for the test
const API_PATH = "http://localhost:32773/contact.php";

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  console.log("You have entered an invalid email address!");
  return false;
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { text: "", error: true },
      email: { text: "", error: true },
      message: { text: "", error: true },
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
        success: "form-group row has-success",
        error: "form-group row has-warning"
      },
      input: {
        success: "form-control form-control-success",
        error: "form-control"
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
      if (target.name === "email" && target.value) {
        error = !ValidateEmail(target.value);
      } else if (!target.value) {
        error = true;
      }
      return {
        [target.name]: { text: target.value, error }
      };
    });
  };

  renderButton = () => {
    for (let key of ["name", "email", "message"]) {
      if (this.state[key].error) {
        return null;
      }
    }
    return (
      <button
        type="submit"
        className="btn btn-outline-success"
        onClick={this.handleSubmit}
      >
        Send
      </button>
    );
  };

  renderResultMessage = () => {
    if (this.state.mailSent) {
      return "Thank you for contacting me.";
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
      method: "post",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: { name: name.text, email: email.text, message: message.text }
    });
    if (!response || response.data.message) {
      this.setState({ errorMessage: response.data.message });
    } else {
      this.setState({
        mailSent: response.data.sent,
        error: response.data.error ? response.data.error : null,
        name: { text: "", error: true },
        email: { text: "", error: true },
        message: { text: "", error: true }
      });
    }
  };

  render() {
    return (
      <div className="wrapper contact page">
        <h2>Contact</h2>
        <p>Please feel free to contact me !</p>
        <div className="container">
          <form>
            <div className={this.formClass("name", "div")}>
              <label htmlFor="name" className="col-4 col-sm-2">
                Name
              </label>
              <div className="col-10 col-sm-10">
                <input
                  id="name"
                  ref={this.nameInput}
                  type="text"
                  className={this.formClass("name", "input")}
                  value={this.state.name.text}
                  onChange={this.handleChange}
                  name="name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className={this.formClass("email", "div")}>
              <label htmlFor="email" className="col-4 col-sm-2">
                Email
              </label>
              <div className="col-10 col-sm-10">
                <input
                  id="email"
                  ref={this.emailInput}
                  type="email"
                  className={this.formClass("email", "input")}
                  value={this.state.email.text}
                  onChange={this.handleChange}
                  name="email"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className={this.formClass("message", "div")}>
              <label htmlFor="message" className="col-4 col-sm-2">
                Message
              </label>
              <div className="col-10 col-sm-10">
                <textarea
                  id="message"
                  ref={this.messageInput}
                  type="email"
                  className={this.formClass("message", "input")}
                  rows="5"
                  value={this.state.message.text}
                  onChange={this.handleChange}
                  name="message"
                />
              </div>
            </div>
            <div className="button-container">{this.renderButton()}</div>
          </form>
          <div className="result-message">{this.renderResultMessage()}</div>
        </div>
      </div>
    );
  }
}

export default Contact;
