import React from "react";
import "../stylesheets/TaskForm.css"

function TaskForm(props){
  return(
    <form className="task-form">
      <input 
        className="task-input"
        type="text"
        placeholder="New Task" 
        name="text"
      />
      <button className="task-button">
        Add Task
      </button>
    </form>    
  );
}

export default TaskForm;