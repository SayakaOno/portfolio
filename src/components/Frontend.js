import React from 'react';
import Skill from './Skill';
import { DATE, DATE_FROM_INDEX, MONTH } from './constants';
import { skillData } from './constants';

class Frontend extends React.Component {
  state = {
    date: DATE[201609],
    intDate: DATE[201609]
  };

  componentDidMount() {
    setTimeout(() => {
      let now = new Date();
      let currentMonth = now.getMonth() + 1;
      currentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;
      let currentDateKey = now.getFullYear() + currentMonth.toString();
      let counter = 0;
      let id = setInterval(() => {
        if (counter < DATE[currentDateKey]) {
          this.setState({
            date: (counter = counter + 0.25),
            intDate: Math.floor(counter)
          });
        } else {
          clearInterval(id);
        }
      }, 50);
    }, 500);
  }

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

  render() {
    return (
      <div id='frontend'>
        <div class='slidecontainer'>
          <input
            type='range'
            min='0'
            max={Object.keys(DATE).length - 1}
            value={this.state.date}
            class='slider'
            id='myRange'
            onChange={this.onBarChange}
          />
          <div>
            {this.state.date ? this.formatDateFromKey(this.state.date) : null}
          </div>
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
