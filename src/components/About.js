import React from "react";
import Footer from "../components/Footer";
import { about, mySkills } from "../data";

const About = props => {
  const lang = props.language;

  return (
    <React.Fragment>
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
      <Footer />
    </React.Fragment>
  );
};

export default About;
