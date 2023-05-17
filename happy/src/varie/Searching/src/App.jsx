import * as React from "react";
import "./App.css";
import naviationRectangle from "./assets/naviationRectangle.svg";
import ellipse from "./assets/ellipse.png";
import faquoteLeft from "./assets/faquoteLeft.svg";
import vector1 from "./assets/vector1.svg";
import group from "./assets/group.svg";
import ui from "./assets/ui.svg";
import ellipse1 from "./assets/ellipse1.svg";
import Cardgroup1 from "./components/Cardgroup1";
import Cardgroup from "./components/Cardgroup";
import Cardgroup3 from "./components/Cardgroup3";
import Cardgroup2 from "./components/Cardgroup2";
const App = () => {
  const propsData = {
    group5: {
      faquoteLeft: faquoteLeft,
      itIsBetterToConquerYourself:
        "“It is better to conquer yourself than to win a thousand battles”",
    },
    group: {
      searching: "Searching",
      entraNellaCommunityAppyAiuta:
        "Entra nella community Appy aiutando altri ragazzi ",
    },
    group1: {
      tips: "Tips",
      unPoDiConsigliPerTe: "Un po’ di consigli per te",
      vector: vector1,
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
        <Cardgroup3 className="group-5-instance-1" {...propsData.group5} />
        <Cardgroup1 className="group-instance-1" {...propsData.group} />
        <Cardgroup2 className="group-1-instance-1" {...propsData.group1} />
        <Cardgroup className="group-7-instance-1" {...propsData.group7} />
        <img className="naviation-rectangle" src={naviationRectangle} />
      </div>
    </div>
  );
};
export default App;
