import React from 'react';
import Skill from './Skill';
import {
  DATE,
  DATE_FROM_INDEX,
  MONTH,
  YEAR_WIDTH,
  skillData
} from './constants';

class Frontend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: DATE[201609],
      intDate: DATE[201609],
      initialAnimation: false
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      console.log(this.ref.current.getBoundingClientRect().top);
      console.log(window.innerHeight);
      if (
        !this.state.initialAnimation &&
        this.ref.current.getBoundingClientRect().top < window.innerHeight * 0.35
      ) {
        this.setState({ initialAnimation: true });
        this.initalAnimation();
      }
    });
  }

  initalAnimation = () => {
    setTimeout(() => {
      let now = new Date();
      let currentMonth = now.getMonth() + 1;
      currentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;
      let currentDateKey = now.getFullYear() + currentMonth.toString();
      let counter = 0;
      let id = setInterval(() => {
        if (counter < DATE[currentDateKey]) {
          this.setState({
            date: (counter = counter + 1),
            intDate: Math.floor(counter)
          });
        } else {
          clearInterval(id);
          window.removeEventListener('scroll', this.initalAnimation);
        }
      }, 50);
    }, 500);
  };

  onBarChange = event => {
    let value = event.target.value;
    this.setState({ date: value, intDate: Math.floor(value) });
  };

  formatDateFromKey = key => {
    let date = DATE_FROM_INDEX[Math.floor(key)];
    let year = date.substring(0, 4);
    let month = MONTH[+date.substring(4, 6)];
    return month + ' ' + year;
  };

  getProgressWidth = key => {
    let date = this.state.intDate;
    let width = 0;
    if (skillData[key].progress[date] === undefined) {
      width = undefined;
    } else if (skillData[key].progress[date]) {
      width = (skillData[key].progress[date] / skillData[key].fullValue) * 100;
    }
    return width;
  };

  renderYearBar = () => {
    let elems = [];
    let yearWidth = YEAR_WIDTH();
    for (let year in yearWidth) {
      let elem = (
        <div className='progress-bar' style={{ width: yearWidth[year] + '%' }}>
          {year}
        </div>
      );
      elems.push(elem);
    }
    return <React.Fragment>{elems.map(elem => elem)}</React.Fragment>;
  };

  render() {
    return (
      <div ref={this.ref} id='frontend'>
        <div className='slidecontainer'>
          {this.renderYearBar()}
          <input
            type='range'
            min='0'
            max={Object.keys(DATE).length - 1}
            value={this.state.date}
            class='slider'
            onChange={this.onBarChange}
          />
        </div>
        <div>
          {this.state.date ? this.formatDateFromKey(this.state.date) : null}
        </div>
        <div className='front-skills'>
          <Skill
            name='React'
            width={this.getProgressWidth('react')}
            img={skillData.react.logo}
          />
          <Skill
            name='Redux'
            width={this.getProgressWidth('redux')}
            img={skillData.redux.logo}
          />
          <Skill
            name='JavaScript'
            width={this.getProgressWidth('javascript')}
            img={skillData.javascript.logo}
          />
          <Skill
            name='HTML5'
            width={this.getProgressWidth('html5')}
            img={skillData.html5.logo}
          />
          <Skill
            name='CSS3'
            width={this.getProgressWidth('css3')}
            img={skillData.css3.logo}
          />
          <Skill
            name='TypeScript'
            width={this.getProgressWidth('typescript')}
            img={skillData.typescript.logo}
          />
          <Skill
            name='Flutter'
            width={this.getProgressWidth('flutter')}
            img={skillData.flutter.logo}
          />
        </div>
      </div>
    );
  }
}

export default Frontend;
