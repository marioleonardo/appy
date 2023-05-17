import * as React from "react";
import "./Cardgroup.css";
import group5 from "../assets/group5.svg";
const Cardgroup = (props) => {
  return (
    <div className={`cardgroup ${props.className || ""}`}>
      <div className="rectangle-1">
        <div className="flex-container-4">
          <span className="leggi-un-libro">
            {props.leggiUnLibro || "Leggi un libro"}
          </span>
          <span className="sei-in-un-momento-complicato-leg">
            {props.seiInUnMomentoComplicatoLeg ||
              "Sei in un momento complicato, leggere un libro ti aiutarebbe ad isolarti dalla realt\xe0 che ti circonda"}
          </span>
        </div>
        <img className="group-5" src={group5} />
      </div>
    </div>
  );
};
export default Cardgroup;
