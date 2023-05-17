import * as React from "react";
import "./Cardgroup.css";
const Cardgroup = (props) => {
  return (
    <div className={`cardgroup ${props.className || ""}`}>
      <div className="rectangle-4">
        <span className="quiz">{props.quiz || "Quiz"}</span>
        <span className="un-po-di-domande-per-conoscerti">
          {props.unPoDiDomandePerConoscerti ||
            "Un po’ di domande per conoscerti meglio "}
        </span>
      </div>
    </div>
  );
};
export default Cardgroup;
