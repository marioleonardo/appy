import * as React from "react";
import { Link } from "react-router-dom";
import "./Cardgroup2.css";
import vector1 from "../assets/vector1.svg";
const Cardgroup2 = (props) => {
  return (
    
    <div className={`cardgroup-2 ${props.className || ""}`}>
      <Link to="/tips" className="rectangle-2" style={{ textDecoration: 'none' }}>
        <div className="flex-container-4">
          <span className="tip">{props.tips || "Tips"}</span>
          <span className="un-po-di-consigli-per-te">
            {props.unPoDiConsigliPerTe || "Un po’ di consigli per te"}
          </span>
        </div>
        <img className="vector-1" style={{margin:"0px 15px"}} src={props.vector || vector1} />
      </Link>
    </div>
    
  );
};
export default Cardgroup2;
