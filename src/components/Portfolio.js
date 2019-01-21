import React from "react";
import Modal from "./Modal";
import Project from "./Project";

class Portfolio extends React.Component {
  state = { selectedProject: null };

  handleClick = e => {
    if (e.target.className !== "project-box") {
      return;
    }
    this.selectProject(e.target.id);
  };

  selectProject = id => {
    this.setState({ selectedProject: id });
  };

  render() {
    return this.state.selectedProject ? (
      <Modal onDismiss={() => this.setState({ selectedProject: null })}>
        <Project
          id={this.state.selectedProject}
          onDismiss={() => this.setState({ selectedProject: null })}
          selectProject={this.selectProject}
        />
      </Modal>
    ) : (
      <div className="wrapper">
        <h2>Portfolio</h2>
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
        <section className="cases-boxs" onClick={this.handleClick}>
          <div id={0} className="project-box">
            <div className="cases-link">
              <p>English practice</p>
            </div>
          </div>
          <div id={1} className="project-box">
            <div className="cases-link">
              <p>Translator</p>
            </div>
          </div>
          <div id={2} className="project-box">
            <div className="cases-link">
              <p>犬猫譲渡センター</p>
            </div>
          </div>
          <div id={3} className="project-box">
            <div className="cases-link">
              <p>Image search</p>
            </div>
          </div>
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
