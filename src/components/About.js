import React from "react";
import { about, mySkills } from "../data";

const About = props => {
  const lang = props.language;

  return (
    <div className="about wrapper page">
      <h2>About me</h2>
      <div className="row">
        <div className="col-3">
          <h3>Skills</h3>
          <ul>
            {mySkills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="col-7">{about.main[lang]}</div>
      </div>
    </div>
  );
};

export default About;
