import { render } from "react-dom";
import React from "react";
import "./App";
import { Posts } from "./Posts";
import { SearchField } from "./SearchField";
import { NavBtn } from "./NavBtn";
import SomeComponent from "./SomeComponent";

class SocialPage extends React.Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    return (
      <div className="main">
          
        <SomeComponent />

      </div>
    );
  }
}

export default SocialPage;
