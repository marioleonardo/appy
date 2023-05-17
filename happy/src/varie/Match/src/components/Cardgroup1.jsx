import * as React from "react";
import "./Cardgroup1.css";
import vector from "../assets/vector.svg";
const Cardgroup1 = (props) => {
  return (
    <div className={`cardgroup-1 ${props.className || ""}`}>
      <div className="rectangle-2">
        <div className="flex-container-4">
          <span className="tips">{props.tips || "Tips"}</span>
          <span className="un-po-di-consigli-per-te">
            {props.unPoDiConsigliPerTe || "Un po’ di consigli per te"}
          </span>
        </div>
        <img className="vector" src={props.vector || vector} />
      </div>
    </div>
  );
};
export default Cardgroup1;
