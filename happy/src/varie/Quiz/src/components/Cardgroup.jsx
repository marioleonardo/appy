import * as React from "react";
import "./Cardgroup.css";
import rectangle2 from "../assets/rectangle2.svg";
import group from "../assets/group.svg";
const Cardgroup = (props) => {
  return (
    <div className={`cardgroup ${props.className || ""}`}>
      <div className="rectangle-1">
        <div className="flex-container-5">
          <span className="hai-qualche-animale">
            {props.haiQualcheAnimale || "Hai qualche animale?"}
          </span>
          <img className="group" src={props.group || group} />
        </div>
        <div className="flex-container-6">
          <img className="rectangle-2" src={rectangle2} />
          <span className="si-pi-di-un-uno">
            {props.siPiDiUnUno || "Si, pi\xf9 di un uno"}
          </span>
        </div>
        <div className="flex-container-7">
          <img className="rectangle-3" src={rectangle2} />
          <span className="si-solo-uno">
            {props.siSoloUno || "Si, solo uno"}
          </span>
        </div>
        <div className="flex-container-8">
          <input className="rectangle-4" type="checkbox" />
          <span className="no-ma-vorrei-averlo">
            {props.noMaVorreiAverlo || "No, ma vorrei averlo"}
          </span>
        </div>
        <div className="flex-container-9">
          <input className="rectangle-5" type="checkbox" />
          <span className="no-non-mi-interessa">
            {props.noNonMiInteressa || "No, non mi interessa"}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Cardgroup;
