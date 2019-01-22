import React from "react";
import Modal from "./Modal";
import Project from "./Project";
import { portfolioData } from "../data";

class Portfolio extends React.Component {
  state = { selectedProject: null };

  handleClick = e => {
    const projectBox = e.target.closest(".project-box");
    if (!projectBox) {
      return;
    }
    this.selectProject(projectBox.id);
  };

  selectProject = id => {
    this.setState({ selectedProject: id });
  };

  render() {
    const lang = this.props.language;

    return this.state.selectedProject ? (
      <Modal onDismiss={() => this.setState({ selectedProject: null })}>
        <Project
          id={this.state.selectedProject}
          language={lang}
          onDismiss={() => this.setState({ selectedProject: null })}
          selectProject={this.selectProject}
        />
      </Modal>
    ) : (
      <div className="wrapper">
        <h2>Portfolio</h2>
        <div>
          <i className="filter icon" />
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
          {portfolioData.map((data, index) => (
            <div key={data.name[lang]} id={index} className="project-box">
              <div className="cases-link">
                <p>{data.name[lang]}</p>
                <img
                  src={require(`../img/${data.image}`)}
                  alt={data.name[lang]}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default Portfolio;
