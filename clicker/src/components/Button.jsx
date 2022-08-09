import React from "react";
import "../stylescheets/Button.css"

function Button({text, isClickButton, clickManagement}) {
  return(
    <button 
      className={isClickButton ? "click-button": "restart-button"}
      onClick={clickManagement}>
      {text}
    </button>
  );
}

export default Button;