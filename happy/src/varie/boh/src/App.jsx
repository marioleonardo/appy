import * as React from "react";
import "./App.css";
import naviationRectangle from "./assets/naviationRectangle.svg";
import ui from "./assets/ui.svg";
import userImage from "./assets/userImage.png";
const App = () => {
  return (
    <div className="i-phone-14-pro-profilo">
      <div className="rectangle-1">
        <div className="flex-container">
          <span className="time">9:27</span>
          <img className="ui" src={ui} />
        </div>
        <img className="user-image" src={userImage} />
        <span className="sanya-abidoye">Sanya Abidoye</span>
        <span className="itunuoluwapetraafrica">Itunuoluwa@petra.africa</span>
        <input
          className="input-default"
          placeholder="What’s your first name?"
          type="text"
        />
        <input
          className="input-default-1"
          placeholder="And your last name?"
          type="text"
        />
        <input
          className="input-default-2"
          placeholder="Select your gender"
          type="text"
        />
        <input
          className="input-default-3"
          placeholder="What is your date of birth?"
          type="text"
        />
        <input
          className="input-default-4"
          placeholder="What’s your first name?"
          type="text"
        />
        <button className="change-email-address">
          <div className="rectangle-2">
            <span className="change-email-address-1">Update Profile</span>
          </div>
        </button>
        <img className="naviation-rectangle" src={naviationRectangle} />
      </div>
    </div>
  );
};
export default App;
