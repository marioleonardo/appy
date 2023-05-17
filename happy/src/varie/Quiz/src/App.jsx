import * as React from "react";
import "./App.css";
import group5 from "./assets/group5.svg";
import group6 from "./assets/group6.svg";
import ellipse from "./assets/ellipse.svg";
import iconlyLightArrowLeft from "./assets/iconlyLightArrowLeft.svg";
import ui from "./assets/ui.svg";
import group from "./assets/group.svg";
import group3 from "./assets/group3.svg";
import Cardgroup1 from "./components/Cardgroup1";
import Cardgroup from "./components/Cardgroup";
const App = () => {
  const propsData = {
    group6: {
      quantoTiSentiSolo: "Quanto ti senti solo?",
      group: group3,
    },
    group2: {
      siSoloUno: "Si, solo uno",
      group: group,
      noNonMiInteressa: "No, non mi interessa",
      haiQualcheAnimale: "Hai qualche animale?",
      siPiDiUnUno: "Si, pi\xf9 di un uno",
      noMaVorreiAverlo: "No, ma vorrei averlo",
    },
  };
  return (
    <div className="i-phone-14-pro">
      <div className="rectangle">
        <div className="flex-container">
          <span className="time">9:27</span>
          <img className="ui" src={ui} />
        </div>
        <div className="flex-container-1">
          <div className="flex-container-2">
            <div className="cat-absolute-container">
              <span className="app-y">AppY</span>
            </div>
            <span className="app-y-1">AppY</span>
          </div>
          <div className="flex-container-3">
            <img className="group-6" src={group6} />
            <div className="cat-absolute-container-1">
              <span className="num-3">3</span>
            </div>
            <img className="ellipse" src={ellipse} />
          </div>
          <img className="group-5" src={group5} />
        </div>
        <div className="flex-container-4">
          <img className="iconly-light-arrow-left" src={iconlyLightArrowLeft} />
          <span className="quiz">Quiz</span>
        </div>
        <span className="un-po-di-domande-per-conoscerti">
          Un po’ di domande per conoscerti meglio. Sentiti libero di rispondere
          alle domande che vuoi, se non ti interessa una domanda puoi chiuderla
          e non ti verra più chiesta.
        </span>
        <Cardgroup1 className="group-6-instance-1" {...propsData.group6} />
        <Cardgroup className="group-2-instance-1" {...propsData.group2} />
      </div>
    </div>
  );
};
export default App;
