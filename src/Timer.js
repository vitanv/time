import React from 'react';
import './Timer.css';

export class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: false,
      hours:0,
      minutes:0,
      seconds:0,
      centiseconds:0
    }
    this.changeState = this.changeState.bind(this);
  }

  format = (value) =>{
    
    if((value + "").length === 1){
      return "0" + value;
    }else{
      return "" + value;
    }
  }
  changeState = () =>{
    if(this.state.active){
      clearInterval(this.timer);
    }else{
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
          <span>{this.format(this.state.hours)}</span>:
          <span>{this.format(this.state.minutes)}</span>:
          <span>{this.format(this.state.seconds)}</span>:
          <span>{this.format(this.state.centiseconds)}</span>
        </div>
        <label className="switch">
          <input type="checkbox" onClick={() => this.changeState()} />
          <span className="slider" />
        </label>
        <button className='btn' onClick={() => this.resetWatch()}>Reset</button>
      </div>
    )
  }

}

export default Timer;
