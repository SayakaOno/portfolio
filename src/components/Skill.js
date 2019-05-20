import React from 'react';
import reactLogo from '../img/react.png';
import reduxLogo from '../img/redux.png';
import html5Logo from '../img/html5.png';
import css3Logo from '../img/css3.png';
import javascriptLogo from '../img/js.png';
import typescriptLogo from '../img/ts.png';
import flutterLogo from '../img/flutter.png';

const LOGOS = {
  reactLogo,
  reduxLogo,
  html5Logo,
  css3Logo,
  javascriptLogo,
  typescriptLogo,
  flutterLogo
};

const Skill = props => {
  let logo = props.name.toLowerCase() + 'Logo';
  return (
    <div className='skill-bar'>
      <h5>{props.name}</h5>
      <div className='bar'>
        <div className='progress' />
        <div className='logo'>
          <img alt={props.name} src={LOGOS[logo]} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
