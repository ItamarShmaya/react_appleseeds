import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "./styles/ex3.1.css";
import "./styles/ex3.2.css";
import { Exercise2_1 } from "./components/Exercise2.1";
import { Exercise2_2 } from "./components/Exercise2.2";
import { Exercise3_1 } from "./components/Exercise3.1";
import { Exercise3_2 } from "./components/Exercise3.2";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    // return <Exercise2_1 />;
    // return <Exercise2_2 />;
    // return <Exercise3_1 />;
    return <Exercise3_2 />;
  }
}

export default App;
