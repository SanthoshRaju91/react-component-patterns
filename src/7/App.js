import React, { Component } from "react";
import Products from "./ProductList";
import Product from "./Product";
import Search from "./Search";
import ProductContext from "./context";

import "./styles.css";

function renderProduct(data, onFavouriteHandler) {
  return <Product data={data} onFavourite={onFavouriteHandler} />;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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
          data,
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

  onSearch = value => {
    const {
      data: { products }
    } = this.state;

    const filtered = products.filter(
      current => current.productName.toLowerCase().indexOf(value) > -1
    );

    this.setState({
      products: filtered
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Search onSearch={this.onSearch} />
        <br />

        <ProductContext.Provider
          value={{ products, onFavourite: this.onFavourite }}
        >
          <Products>
            {data => (
              <div>
                <Product data={data} />
                <p>In Stock - {data.inStock}</p>
              </div>
            )}
          </Products>
        </ProductContext.Provider>
      </div>
    );
  }
}

export default App;
