import React from 'react';
import './Countdown.css';
import { format } from './format';

export class Countdown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      button:"play-btn",
      active: false,
      hours:0,
      minutes:0,
      seconds:0,
      centiseconds:0
    }
    this.changeTime = this.changeTime.bind(this)
    this.changeState = this.changeState.bind(this);
  }

  createList = (value) =>{
    let options = [];
    for(let i = 0; i < value; i++){
      options.push(<option value={i}>{format(i+"")}</option>)
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

  changeState = () =>{
    if(this.state.active){
      clearInterval(this.timer);
      this.setState({
        button:"play-btn",
      })
    }else{
      this.setState({
        button:"pause-btn",
      })
      let hour = this.state.hours;
      let minute = this.state.minutes;
      let second = this.state.seconds;
      let centisecond = this.state.centiseconds;
      
      this.timer = setInterval( () => {
       
        centisecond--;
        if(centisecond < 0 && second >= 1){
          second--;
          centisecond = 99;
        }else if( centisecond < 0 && second <= 0 && minute >= 1){
          second = 59;
          centisecond = 99;
          minute--;
        }else if( centisecond < 0 && second <= 0 && minute <= 0 && hour >=1){
          second = 59;
          centisecond = 99;
          minute = 59;
          hour--;
        }else if(centisecond < 0 && second <= 0 && minute <= 0 && hour <= 0){
          this.setState({
            active:false,
            button:"play-btn",
          });
          centisecond = 0;
          clearInterval(this.timer);
        }
        this.setState({
          hours:hour,
          minutes:minute,
          seconds:second,
          centiseconds:centisecond,
        });
      }, 10);
    }
    this.setState({
      active:!this.state.active,
    });
  }

  render(){
    return(
      <div className='container'>
        <div className='display'>
          <span>{format(this.state.hours)}</span>:
          <span>{format(this.state.minutes)}</span>:
          <span>{format(this.state.seconds)}</span>:
          <span>{format(this.state.centiseconds)}</span>
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
          <select id="centiseconds" onChange={(e) => this.changeTime(e)}>
            <option value={""} disabled selected hidden>Centiseconds</option>
            {this.createList(100)}
          </select>
          <button className={this.state.button} onClick={() => this.changeState()}></button>
        </div>
      </div>
    )
  }

}

export default Countdown;
