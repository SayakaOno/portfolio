import React from 'react';
import { about, mySkills, interests } from '../data';

const About = props => {
  const lang = props.language;

  return (
    <React.Fragment>
      <div id='about' className='about wrapper page'>
        <h2>About me</h2>
        <div className='about-container'>
          <div className='main-content'>
            <div className='description'>{about.main[lang]}</div>
            <div className='skills'>
              <h3>{about.skills[lang]}</h3>
              <div className='skills-container'>
                <div>
                  <h4>Frontend</h4>
                  <ul>
                    {about.sortedSkills['Frontend'].map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
