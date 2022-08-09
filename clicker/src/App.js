
import './App.css';
import Button from './components/Button';
import logo from "./images/md.png"

function App() {

  const clickManagement = () => {
    console.log("CLICK")
  }

  const restarCount = () => {
    console.log("Restart")
  }

  return (
    <div className="App">
      <div className='image-logo-container'>
        <img 
          className='image-logo'
          src={logo}
          alt="" />
      </div>
      <div className='main-container'>
        <Button 
          text="Click"
          isClickButton={true}
          clickManagement={clickManagement}/>
        <Button 
          text="Restart"
          isClickButton={false}
          clickManagement={restarCount}/>
      </div>
    </div>
  );
}

export default App;
