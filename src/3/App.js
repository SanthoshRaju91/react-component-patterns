import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Products from "./ProductList";
import Search from "./Search";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    fetch("https://nodebacked.herokuapp.com/api/v1/products")
      .then(response => response.json())
      .then(data => {
        const products = data.products.map(current => {
          current.isFav = false;
          return current;
        });

        this.setState({
          products
        });
      });
  }

  onFavourite = selected => {
    const { products } = this.state;

    const updatedProducts = products.map(current => {
      if (current.id === selected.id) {
        current.isFav = !current.isFav;
      }

      return current;
    });

    this.setState({
      products: updatedProducts
    });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Search />
        <br />

        <Products products={products} onFavourite={this.onFavourite} />
      </div>
    );
  }
}

export default App;
