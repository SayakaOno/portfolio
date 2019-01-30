import React from "react";
import Footer from "../components/Footer";
import { about, mySkills } from "../data";
import image from "../img/about.jpg";

const About = props => {
  const lang = props.language;

  return (
    <React.Fragment>
      <div className="about wrapper page">
        <h2>About me</h2>
        <div className="about-container">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="main-content">
            <div className="">{about.main[lang]}</div>
            <div className="">
              <h3>Skills</h3>
              <ul className="skills">
                {mySkills.map(skill => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
