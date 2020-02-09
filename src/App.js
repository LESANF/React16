import React, { Component } from "react";
import { createPortal } from "react-dom";

class RealPortal extends Component {
  render() {
    return createPortal(<A />, document.getElementById("king"));
  }
}

const A = () => "This is Portal";

class Potato extends Component {
  render() {
    return "SEX111";
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Potato />
        <RealPortal />
      </>
    );
  }
}

export default App;
