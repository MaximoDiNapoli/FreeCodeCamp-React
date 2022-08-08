import React from "react";
import "../stylesheets/Lenguage.css";

function Lenguage(props){
  return (
    <div className="container-lenguage">
      <img
        className="image-lenguage"
        src={require(`../images/${props.img}`)} 
        alt="USA Flag"/>
        <div className="container-text-lenguage">
          <p className="name-language">{props.name}</p>
          <p className="countries-language">{props.countries}</p>
          <p className="description-language">{props.description}</p>
        </div>
    </div>
  );
}

export default Lenguage;