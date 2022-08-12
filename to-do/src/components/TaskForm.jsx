import React, { useState } from "react";
import "../stylesheets/TaskForm.css"
import { v4 as uuidv4} from "uuid"

function TaskForm(props){

  const[input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSend = e => {
    e.preventDefault();
    console.log("Sending data...")
    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    }

    props.onSubmit(newTask);
  };


  return(
    <form className="task-form"
    onSubmit={handleSend}>
      <input 
        className="task-input"
        type="text"
        placeholder="New Task" 
        name="text"
        onChange={handleChange}
      />
      <button className="task-button">
        Add Task
      </button>
    </form>    
  );
}

export default TaskForm;