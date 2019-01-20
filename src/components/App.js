import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import About from "../components/About";
import Contact from "../components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
