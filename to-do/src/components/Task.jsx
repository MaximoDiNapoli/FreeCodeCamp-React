import React from "react";
import "../stylesheets/Task.css"
import { AiOutlineDelete } from 'react-icons/ai';


function Task(props) {
    return(
        <div className={props.done ? "task-container done" : "task-container"}>
            <div className="task-text">
                {props.text}
            </div>
            <div className="task-container-icons">
                <AiOutlineDelete className="task-icon"/>
            </div>
        </div>
    );
}

export default Task;