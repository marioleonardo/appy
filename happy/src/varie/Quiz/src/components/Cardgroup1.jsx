import * as React from "react";
import "./Cardgroup1.css";
import group2 from "../assets/group2.svg";
import group3 from "../assets/group3.svg";
const Cardgroup1 = (props) => {
  return (
    <div className={`cardgroup-1 ${props.className || ""}`}>
      <div className="rectangle-6">
        <div className="flex-container-10">
          <span className="quanto-ti-senti-solo">
            {props.quantoTiSentiSolo || "Quanto ti senti solo?"}
          </span>
          <img className="group-3" src={props.group || group3} />
        </div>
        <img className="group-2" src={group2} />
      </div>
    </div>
  );
};
export default Cardgroup1;
