import React from 'react';
import './Clock.css';



const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
export class Clock extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      date:new Date,
      format: false,
    }
    this.changeFormat = this.changeFormat.bind(this);
  }

  componentDidMount = () =>  {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount = () => {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({
      date: new Date()
    });
  }

  changeFormat = () => {
    this.setState({
      format:!this.state.format,
    })
  }

  render(){
    return(
      <div className='container'>
        <div className='time'>{this.state.date.toLocaleTimeString('en-UK', { hour12: this.state.format})}</div>
        <div className='date'>{day[this.state.date.getDay()]} {this.state.date.getDate()} of {month[this.state.date.getDay()]} {this.state.date.getUTCFullYear()}</div>
        <label class="switch">
          <input type="checkbox" onClick={() => this.changeFormat()} />
          <span class="slider" />
        </label>
      </div>
    )
  }

}

export default Clock;
