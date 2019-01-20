import React from "react";

class Portfolio extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <h2>Projects</h2>
        <section class="cases-boxs">
          <a href="case1.html">
            <div class="cases-link">
              <p>case1</p>
            </div>
          </a>
          <a href="cases1.html">
            <div class="cases-link">
              <p>case1</p>
            </div>
          </a>
          <a href="cases1.html">
            <div class="cases-link">
              <p>case1</p>
            </div>
          </a>
          <a href="cases1.html">
            <div class="cases-link">
              <p>case1</p>
            </div>
          </a>
        </section>
        <section class="index-links">
          <a href="portfolio.html">
            <div class="index-boxlink-square">
              <h3>Portfolio</h3>
            </div>
          </a>
          <a href="about.html">
            <div class="index-boxlink-rectangle">
              <h3>About</h3>
            </div>
          </a>
          <a href="contact.html">
            <div class="index-boxlink-square">
              <h3>Contact</h3>
            </div>
          </a>
        </section>
      </div>
    );
  }
}

export default Portfolio;
