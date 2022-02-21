import React from "react";
import "./style.css";
import NavBtn from "./NavBtn";

export class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: null };
  }

  render() {
    if (this.state.pokemon) {
      return (
        <div className="post-container">
        </div>
      );
    } else return <div></div>;
  }
}
