import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";

class App extends React.Component {
  state = { language: "en" };

  handleLanguageChange = () => {
    this.setState(prevState => {
      return { language: prevState.language === "en" ? "jp" : "en" };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header
            onLanguageChange={this.handleLanguageChange}
            language={this.state.language}
          />
          <Route
            path="/"
            exact
            render={() => <Home language={this.state.language} />}
          />
          <Route
            path="/portfolio"
            render={() => <Portfolio language={this.state.language} />}
          />
          <Route
            path="/about"
            render={() => <About language={this.state.language} />}
          />
          <Route
            path="/contact"
            render={() => <Contact language={this.state.language} />}
          />
          <Footer />
          {/* <Contact /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
