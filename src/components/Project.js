import React from 'react';
import { portfolioData } from '../data';

const Project = props => {
  const data = portfolioData[props.id];
  const lang = props.language;

  return (
    <div className='project'>
      <i className='times icon' onClick={props.onDismiss} />
      <h1>{data.name[lang]}</h1>
      <div className='category'>
        <i>{`${data.category[lang]} / ${data.duration}, ${data.date}`}</i>
      </div>
      <div className='skills'>
        {data.skills.map(skill => (
          <span key={skill} className='ui basic label'>
            {skill}
          </span>
        ))}
      </div>
      <h2>Summary</h2>
      <p>{data.summary[lang]}</p>
      {data.history && (
        <React.Fragment>
          <h2>How this was born</h2>
          <p>{data.history[lang]}</p>
        </React.Fragment>
      )}
      <img src={data.image} alt={data.name[lang]} />
      <div className='links'>
        <a
          className='button ui secondary'
          href={data.demoUrl}
          target='_blank'
          rel='noopener noreferrer'
        >
          Demo
        </a>
        {data.githubUrl && (
          <a
            className='button ui secondary'
            href={data.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        )}
      </div>
      <div className='project-link'>
        {+props.id - 1 < 0 ? null : (
          <div
            className='ui icon button left'
            onClick={() => props.selectProject(`${+props.id - 1}`)}
            data-tooltip={portfolioData[+props.id - 1].name[lang]}
            data-position={
              document.documentElement.clientWidth > 991
                ? 'bottom left'
                : 'right center'
            }
            data-variation='mini'
          >
            <i className='angle left icon' />
          </div>
        )}
        {+props.id + 1 < portfolioData.length && (
          <div
            className='ui icon button right'
            onClick={() => props.selectProject(+props.id + 1)}
            data-tooltip={portfolioData[+props.id + 1].name[lang]}
            data-position={
              document.documentElement.clientWidth > 991
                ? 'bottom right'
                : 'left center'
            }
            data-variation='mini'
          >
            <i className='angle right icon' />
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
