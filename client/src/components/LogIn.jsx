import React from "react";
import "./style.css";
import NavBtn from "./NavBtn";

export class LogIn extends React.Component {

  render() {
     
      return (

        <form className="log-in-container">
            <input id ='username' type={"username"}/><label for = 'username'>Username...</label>
            <input id='password' type={"password"}/><label for = 'password'>Password...</label>
            <button>Log in</button>
        </form>
      );
  }
}
