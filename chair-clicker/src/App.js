
import './App.css';
import Building from './components/Building';
import Text from "./components/Text"
import { useState, useEffect } from 'react';

function App() {


  const [numChairs, setNumChairs] = useState(0); 
  const [numBrokenChair, setNumBrokenChair] = useState(0); 
  const [numGeneriChair, setNumGeneriChair] = useState(0); 
  const [numSchoolChair, setNumSchoolChair] = useState(0); 
  const [numMetalChair, setNumMetalChair] = useState(0); 
  const [numGamerChair, setNumGamerChair] = useState(0); 
  const [numGamerRgbChair, setNumGamerRgbChair] = useState(0); 

  const brokenChairManagement = () => {
    setNumBrokenChair(numBrokenChair + 1);
  };

  const generiChairManagement = () => {
    setNumGeneriChair(numGeneriChair + 1);
  };

  const schoolChairManagement = () => {
    setNumSchoolChair(numSchoolChair + 1);
  };

  const metalChairManagement = () => {
    setNumMetalChair(numMetalChair + 1);
  };

  const gamerChairManagement = () => {
    setNumGamerChair(numGamerChair + 1);
  };

  const gamerRgbManagement = () => {
    setNumGamerRgbChair(numGamerRgbChair + 1);
  };

  return (
    <div className="App">
      <div className='main-container'>
        <div className='data-container'>
          <Text>{numChairs}</Text>
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
