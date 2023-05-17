import * as React from "react";
import "./Cardgroup3.css";
import faquoteLeft from "../assets/faquoteLeft.svg";
const Cardgroup3 = (props) => {
  return (
    <div className={`cardgroup-3 ${props.className || ""}`}>
      <div className="rectangle-3">
        <span className="it-is-better-to-conquer-yourself">
          {props.itIsBetterToConquerYourself ||
            "“It is better to conquer yourself than to win a thousand battles”"}
        </span>
        <img className="faquote-left" src={props.faquoteLeft || faquoteLeft} />
      </div>
    </div>
  );
};
export default Cardgroup3;
