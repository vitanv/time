import React from 'react';
import './Pomodoro.css';
import { format } from './format';

export class Pomodoro extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      active: false,
      minutes:25,
      seconds:0,
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
      let minute = this.state.minutes;
      let second = this.state.seconds;
      
      this.timer = setInterval( () => {
        second--;
        if(second < 0 && minute >= 1){
          minute--;
          second = 59;
        }else if(second <= 0 && minute <= 0){
          this.setState({
            active:false,
          });
        }
        if(this.state.active == false) return;
        this.setState({
          minutes:minute,
          seconds:second,
        });
      }, 1000);
    }
    this.setState({
      active:!this.state.active,
    });
  }

  resetWatch = () =>{
    this.setState({
      minutes:25,
      seconds:0,
    });
  }

  render(){
    return(
      <div className='container'>
        <div className='display'>
          <span>{format(this.state.minutes)}</span>:
          <span>{format(this.state.seconds)}</span>
        </div>
        <label className="switch">
          <input type="checkbox"  />
          <span className="slider" onClick={() => this.changeState()} />
        </label>
        <button className='btn' onClick={() => this.resetWatch()}>Reset</button>
      </div>
    )
  }

}

export default Pomodoro;
