import './App.css';
import logo from "./images/logo.jpg";
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          src={logo}
          alt="logo"
          className='logo'
        />
      </div>
      <div className='todo-main-list'>
        <h1>My Tasks</h1>
          <ListTask />
      </div>
    </div>
  );
}

export default App;
