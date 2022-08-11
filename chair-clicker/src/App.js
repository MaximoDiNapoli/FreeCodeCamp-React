
import './App.css';
import Building from './components/Building';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <div className='data-container'>

        </div>
        <div className='buildings-container'>

          <Building img="lv1.png"
            alt="lv1Chair"
            buildingName="Broken-chair"
            buildingCost="10"
            owned="0"/>

          <Building img="lv2.png"
           alt="lv2Chair"
            buildingName="Generic-chair"
            buildingCost="100"
            owned="0"/>

          <Building img="lv3.png"
           alt="lv3Chair"
            buildingName="School-chair"
            buildingCost="1000"
            owned="0"/>


          <Building img="lv4.png"
            alt="lv4Chair"
            buildingName="Metal-chair"
            buildingCost="10000"
            owned="0"/>

          <Building img="lv5.png"
            alt="lv5Chair"
            buildingName="Gamer-chair"
            buildingCost="100000"
            owned="0"/>

          <Building img="lv6.png"
            alt="lv6Chair"
            buildingName="Gamer-chair with rgb"
            buildingCost="1000000"
            owned="0"/>
        
        </div>
      </div>
    </div>
  );
}

export default App;
