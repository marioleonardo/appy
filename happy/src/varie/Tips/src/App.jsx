import * as React from "react";
import "./App.css";
import iconlyLightArrowLeft from "./assets/iconlyLightArrowLeft.svg";
import group4 from "./assets/group4.svg";
import ui from "./assets/ui.svg";
import group from "./assets/group.svg";
import group1 from "./assets/group1.svg";
import group9 from "./assets/group9.svg";
import ellipse from "./assets/ellipse.svg";
import Cardgroup from "./components/Cardgroup";
const App = () => {
  const propsData = {
    group6: {
      group: group4,
      seiInUnMomentoComplicatoLeg:
        "Sei in un momento complicato, leggere un libro ti aiutarebbe ad isolarti dalla realt\xe0 che ti circonda",
      leggiUnLibro: "Leggi un libro",
    },
    group9: {
      leggiUnLibro: "Fai una passeggiata",
      seiInUnMomentoComplicatoLeg:
        "Una passeggiata nei boschi diminuisce la pressione sanguigna e influisce sull'abbassamento dei livelli di cortisolo.",
      group: group4,
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
          <span className="app-y">AppY</span>
          <div className="flex-container-2">
            <img className="group-1" src={group1} />
            <div className="cat-absolute-container">
              <span className="num-3">3</span>
            </div>
            <img className="ellipse" src={ellipse} />
          </div>
          <img className="group" src={group} />
        </div>
        <div className="flex-container-3">
          <img className="iconly-light-arrow-left" src={iconlyLightArrowLeft} />
          <span className="tips">Tips</span>
        </div>
        <span className="un-po-di-consigli-per-te-in-base">
          Un po’ di consigli per te in base al tuo stato emotivo nei giorni
          scorsi.{" "}
        </span>
        <Cardgroup className="group-6-instance-1" {...propsData.group6} />
        <Cardgroup className="group-9-instance" {...propsData.group9} />
        <div className="rectangle-3">
          <span className="vai-a-correre">Vai a correre</span>
          <img className="group-9" src={group9} />
        </div>
      </div>
    </div>
  );
};
export default App;
