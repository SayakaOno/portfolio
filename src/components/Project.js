import React from "react";
import { portfolioData } from "../data";

const Project = props => {
  const data = portfolioData[props.id];
  return (
    <div className="project">
      <i className="times icon" onClick={props.onDismiss} />
      {+props.id - 1 < 0 ? null : (
        <div
          className="ui icon button left"
          onClick={() => props.selectProject(`${+props.id - 1}`)}
          data-tooltip={portfolioData[+props.id - 1].name.en}
          data-position="bottom left"
          data-variation="mini"
        >
          <i className="angle left icon" />
        </div>
      )}
      {+props.id + 1 < portfolioData.length ? (
        <div
          className="ui icon button right"
          onClick={() => props.selectProject(+props.id + 1)}
          data-tooltip={portfolioData[+props.id + 1].name.en}
          data-position="bottom right"
          data-variation="mini"
        >
          <i className="angle right icon" />
        </div>
      ) : null}
      <h1>{data.name.en}</h1>
      <div className="category">
        <i>{`${data.category.en} / ${data.duration}, ${data.date}`}</i>
      </div>
      <div className="skills">
        {data.skills.map(skill => (
          <span key={skill} className="ui basic label">
            {skill}
          </span>
        ))}
      </div>
      <h2>Summary</h2>
      <p>{data.summary.en}</p>
      {data.history ? (
        <React.Fragment>
          <h2>How this was born</h2>
          <p>{data.history.en}</p>
        </React.Fragment>
      ) : null}
      <img src="" alt="" />
      <a
        className="button ui secondary"
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo
      </a>
    </div>
  );
};

export default Project;
