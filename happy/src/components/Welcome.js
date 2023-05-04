import React from "react";
import GoogleSignin from "../img/signin2.svg";
import GoogleLogin from "../img/login2.svg";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import NavBarLogin from "./NavBarLogin";


const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <>
    <NavBarLogin color="bcolorB"/>
    
    <main className="welcome bcolorB">
      <div className="login-spacer"/>
      <h2 className="login-text">Login</h2>
      <form>  
        <div className="">   

            <input type="text" placeholder="Email" name="username" required />  

            <input type="password" placeholder="Password" name="password" required />  
            <button type="submit" className="submit-login bcolorY">Login</button>    
        </div>   
    </form>     
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={GoogleLogin}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
    </>
  );
};

export default Welcome;
