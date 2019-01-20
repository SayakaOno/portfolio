import React from "react";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Projects</h2>
        <div>
          <i class="filter icon" />
        </div>
        <div>
          <span>Web site</span>
          <span>Web application</span>
          <span>React</span>
          <span>Redux</span>
          <span>WordPress</span>
          <span>jQuery</span>
          <span>PHP</span>
          <span>API</span>
        </div>
        <section className="cases-boxs">
          <a href="case1.html">
            <div className="cases-link">
              <p>English practice</p>
            </div>
          </a>
          <a href="cases1.html">
            <div className="cases-link">
              <p>Translator</p>
            </div>
          </a>
          <a href="cases1.html">
            <div className="cases-link">
              <p>犬猫譲渡センター</p>
            </div>
          </a>
          <a href="cases1.html">
            <div className="cases-link">
              <p>Image search</p>
            </div>
          </a>
        </section>
        {/* <section className="index-links">
          <a href="portfolio.html">
            <div className="index-boxlink-square">
              <h3>Portfolio</h3>
            </div>
          </a>
          <a href="about.html">
            <div className="index-boxlink-rectangle">
              <h3>About</h3>
            </div>
          </a>
          <a href="contact.html">
            <div className="index-boxlink-square">
              <h3>Contact</h3>
            </div>
          </a>
        </section> */}
      </div>
    );
  }
}

export default Portfolio;
