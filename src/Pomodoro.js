import React from 'react';
import './Pomodoro.css';
import { format } from './format';

export class Pomodoro extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      button:"play-btn",
      pause: false,
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
      this.setState({
        button:"play-btn",
      })
    }else{
      this.setState({
        button:"pause-btn",
      })
      let minute = this.state.minutes;
      let second = this.state.seconds;
      
      this.timer = setInterval( () => {
        second--;
        if(second < 0 && minute >= 1){
          minute--;
          second = 59;
        }else if(second <= 0 && minute <= 0){
          let pauseState = !this.state.pause;
          this.setState({
            button:"play-btn",
            pause: pauseState,
            active:false,
          });
          second = 0;
          if(pauseState){
            minute = 5;
          }else{
            minute = 25
          }
          clearInterval(this.timer);
          
        }
        
        this.setState({
          minutes:minute,
          seconds:second,
        });
      }, 10);
    }
    this.setState({
      active:!this.state.active,
    });
  }

  resetWatch = () =>{
    let minute;
    if(this.state.pause){
      minute = 5;
    }else{
      minute = 25
    }
    this.setState({
      minutes:minute,
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
        <button className={this.state.button} onClick={() => this.changeState()}></button>
        <button className='btn btn-danger'  onClick={() => this.resetWatch()}>Reset</button>
      </div>
    )
  }

}

export default Pomodoro;
