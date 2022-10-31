import React,{useState} from "react";

const Time = () =>{
    const date = new Date().toLocaleTimeString();
    const [timer,setTime] = useState(date);
    const timeUp = ()=>{
        const time = new Date().toLocaleTimeString();
        setTime(time);
    };
    setInterval(timeUp,1000);
    return (<>
      <div className="clockDiv">
      <span className="clock">{timer}</span>
      </div>
    </>);
  }


export default Time;