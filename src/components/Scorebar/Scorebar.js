import React from "react";
import "./Scorebar.css";

const Scorebar = props => (
    <div className="scorebar">
        <div className="currentScore">
            Current score:  {props.currentScore}
        </div>
        <div className="highScore">
            High score:  {props.highScore}
        </div>
        <div className="messageArea">
            {props.highScore === 12 ? "Nice job!" : ""}
        </div>
    </div>
);

export default Scorebar;
