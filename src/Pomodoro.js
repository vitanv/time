import React from 'react';
import './Pomodoro.css';

export class Pomodoro extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  format = (value) =>{
    if((value + "").length === 1){
      return "0" + value;
    }else{
      return "" + value;
    }
  }
  
  render(){
    return(
      <div>
        Pomodoro
      </div>
    )
  }

}

export default Pomodoro;
