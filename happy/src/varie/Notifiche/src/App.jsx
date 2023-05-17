import * as React from "react";
import "./App.css";
import vector1 from "./assets/vector1.svg";
import ellipse4 from "./assets/ellipse4.png";
import ellipse1 from "./assets/ellipse1.png";
import ui from "./assets/ui.svg";
import ellipse from "./assets/ellipse.svg";
import group1 from "./assets/group1.svg";
import naviationRectangle from "./assets/naviationRectangle.svg";
import ellipse3 from "./assets/ellipse3.png";
import ellipse2 from "./assets/ellipse2.png";
const App = () => {
  return (
    <div className="i-phone-14-pro-notifiche">
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
        <span className="notifiche">Notifiche</span>
        <div className="flex-container-3">
          <img className="ellipse-1" src={ellipse1} />
          <div className="flex-container-4">
            <div className="flex-container-5">
              <span className="arp-kaur">Arp Kaur</span>
              <span className="just-now">just now</span>
            </div>
            <span className="hey-everyone-stay-positive-its-a">
              Hey everyone stay positive, its a beautiful day to have a good
              day!!
            </span>
          </div>
        </div>
        <div className="flex-container-6">
          <img className="ellipse-2" src={ellipse2} />
          <div className="flex-container-7">
            <div className="flex-container-8">
              <span className="simran-c">Simran C</span>
              <span className="num-3-hrs-ago">3 hrs ago</span>
            </div>
            <span className="lets-chat-i-am-a-good-listener">
              Let’s chat, I am a good listener!
            </span>
          </div>
        </div>
        <div className="flex-container-9">
          <img className="ellipse-1-1" src={ellipse1} />
          <div className="flex-container-10">
            <div className="flex-container-11">
              <span className="aashnaaaa">Aashnaaaa</span>
              <span className="num-1-hr-ago">1 hr ago</span>
            </div>
            <div className="flex-container-12">
              <img className="vector-1" src={vector1} />
              <span className="anyone-free-to-talk-hmu-i-prefer">
                anyone free to talk, HMU, i prefer calls &lt;3
              </span>
            </div>
          </div>
        </div>
        <div className="flex-container-13">
          <img className="ellipse-4" src={ellipse4} />
          <div className="flex-container-14">
            <div className="flex-container-15">
              <span className="neyyzz">Neyyzz</span>
              <span className="num-2-min-ago">2 min ago</span>
            </div>
            <span className="this-app-is-so-cool-i-have-been">
              this app is so cool! I have been doing much better since I started
              using it!!!
            </span>
          </div>
        </div>
        <div className="flex-container-16">
          <img className="ellipse-3" src={ellipse3} />
          <div className="flex-container-17">
            <span className="diljit">diljit</span>
            <span className="ssuppp">ssuppp</span>
          </div>
          <span className="num-3-hrs-ago-1">3 hrs ago</span>
        </div>
        <img className="naviation-rectangle" src={naviationRectangle} />
      </div>
    </div>
  );
};
export default App;
