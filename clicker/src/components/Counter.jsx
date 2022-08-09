import React from "react";
import "../stylescheets/Counter.css"

function Counter ({ numClicks }) {
    return (
        <div className="counter-click">
            {numClicks}
        </div>
    );
}

export default Counter;