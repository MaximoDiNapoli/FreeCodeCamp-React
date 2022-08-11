
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

        
        </div>
      </div>
    </div>
  );
}

export default App;
