import React, { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import "../stylesheets/ListTask.css"

function ListTask(){

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if(task.text.trim()) {
      task.text = task.text.trim();
      setTasks([task, ...tasks]);
    }
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const completeTask = id => {
    setTasks(tasks.map(task => {
      if(task.id === id){
        task.done = !task.done;
      }
      return task;
    }));
  }
  return(
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="tasks-list-container">
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              done={task.done}
              deleteTask={deleteTask}
              completeTask={completeTask} />
          )
        }
      </div>
    </>
  );
}

export default ListTask;