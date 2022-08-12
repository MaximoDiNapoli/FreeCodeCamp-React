import './App.css';
import logo from "./images/logo.jpg"
import Task from './components/Task';
import TaskForm from './components/TaskForm';

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
          <TaskForm></TaskForm>
      </div>
    </div>
  );
}

export default App;
