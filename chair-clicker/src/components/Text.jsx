import React from "react";
import "../stylesheets/Text.css"


function Text(props){

    return(
        <div className="title-chairs">         
            <p>{props.children}</p>      
        </div>
    )



}

export default Text;