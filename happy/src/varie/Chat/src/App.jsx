import * as React from "react";
import "./App.css";
import ellipse from "./assets/ellipse.svg";
import ui from "./assets/ui.svg";
import group1 from "./assets/group1.svg";
import naviationRectangle from "./assets/naviationRectangle.svg";
import ListMultipleChat from "./components/ListMultipleChat";
const App = () => {
  const propsData = {
    listMultipleChat: {
      completed: "8h",
      num: "2",
    },
    listMultipleChat1: {
      completed: "9h",
    },
    listMultipleChat2: {
      completed: "March, 2021",
    },
    listMultipleChat3: {
      completed: "September, 2020",
    },
    listMultipleChat4: {
      completed: "March 6, 2018",
    },
    listMultipleChat5: {
      completed: "March 6, 2018",
    },
    listMultipleChat6: {
      completed: "March 6, 2018",
    },
  };
  return (
    <div className="i-phone-14-pro-chat">
      <div className="rectangle">
        <div className="flex-container">
          <span className="time">9:27</span>
          <img className="ui" src={ui} />
        </div>
        <div className="flex-container-1">
          <span className="app-y">AppY</span>
          <div className="flex-container-2">
            <img className="group-1" src={group1} />
            <div className="cat-absolute-container">
              <span className="num-3">3</span>
            </div>
            <img className="ellipse" src={ellipse} />
          </div>
        </div>
        <span className="chat">Chat </span>
        <div className="frame-15">
          <div className="frame-14">
            <ListMultipleChat {...propsData.listMultipleChat} />
            <ListMultipleChat {...propsData.listMultipleChat1} />
            <ListMultipleChat {...propsData.listMultipleChat2} />
            <ListMultipleChat {...propsData.listMultipleChat3} />
            <ListMultipleChat {...propsData.listMultipleChat4} />
            <ListMultipleChat {...propsData.listMultipleChat5} />
            <ListMultipleChat {...propsData.listMultipleChat6} />
          </div>
          <img className="naviation-rectangle" src={naviationRectangle} />
        </div>
      </div>
    </div>
  );
};
export default App;
