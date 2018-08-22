import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product";

class Products extends Component {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item>
          <Product />
        </Grid>
        <Grid item>
          <Product />
        </Grid>
        <Grid item>
          <Product />
        </Grid>
      </Grid>
    );
  }
}

export default Products;
