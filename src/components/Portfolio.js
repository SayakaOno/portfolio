import React from 'react';

import Fade from 'react-reveal/Fade';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { portfolioData } from '../data';

const initialNumberOfDisplayedProjects = 2;
const numberOfProjects = portfolioData.length;

class Portfolio extends React.Component {
  state = {
    selectedProject: null,
    numberOfDisplayedProjects: initialNumberOfDisplayedProjects,
    photoIndex1: 0,
    photoIndex2: 0,
    photoIndex3: 0,
    photoIndex4: 0,
    photoIndex5: 0,
    images: []
  };

  handleClick = e => {
    const projectBox = e.target.closest('.project-box');
    if (!projectBox || projectBox.className === 'project-box no-gallery') {
      return;
    }
    this.selectProject(projectBox.id);
  };

  selectProject = id => {
    let data = portfolioData.filter(data => +data.order === +id)[0];
    this.setState({
      selectedProject: id,
      images: data.gallery
    });
    document.body.style.overflow = 'hidden';
  };

  handleNumberOfProject = () => {
    let newNumber = null;
    if (this.state.numberOfDisplayedProjects === numberOfProjects) {
      newNumber = initialNumberOfDisplayedProjects;
    } else {
      newNumber = this.state.numberOfDisplayedProjects + 2;
      if (newNumber > numberOfProjects) {
        newNumber = numberOfProjects;
      }
    }
    this.setState({ numberOfDisplayedProjects: newNumber });
  };

  render() {
    const lang = this.props.language;
    const { selectedProject } = this.state;
    const key = 'photoIndex' + selectedProject;
    const photoIndex = this.state[key];
    let selectedProjctData = null;
    if (selectedProject) {
      selectedProjctData = portfolioData.filter(data => {
        return +data.order === +selectedProject;
      })[0];
    }
    return (
      <React.Fragment>
        {selectedProject && (
          <Lightbox
            mainSrc={this.state.images[photoIndex]}
            nextSrc={
              this.state.images.length !== 1
                ? this.state.images[(photoIndex + 1) % this.state.images.length]
                : null
            }
            prevSrc={
              this.state.images.length !== 1
                ? this.state.images[
                    (photoIndex + this.state.images.length - 1) %
                      this.state.images.length
                  ]
                : null
            }
            onCloseRequest={() => {
              document.body.style.overflow = 'auto';
              this.setState({ selectedProject: null });
            }}
            onMovePrevRequest={() =>
              this.setState({
                [key]:
                  (photoIndex + this.state.images.length - 1) %
                  this.state.images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                [key]: (photoIndex + 1) % this.state.images.length
              })
            }
            enableZoom={false}
            imageCaption={
              photoIndex
                ? selectedProjctData.name[lang] + ' feature'
                : selectedProjctData.name[lang]
            }
          />
        )}
        <Fade>
          <div
            name='portfolio'
            id='portfolio'
            className='wrapper portfolio page'
          >
            <h2>Portfolio</h2>
            <section className='projects' onClick={this.handleClick}>
              {portfolioData.map((data, index) => {
                if (index < this.state.numberOfDisplayedProjects) {
                  return (
                    <React.Fragment key={data.name[lang]}>
                      <div className='project-container'>
                        <div
                          id={data.order}
                          className={`project-box${
                            !data.gallery.length ? ' no-gallery' : ''
                          }`}
                        >
                          <figure className='cases-link hover-parent'>
                            <img src={data.image} alt={data.name[lang]} />
                          </figure>
                        </div>

                        <div className='data'>
                          <h1>{data.name[lang]}</h1>
                          <div className='skills'>
                            {data.skills.map(skill => (
                              <span key={skill} className='ui basic label'>
                                {skill}
                              </span>
                            ))}
                          </div>
                          <p>{data.description[lang]}</p>
                          {data.additionalDescription ? (
                            <p>
                              <i>{data.additionalDescription[lang]}</i>
                            </p>
                          ) : null}
                          <div className='links'>
                            <a
                              className='button ui'
                              href={data.demoUrl}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              Demo
                            </a>
                            {data.githubUrl && (
                              <a
                                className='button ui'
                                href={data.githubUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                              >
                                GitHub
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                } else {
                  return null;
                }
              })}
              <button
                className='ui grey basic button'
                onClick={this.handleNumberOfProject}
              >
                {this.state.numberOfDisplayedProjects === numberOfProjects ? (
                  <span className='show-less'>Show less</span>
                ) : (
                  <span className='show-more'>Show more</span>
                )}
              </button>
            </section>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default Portfolio;
