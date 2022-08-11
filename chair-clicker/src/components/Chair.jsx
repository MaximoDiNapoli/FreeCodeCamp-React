import React from "react";
import "../stylesheets/Chair.css"


function Chair (props) {

  return (
    <div className="chair-clicker">
      <img onClick={() => props.clickManagment()} src={require(`../images/${props.img}`)}
      />
    </div>
  );
}

export default Chair;