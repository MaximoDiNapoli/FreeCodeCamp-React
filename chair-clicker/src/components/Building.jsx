import React from "react";
import "../stylesheets/Building.css";

function Building (props) {
    return(
        <div className="building-container" onClick={() => props.clickManagment()}>
            <img className="img-chair" src={require(`../images/${props.img}`)} 
                alt={props.alt} />
            <div className="text-container">
                <p className="p1">{props.buildingName} cost: {props.buildingCost}</p>
                <p className="p2">Owned: {props.owned}</p>
            </div>
        </div>
    );
}

export default Building;