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
          <select>
            <option value={""}>Hours</option>
            {this.createList(24)}
          </select>
          <select>
            <option value={""}>Minutes</option>
            {this.createList(60)}
          </select>
          <select>
            <option value={""}>Seconds</option>
            {this.createList(60)}
          </select>
          <select>
            <option value={""}>Miliseconds</option>
            {this.createList(100)}
          </select>
        </div>
      </div>
    )
  }

}

export default Countdown;
