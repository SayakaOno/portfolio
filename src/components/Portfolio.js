import React from 'react';
import Modal from './Modal';
import Project from './Project';
import { portfolioData, elements } from '../data';

class Portfolio extends React.Component {
  state = {
    selectedProject: null,
    selectedElements: [],
    showNotFound: false,
    filterOpen: false,
    availableElements: elements
  };

  componentDidMount() {
    window.addEventListener('resize', this.checkMatching);
  }

  componentDidUpdate() {
    if (document.documentElement.clientWidth > 766) {
      return;
    }
    if (
      this.state.showNotFound === false &&
      document.querySelectorAll('.project-box.dimmer').length === 4
    ) {
      this.setState({ showNotFound: true });
    }
  }

  handleClick = e => {
    const projectBox = e.target.closest('.project-box');
    if (!projectBox) {
      return;
    }
    this.selectProject(projectBox.id);
  };

  handleSelectElements = e => {
    if (!e.target.closest('span')) {
      return;
    }
    let showNotFound = false;
    const skill = e.target.closest('span').innerHTML;
    this.setState(prevState => {
      const targetIndex = prevState.selectedElements.findIndex(
        selectedElement => selectedElement === skill
      );
      if (targetIndex !== -1) {
        return {
          selectedElements: prevState.selectedElements.filter(
            (skill, index) => index !== targetIndex
          ),
          showNotFound
        };
      } else {
        return {
          selectedElements: prevState.selectedElements.concat(skill),
          showNotFound
        };
      }
    });
    this.availableElements();
  };

  availableElements = () => {
    setTimeout(() => {
      let availableElements = new Set();
      portfolioData.forEach(data => {
        let dimmer = false;
        let elements = [data.category.en, ...data.skills];
        for (let element of this.state.selectedElements) {
          if (!elements.includes(element)) {
            dimmer = true;
            break;
          }
        }
        if (!dimmer) {
          elements.forEach(elem => {
            availableElements.add(elem);
          });
        }
      });
      this.setState({ availableElements: Array.from(availableElements) });
    }, 0);
  };

  isAvailableElement = elem => {
    return this.state.availableElements.includes(elem);
  };

  handleClear = e => {
    if (!e.target.closest('.clear-filter-button')) {
      return;
    }
    this.setState({ selectedElements: [], availableElements: elements });
  };

  selectProject = id => {
    this.setState({ selectedProject: id });
  };

  projectBoxClassName = data => {
    const elements = [data.category.en, ...data.skills];
    for (let element of this.state.selectedElements) {
      if (!elements.includes(element)) {
        return 'project-box dimmer';
      }
    }
    return 'project-box';
  };

  handleOrder = data => {
    const elements = [data.category.en, ...data.skills];
    for (let element of this.state.selectedElements) {
      if (!elements.includes(element)) {
        return null;
      }
    }
    return { order: -4 };
  };

  labelClassName = element => {
    if (this.state.selectedElements.includes(element)) {
      return 'ui label tiny';
    }
    return 'ui basic label tiny';
  };

  renderModal = lang => {
    return (
      <Modal onDismiss={() => this.setState({ selectedProject: null })}>
        <Project
          id={this.state.selectedProject}
          language={lang}
          onDismiss={() => this.setState({ selectedProject: null })}
          selectProject={this.selectProject}
        />
      </Modal>
    );
  };

  render() {
    const lang = this.props.language;

    return this.state.selectedProject ? (
      this.renderModal(lang)
    ) : (
      <React.Fragment>
        <div id='portfolio' className='wrapper portfolio page'>
          <h2>Portfolio</h2>
          <section className='cases-boxs' onClick={this.handleClick}>
            {portfolioData.map((data, index) => (
              <div
                key={data.name[lang]}
                id={index}
                className={this.projectBoxClassName(data)}
                style={this.handleOrder(data)}
              >
                <figure className='cases-link hover-parent'>
                  <img src={data.image} alt={data.name[lang]} />
                  <figcaption className='hover-mask'>
                    <h3>{data.name[lang]}</h3>
                    <p>{data.category[lang]}</p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Portfolio;
