import React from "react";
import { about } from "../data";

const About = () => {
  return (
    <div className="about wrapper">
      <h2>About me</h2>
      <div className="row">
        <div className="col-3">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>PHP</li>
            <li>Java</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Android</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>WordPress</li>
            <li>shopify</li>
            <li>Magento(back-end)</li>
            <li>SEO</li>
          </ul>
        </div>
        <div className="col-7">{about.main.en}</div>
      </div>
    </div>
  );
};

export default About;
