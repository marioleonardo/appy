import * as React from "react";
import "./App.css";
import line from "./assets/line.svg";
import group2 from "./assets/group2.svg";
import rectangle4 from "./assets/rectangle4.svg";
import ui from "./assets/ui.svg";
import group4 from "./assets/group4.svg";
import ellipse from "./assets/ellipse.svg";
import rectangle3 from "./assets/rectangle3.svg";
import rectangle2 from "./assets/rectangle2.svg";
import group3 from "./assets/group3.svg";
import group1 from "./assets/group1.svg";
const App = () => {
  return (
    <div className="i-phone-14-pro">
      <div className="rectangle">
        <div className="flex-container">
          <span className="time">9:27</span>
          <img className="ui" src={ui} />
        </div>
        <div className="flex-container-1">
          <span className="app-y">AppY</span>
          <div className="flex-container-2">
            <img className="group-4" src={group4} />
            <div className="cat-absolute-container">
              <span className="num-3">3</span>
            </div>
            <img className="ellipse" src={ellipse} />
          </div>
          <img className="group-3" src={group3} />
        </div>
        <div className="flex-container-3">
          <div className="img">
            <span className="aaron-22">Aaron, 22</span>
            <span className="student">student</span>
            <button className="info">
              <div className="lable">
                <div className="frame">
                  <span className="active-now">Active Now</span>
                </div>
              </div>
            </button>
          </div>
          <img className="rectangle-4" src={rectangle4} />
          <img className="rectangle-3" src={rectangle3} />
          <img className="rectangle-2" src={rectangle2} />
        </div>
        <button className="actions">
          <span className="action">CHAT NOW</span>
        </button>
        <button className="group">
          <div className="rectangle-1">
            <img className="group-1" src={group1} />
            <span className="scrivi-un-messaggio">Scrivi un messaggio </span>
            <img className="line" src={line} />
            <img className="group-2" src={group2} />
          </div>
        </button>
      </div>
    </div>
  );
};
export default App;
