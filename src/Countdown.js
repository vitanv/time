import React from 'react';
import './Countdown.css';

export class Countdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: false,
      hours:0,
      minutes:0,
      seconds:0,
      miliseconds:0
    }
    this.changeTime = this.changeTime.bind(this)
  }


  format = (value) =>{
    if((value + "").length === 1){
      return "0" + value;
    }else{
      return "" + value;
    }
  }

  createList = (value) =>{
    console.log("here");
    let options = [];
    for(let i = 0; i < value; i++){
      options.push(<option value={i}>{this.format(i+"")}</option>)
    }
    return options
  }
  
  changeTime = (event) =>{
    let key = event.currentTarget.id;
    let value = event.currentTarget.value;
    this.setState({
      [key]:value,
    })
  }

  render(){
    return(
      <div className='container'>
        <div className='display'>
          <span>{this.format(this.state.hours)}</span>:
          <span>{this.format(this.state.minutes)}</span>:
          <span>{this.format(this.state.seconds)}</span>:
          <span>{this.format(this.state.miliseconds)}</span>
        </div>
        <div className='control'>
          <select id="hours" onChange={(e) => this.changeTime(e)}>
            <option value={""} disabled selected hidden>Hours</option>
            {this.createList(24)}
          </select>
          <select id="minutes" onChange={(e) => this.changeTime(e)}>
            <option value={""} disabled selected hidden>Minutes</option>
            {this.createList(60)}
          </select>
          <select id="seconds" onChange={(e) => this.changeTime(e)}>
            <option value={""} disabled selected hidden>Seconds</option>
            {this.createList(60)}
          </select>
          <select id="miliseconds" onChange={(e) => this.changeTime(e)}>
            <option value={""} disabled selected hidden>Miliseconds</option>
            {this.createList(100)}
          </select>
        </div>
      </div>
    )
  }

}

export default Countdown;
