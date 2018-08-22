import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product";

const Products = ({ products = [], onFavourite }) => (
  <Grid container spacing={16}>
    {products.map(current => {
      const data = {
        ...current,
        image: current.productImages[0]
      };
      return (
        <Grid item>
          <Product data={data} onFavourite={onFavourite} />
        </Grid>
      );
    })}
  </Grid>
);

export default Products;
