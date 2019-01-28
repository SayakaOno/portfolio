import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
      return { language: prevState.language === "en" ? "ja" : "en" };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <React.Fragment>
              <Header
                onLanguageChange={this.handleLanguageChange}
                language={this.state.language}
              />

              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300}
                >
                  <Switch location={location}>
                    <Route
                      path="/"
                      exact
                      render={() => <Home language={this.state.language} />}
                    />
                    <Route
                      path="/portfolio"
                      render={() => (
                        <Portfolio language={this.state.language} />
                      )}
                    />
                    <Route
                      path="/about"
                      render={() => <About language={this.state.language} />}
                    />
                    <Route
                      path="/contact"
                      render={() => <Contact language={this.state.language} />}
                    />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              {/* <Footer /> */}
              {/* <Contact /> */}
            </React.Fragment>
          )}
        />
      </BrowserRouter>
    );
  }
}

export default App;
