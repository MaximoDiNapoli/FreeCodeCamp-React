
import './App.css';
import Building from './components/Building';
import Text from "./components/Text"
import Chair from "./components/Chair"
import { useState } from 'react';

function App() {


  const [numChairs, setNumChairs] = useState(0); 
  const [numBrokenChair, setNumBrokenChair] = useState(0); 
  const [numGeneriChair, setNumGeneriChair] = useState(0); 
  const [numSchoolChair, setNumSchoolChair] = useState(0); 
  const [numMetalChair, setNumMetalChair] = useState(0); 
  const [numGamerChair, setNumGamerChair] = useState(0); 
  const [numGamerRgbChair, setNumGamerRgbChair] = useState(0); 


  const activateGame = () => {
    const power = 1 + (numBrokenChair * 10) + (numGeneriChair * 100) + (numSchoolChair * 1000) + (numMetalChair * 10000) + (numGamerChair * 100000) + (numGamerRgbChair * 1000000);
    setNumChairs(numChairs + power);
  };

  const brokenChairManagement = () => {
    if(numChairs > 10){
      setNumChairs(numChairs - 10)
      setNumBrokenChair(numBrokenChair + 1);
    }
  };

  const generiChairManagement = () => {
    if(numChairs > 100){
      setNumChairs(numChairs - 100)
      setNumGeneriChair(numGeneriChair + 1);
    }
  };

  const schoolChairManagement = () => {
    if(numChairs > 1000){
      setNumChairs(numChairs - 1000)
      setNumSchoolChair(numSchoolChair + 1);
    }
  };

  const metalChairManagement = () => {
    if(numChairs > 10000){
      setNumChairs(numChairs - 10000)
      setNumMetalChair(numMetalChair + 1);
    }
  };

  const gamerChairManagement = () => {
    if(numChairs > 100000){
      setNumChairs(numChairs - 100000)
      setNumGamerChair(numGamerChair + 1);
    }
  };

  const gamerRgbManagement = () => {
    if(numChairs > 1000000){
      setNumChairs(numChairs - 1000000)
      setNumGamerRgbChair(numGamerRgbChair + 1);
    }
  };

  return (
    <div className="App">
      <div className='main-container'>
        <div className='data-container'>

          <Text>{numChairs}</Text>

          <Chair img="logo.png"
          clickManagment={activateGame}
          />
        </div>
        <div className='buildings-container'>

          <Building img="lv1.png"
            clickManagment={brokenChairManagement}
            alt="lv1Chair"
            buildingName="Broken-chair"
            buildingCost="10"
            owned={numBrokenChair}/>

          <Building img="lv2.png"
            clickManagment={generiChairManagement}
            alt="lv2Chair"
            buildingName="Generic-chair"
            buildingCost="100"
            owned={numGeneriChair}/>

          <Building img="lv3.png"
            clickManagment={schoolChairManagement}
            alt="lv3Chair"
            buildingName="School-chair"
            buildingCost="1000"
            owned={numSchoolChair}/>
          
          <Building img="lv4.png"
            clickManagment={metalChairManagement}
            alt="lv4Chair"
            buildingName="Metal-chair"
            buildingCost="10000"
            owned={numMetalChair}/>

          <Building img="lv5.png"
            clickManagment={gamerChairManagement}
            alt="lv5Chair"
            buildingName="Gamer-chair"
            buildingCost="100000"
            owned={numGamerChair}/>

          <Building img="lv6.png"
            clickManagment={gamerRgbManagement}
            alt="lv6Chair"
            buildingName="Gamer-chair with rgb"
            buildingCost="1000000"
            owned={numGamerRgbChair}/>
        
        </div>
      </div>
    </div>
  );
}

export default App;
