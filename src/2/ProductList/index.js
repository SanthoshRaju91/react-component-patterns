import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import data from "./data.json";
import Product from "../Product";

class Products extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        {data.products.map(current => {
          const data = {
            ...current,
            image: current.productImages[0]
          };
          return (
            <Grid item>
              <Product data={data} />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

export default Products;
