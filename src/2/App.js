import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Products from "./ProductList";
import Search from "./Search";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <br />

        <Products />
      </div>
    );
  }
}

export default App;
