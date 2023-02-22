import React,{useState} from 'react'
import './App.css';

function Button(props){
  const ClickHandler=()=>{
    props.onClickAct(props.increment);
  }
  return(
    <button onClick={ClickHandler}>{props.increment}</button>
  );
}





function Display(props){
  return(
    <div>{props.value}</div>
  );
}

function App() {

  const [value,setValue]=useState("0");

  const stateFunc=(increment)=>{
    setValue(parseInt(value)+parseInt(increment));
  }

  return (
    <>
      <Button increment="-10" onClickAct={stateFunc}/>
      <Button increment="+50" onClickAct={stateFunc}/>
      <Button increment="+100" onClickAct={stateFunc}/>
      <Display value={parseInt(value)}/>
    </>
    
  );
}

export default App;
