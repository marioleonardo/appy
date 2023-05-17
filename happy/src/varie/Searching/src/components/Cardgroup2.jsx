import * as React from "react";
import "./Cardgroup2.css";
import vector1 from "../assets/vector1.svg";
const Cardgroup2 = (props) => {
  return (
    <div className={`cardgroup-2 ${props.className || ""}`}>
      <div className="rectangle-2">
        <div className="flex-container-5">
          <span className="tips">{props.tips || "Tips"}</span>
          <span className="un-po-di-consigli-per-te">
            {props.unPoDiConsigliPerTe || "Un po’ di consigli per te"}
          </span>
        </div>
        <img className="vector-1" src={props.vector || vector1} />
      </div>
    </div>
  );
};
export default Cardgroup2;
