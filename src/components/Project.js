import React from "react";
import { portfolioData } from "../data";

const Project = props => {
  const data = portfolioData[props.id];
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
      <h1>{data.name.en}</h1>
      <div className="category">
        <i>{`${data.category.en} / ${data.duration}, ${data.date}`}</i>
      </div>
      <div className="skills">
        {data.skills.map(skill => (
          <span class="ui basic label">{skill}</span>
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
      <img src="" />
      <a className="button ui" href={data.url} target="_blank">
        Demo
      </a>
    </div>
  );
};

export default Project;
