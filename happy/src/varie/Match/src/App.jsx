import * as React from "react";
import "./App.css";
import group from "./assets/group.svg";
import ellipse from "./assets/ellipse.png";
import faquoteLeft from "./assets/faquoteLeft.svg";
import ui from "./assets/ui.svg";
import ellipse1 from "./assets/ellipse1.svg";
import vector from "./assets/vector.svg";
import naviationRectangle from "./assets/naviationRectangle.svg";
import Cardgroup1 from "./components/Cardgroup1";
import Cardgroup2 from "./components/Cardgroup2";
import Cardgroup from "./components/Cardgroup";
const App = () => {
  const propsData = {
    group5: {
      faquoteLeft: faquoteLeft,
      itIsBetterToConquerYourself:
        "“It is better to conquer yourself than to win a thousand battles”",
    },
    group: {
      unPoDiDomandePerConoscerti:
        "Entra nella community Appy aiutando altri ragazzi ",
      quiz: "Match",
    },
    group1: {
      tips: "Tips",
      vector: vector,
      unPoDiConsigliPerTe: "Un po’ di consigli per te",
    },
    group7: {
      quiz: "Quiz",
      unPoDiDomandePerConoscerti: "Un po’ di domande per conoscerti meglio ",
    },
  };
  return (
    <div className="i-phone-14-pro-home">
      <div className="rectangle">
        <div className="flex-container">
          <span className="time">9:27</span>
          <img className="ui" src={ui} />
        </div>
        <div className="flex-container-1">
          <span className="app-y">AppY</span>
          <div className="flex-container-2">
            <img className="group" src={group} />
            <div className="cat-absolute-container">
              <span className="num-3">3</span>
            </div>
            <img className="ellipse-1" src={ellipse1} />
          </div>
        </div>
        <div className="flex-container-3">
          <img className="ellipse" src={ellipse} />
          <span className="welcome-back-sarina">Buongiorno, Sanya!</span>
        </div>
        <Cardgroup2 className="group-5-instance-1" {...propsData.group5} />
        <Cardgroup className="group-instance" {...propsData.group} />
        <Cardgroup1 className="group-1-instance-1" {...propsData.group1} />
        <Cardgroup className="group-7-instance-1" {...propsData.group7} />
        <img className="naviation-rectangle" src={naviationRectangle} />
      </div>
    </div>
  );
};
export default App;
