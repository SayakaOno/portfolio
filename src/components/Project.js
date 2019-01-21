import React from "react";
import { portfolioData } from "../data";

const Project = props => {
  return (
    <div className="project">
      <i class="times icon" onClick={props.onDismiss} />
      {+props.id - 1 < 0 ? null : (
        <div
          class="ui icon button left"
          onClick={() => props.selectProject(`${+props.id - 1}`)}
          data-tooltip={portfolioData[+props.id - 1].name.en}
          data-position="bottom left"
          data-variation="mini"
        >
          <i class="angle left icon" />
        </div>
      )}
      {+props.id + 1 < portfolioData.length ? (
        <div
          class="ui icon button right"
          onClick={() => props.selectProject(+props.id + 1)}
          data-tooltip={portfolioData[+props.id + 1].name.en}
          data-position="bottom right"
          data-variation="mini"
        >
          <i class="angle right icon" />
        </div>
      ) : null}
      <h1>{portfolioData[+props.id].name.en}</h1>
      <div className="category">
        <i>Website</i>
      </div>
      <div className="skills">
        <span class="ui basic label">PHP</span>
        <span class="ui grey label">API</span>
      </div>
      <h2>Summary</h2>
      <p>THIs is......</p>
      <h2>How this was born</h2>
      <p>THIs is......</p>
      <img src="" />
      <a
        className="button ui"
        href={portfolioData[+props.id].url}
        target="_blank"
      >
        Demo
      </a>
    </div>
  );
};

export default Project;
