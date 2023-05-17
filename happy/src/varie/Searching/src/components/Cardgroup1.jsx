import * as React from "react";
import "./Cardgroup1.css";
import vector from "../assets/vector.svg";
const Cardgroup1 = (props) => {
  return (
    <div className={`cardgroup-1 ${props.className || ""}`}>
      <div className="rectangle-1">
        <div className="flex-container-4">
          <span className="searching">{props.searching || "Searching"}</span>
          <span className="entra-nella-community-appy-aiuta">
            {props.entraNellaCommunityAppyAiuta ||
              "Entra nella community Appy aiutando altri ragazzi "}
          </span>
        </div>
        <img className="vector" src={vector} />
      </div>
    </div>
  );
};
export default Cardgroup1;
