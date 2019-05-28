import React from 'react';
import Skill from './Skill';
import {
  DATE,
  DATE_FROM_INDEX,
  MONTH,
  YEAR_WIDTH,
  skillData
} from './constants';

const initialState = {
  date: DATE[201609],
  intDate: DATE[201609]
};

class Frontend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
      initialAnimation: false,
      currentDate: null
    };

    this.body = React.createRef();
    this.date = React.createRef();
    this.skillBar = React.createRef();
    this.playLabel = React.createRef();
    this.barLabel = React.createRef();
    this.autoPlayRef = React.createRef();
    this.barRef = React.createRef();
  }

  componentDidMount() {
    this.setState({ currentDate: this.getCurrentDate() });
    window.addEventListener('scroll', () => {
      if (
        !this.state.initialAnimation &&
        this.body.current.getBoundingClientRect().top < window.innerHeight * 0.7
      ) {
        this.initialAnimation();
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

  initialAnimation = () => {
    let counter = 0;
    let id = setInterval(() => {
      if (counter < this.state.currentDate) {
        this.setState({
          date: (counter = counter + 1),
          intDate: Math.floor(counter)
        });
      } else {
        clearInterval(id);
        window.removeEventListener('scroll', this.initialAnimation);
        setTimeout(() => {
          this.showDateInfo();
          this.showAnimationInstructions();
        }, 500);
      }
    }, 50);
    this.setState({ initialAnimation: true });
  };

  showDateInfo = () => {
    this.date.current.style.height = '75px';
    this.date.current.style.opacity = 1;
    this.date.current.style.visibility = 'visible';
  };

  showAnimationInstructions = () => {
    setTimeout(() => {
      this.animateInstruction(this.playLabel, this.autoPlayRef, () =>
        this.animateInstruction(this.barLabel, this.barRef)
      );
    }, 1000);
  };

  animateInstruction = (labelRef, blinkRef, callback = null) => {
    labelRef.current.classList.toggle('none');
    this.blinkClassName(blinkRef);

    setTimeout(() => {
      labelRef.current.classList.toggle('none');
      if (callback) {
        callback();
      }
    }, 2300);
  };

  blinkClassName = elementRef => {
    let counter = 0;
    let id = setInterval(() => {
      if (counter < 6) {
        elementRef.current.classList.toggle('red');
        counter++;
      } else {
        clearInterval(id);
      }
    }, 350);
  };

  autoPlay = () => {
    let counter = this.state.intDate;
    if (counter < this.state.currentDate) {
      this.skillBar.current.classList.remove('slow');
      let id = setInterval(() => {
        if (counter < this.state.currentDate) {
          this.setState({
            date: (counter = counter + 1),
            intDate: Math.floor(counter)
          });
        } else {
          clearInterval(id);
          this.skillBar.current.classList.add('slow');
        }
      }, 50);
    } else {
      this.setState({ ...initialState });
      counter = 0;
      setTimeout(() => {
        this.skillBar.current.classList.remove('slow');
        let id = setInterval(() => {
          if (counter < this.state.currentDate) {
            this.setState({
              date: (counter = counter + 1),
              intDate: Math.floor(counter)
            });
          } else {
            clearInterval(id);
            this.skillBar.current.classList.add('slow');
          }
        }, 50);
      }, 300);
    }
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
    return (
      <div ref={this.body} id='frontend'>
        <div ref={this.date} className='date-info'>
          <div className='date'>
            <div className='container'>
              <div
                ref={this.playLabel}
                className='ui pointing below red basic label none'
              >
                Watch again?
              </div>
              <i
                ref={this.autoPlayRef}
                onClick={this.autoPlay}
                className='far fa-play-circle'
              />
              <span className='text'>
                {this.state.date !== undefined
                  ? this.formatDateFromKey(this.state.date)
                  : null}
              </span>
            </div>
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
            <div
              ref={this.barLabel}
              className='ui left pointing red basic label none'
            >
              See monthly progress!
            </div>
            {this.renderYearBar()}
            <input
              type='range'
              min='0'
              max={Object.keys(DATE).length - 1}
              value={this.state.date}
              className='slider'
              onChange={this.onBarChange}
              ref={this.barRef}
            />
          </div>{' '}
        </div>
        <div
          ref={this.skillBar}
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
