import * as React from "react";
import "./ListMultipleChat.css";
const ListMultipleChat = (props) => {
  return (
    <div className={`list-multiple-chat ${props.className || ""}`}>
      <div className="icon-name" />
      <div className="read-stat-date">
        <div className="frame">
          <span className="num-2">{props.num || "2"}</span>
        </div>
        <span className="completed">{props.completed || "8h"}</span>
      </div>
    </div>
  );
};
export default ListMultipleChat;
