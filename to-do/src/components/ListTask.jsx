import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import "../stylesheets/ListTask.css"

function ListTask(){

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if(task.text.trim()) {
      task.text = task.text.trim();
      const taskUpdate = [task, ...tasks];
      setTasks(taskUpdate);
    }
    console.log("tarea agregada");
  }

  return(
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="tasks-list-container">
        {
          tasks.map((tasks) =>
            <Task text={tasks.text}
            done={tasks.done} />
          )
        }
      </div>
    </>
  );
}

export default ListTask;