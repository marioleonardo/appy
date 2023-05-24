import * as React from "react";
import "./Cardgroup.css";
import { Link } from "react-router-dom";

const Cardgroup = (props) => {
  return (
    <div className={`cardgroup ${props.className || ""}`}>
      <Link to="/quiz" className="rectangle-4">
        <span className="quiz">{props.quiz || "Quiz"}</span>
        <span className="un-po-di-domande-per-conoscerti">
          {props.unPoDiDomandePerConoscerti ||
            "Un po’ di domande per conoscerti meglio "}
        </span>
      </Link>
    </div>
  );
};
export default Cardgroup;
