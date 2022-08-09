
import './App.css';
import Button from './components/Button';
import logo from "./images/md.png"
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0); 

  const clickManagement = () => {
    setNumClicks(numClicks + 1);
  };

  const restarCount = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='image-logo-container'>
        <img 
          className='image-logo'
          src={logo}
          alt="" />
      </div>
      <div className='main-container'>
        <Counter numClicks={numClicks} />
        <Button 
          text="Click"
          isClickButton={true}
          clickManagement={clickManagement} />
        <Button 
          text="Restart"
          isClickButton={false}
          clickManagement={restarCount} />
      </div>
    </div>
  );
}

export default App;
