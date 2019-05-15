import React from 'react';
import { about } from '../data';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = { iconChange: false };

    this.aboutRef = React.createRef();
    this.checkboxRef1 = React.createRef();
    this.checkboxRef2 = React.createRef();
    this.checkboxRef3 = React.createRef();
    this.checkboxRef4 = React.createRef();
    this.checkboxRef5 = React.createRef();
  }
  lang = this.props.language;

  componentDidMount() {
    window.addEventListener('scroll', event => {
      if (this.state.iconChange) {
        return;
      }
      let coords = this.aboutRef.current.getBoundingClientRect();
      if (coords.top < 0) {
        setTimeout(() => {
          this.checkboxRef1.current.className = 'fas fa-check-square';
        }, 1000);
        setTimeout(() => {
          this.checkboxRef2.current.className = 'fas fa-check-square';
        }, 1100);
        setTimeout(() => {
          this.checkboxRef3.current.className = 'fas fa-check-square';
        }, 1200);
        setTimeout(() => {
          this.checkboxRef4.current.className = 'fas fa-check-square';
        }, 1300);
        setTimeout(() => {
          this.checkboxRef5.current.className = 'fas fa-check-square';
        }, 1400);
        setTimeout(() => {
          this.checkboxRef5.current.className = 'fas fa-utensils';
        }, 2500);
        this.setState({ iconChange: true });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <div id='about' className='about wrapper page' ref={this.aboutRef}>
          <h2>About me</h2>
          <div className='about-container'>
            <div className='main-content'>
              <p className='description'>
                <strong>{about.new[this.lang].title}</strong>
              </p>
              <div className='bullet'>
                <ul>
                  {about.new[this.lang].bullet.map((point, index) => {
                    let ref = 'checkboxRef' + (index + 1);
                    return (
                      <li key={index}>
                        <i className='far fa-square' ref={this[ref]} />
                        <div className='text'>
                          <span>{point.header}</span>
                          {point.detail}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='skills'>
                <h3>{about.skills[this.lang]}</h3>
                <div className='skills-container'>
                  <div>
                    <dt>Frontend</dt>
                    <dd>{about.sortedSkills['Frontend'].join(', ')}</dd>
                    <dt>Backend</dt>
                    <dd>{about.sortedSkills['Backend'].join(', ')}</dd>
                    <dt>What else I can do</dt>
                    <dd>{about.sortedSkills['others'].join(', ')}</dd>
                    {/* <ul>
                      {about.sortedSkills['Frontend'].map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul> */}
                  </div>
                  {/* <div>
                    <h4>Backend</h4>
                    <ul>
                      {about.sortedSkills['Backend'].map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>Others</h4>
                    <ul>
                      {about.sortedSkills['others'].map(skill => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
