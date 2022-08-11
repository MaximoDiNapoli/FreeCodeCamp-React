import React from "react";
import "../stylesheets/Text.css"


function Text(props){

    return(
        <div className="title-chairs">         
            <p> amount chairs {props.amount}</p>      
        </div>
    )



}

export default Text;