import './App.css';
import mdLogo from "./images/md.png";
import Button from "./components/Button";
import Screen from "./components/Screen";
import ClearButton from "./components/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";


function App() {

  const [input, setInput] = useState("");

  const addInput = val => {
    setInput(input + val);
  };

  const clearInput = val => {
    setInput("");
  };

  const calculate = val => {
    setInput(evaluate(input));
  };


  return (
    <div className="App">
        <div className='logo-container'>
          <img src={mdLogo}
          className='logo'
          alt='a'/>
        </div>
        <div className='calculator-container'>
            <Screen input={input}/>
          <div className='row'>
            <Button clickManagment={addInput}>1</Button>
            <Button clickManagment={addInput}>2</Button>
            <Button clickManagment={addInput}>3</Button>
            <Button clickManagment={addInput}>+</Button>
          </div>
          <div className='row'>
            <Button clickManagment={addInput}>4</Button>
            <Button clickManagment={addInput}>5</Button>
            <Button clickManagment={addInput}>6</Button>
            <Button clickManagment={addInput}>-</Button>
          </div>
          <div className='row'>
            <Button clickManagment={addInput}>7</Button>
            <Button clickManagment={addInput}>8</Button>
            <Button clickManagment={addInput}>9</Button>
            <Button clickManagment={addInput}>*</Button>
          </div>
          <div className='row'>
            <Button clickManagment={calculate}>=</Button>
            <Button clickManagment={addInput}>0</Button>
            <Button clickManagment={addInput}>.</Button>
            <Button clickManagment={addInput}>/</Button>
          </div>
          <div className="row">
            <ClearButton clickManagment={clearInput}>Clear</ClearButton>
          </div>
        </div>
    </div>
  );
}

export default App;
