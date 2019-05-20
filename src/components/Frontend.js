import React from 'react';
import { DATE, DATE_FROM_INDEX, MONTH } from './constants';

class Frontend extends React.Component {
  state = {
    date: DATE[201609]
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
          this.setState({ date: (counter = counter + 0.25) });
        } else {
          clearInterval(id);
        }
      }, 5);
    }, 500);
  }

  onBarChange = event => {
    this.setState({ date: event.target.value });
  };

  formatDateFromKey = key => {
    let date = DATE_FROM_INDEX[Math.floor(key)];
    let year = date.substring(0, 4);
    let month = MONTH[+date.substring(4, 6)];
    return month + ' ' + year;
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
          {this.state.date ? this.formatDateFromKey(this.state.date) : null}
        </div>
      </div>
    );
  }
}

export default Frontend;
