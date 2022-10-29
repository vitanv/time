import React from 'react';
import './Timer.css';
import { format } from './format';

export class Timer extends React.Component{
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
    this.changeState = this.changeState.bind(this);
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
        centisecond++;
        if(centisecond >= 100 ){
          second++;
          centisecond = 0;
        }
        if(second >= 60){
          minute++;
          second = 0;
        }
        if(minute >= 60){
          hour++;
          minute = 0;
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


  resetWatch = () =>{
    this.setState({
      hours:0,
      minutes:0,
      seconds:0,
      centiseconds:0,
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
        <button className={this.state.button} onClick={() => this.changeState()}></button>
        <button className='btn btn-primary' onClick={() => this.resetWatch()}>Reset</button>
      </div>
    )
  }

}

export default Timer;
