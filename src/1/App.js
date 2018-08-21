import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Product from "./Product";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <Product />
      </div>
    );
  }
}

export default App;
