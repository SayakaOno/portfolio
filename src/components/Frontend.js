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
      if (
        !this.state.initialAnimation &&
        this.ref.current.getBoundingClientRect().top < 200
      ) {
        this.setState({ initialAnimation: true });
        this.initalAnimation();
      }
    });
  }

  initalAnimation = () => {
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

  getProgressWidth = data => {
    let date = this.state.intDate;
    let width = 0;
    if (data.progress[date] === undefined) {
      width = undefined;
    } else if (data.progress[date]) {
      width = (data.progress[date] / data.fullValue) * 100;
    }
    return width;
  };

  renderYearBar = () => {
    let elems = [];
    let yearWidth = YEAR_WIDTH();
    let first = Object.keys(yearWidth)[0];
    let last = Object.keys(yearWidth)[Object.keys(yearWidth).length - 1];
    for (let year in yearWidth) {
      let elem = (
        <div
          key={year}
          className={`progress-bar${
            year === first ? ' first' : year === last ? ' last' : ''
          }`}
          style={{ width: yearWidth[year] + '%' }}
        >
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
        <div className='date'>
          {this.state.date ? this.formatDateFromKey(this.state.date) : null}
        </div>
        <div className='slidecontainer'>
          {this.renderYearBar()}
          <input
            type='range'
            min='0'
            max={Object.keys(DATE).length - 1}
            value={this.state.date}
            className='slider'
            onChange={this.onBarChange}
          />
          {/* {this.state.date ? (
            <span
              className='ui red basic label'
              style={{
                left: `calc(${(this.state.date / DATE_FROM_INDEX.length) *
                  100}% - 20px)`
              }}
            >
              {this.formatDateFromKey(this.state.date)
                .toString()
                .substring(4, -4)}
            </span>
          ) : null} */}
        </div>
        <div
          className={`skill-bars${this.state.initialAnimation ? ' slow' : ''}`}
        >
          {skillData.map(skill => {
            return (
              <Skill
                name={skill.name}
                width={this.getProgressWidth(skill)}
                img={skill.logo}
                long={skill.logoLong}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Frontend;
