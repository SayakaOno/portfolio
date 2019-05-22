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
      initialAnimation: false,
      currentDate: null
    };

    this.body = React.createRef();
    this.date = React.createRef();
  }

  componentDidMount() {
    this.setState({ currentDate: this.getCurrentDate() });
    window.addEventListener('scroll', () => {
      if (
        !this.state.initialAnimation &&
        this.body.current.getBoundingClientRect().top < 200
      ) {
        this.setState({ initialAnimation: true });
        this.initalAnimation();
      }
    });
  }

  getCurrentDate = () => {
    let now = new Date();
    let month = now.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let variableName = now.getFullYear() + month.toString();
    return DATE[variableName];
  };

  initalAnimation = () => {
    let counter = 0;
    let id = setInterval(() => {
      if (counter < this.state.currentDate) {
        this.setState({
          date: (counter = counter + 1),
          intDate: Math.floor(counter)
        });
      } else {
        clearInterval(id);
        window.removeEventListener('scroll', this.initalAnimation);
        setInterval(this.showDateInfo, 500);
      }
    }, 50);
  };

  showDateInfo = () => {
    this.date.current.style.height = '65px';
    this.date.current.style.opacity = 1;
    this.date.current.style.visibility = 'visible';
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

  onClickCurrent = () => {
    if (this.state.intDate === this.state.currentDate) {
      return;
    }
    this.setState({
      intDate: this.state.currentDate,
      date: this.state.currentDate
    });
  };

  render() {
    console.log(this.state.intDate);
    console.log(this.state.currentDate);
    return (
      <div ref={this.body} id='frontend'>
        <div ref={this.date} className='date-info'>
          <div className='date'>
            <span className='text'>
              {this.state.date ? this.formatDateFromKey(this.state.date) : null}
            </span>
            <span className='current' onClick={this.onClickCurrent}>
              <span className='checkbox'>
                <i className='far fa-square' />
                <i
                  className={`fas fa-check${
                    this.state.currentDate === this.state.intDate ? '' : ' none'
                  }`}
                />
              </span>{' '}
              current
            </span>
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
          </div>
        </div>
        <div
          className={`skill-bars${this.state.initialAnimation ? ' slow' : ''}`}
        >
          {skillData.map(skill => {
            return (
              <Skill
                key={skill.name}
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
