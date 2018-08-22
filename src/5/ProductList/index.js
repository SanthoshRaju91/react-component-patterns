import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product";

const Products = ({ products = [], onFavourite, children }) => (
  <Grid container spacing={16}>
    {products.map(current => {
      const data = {
        ...current,
        image: current.productImages[0]
      };
      return (
        <Grid item key={data.id}>
          {children(data, onFavourite)}
        </Grid>
      );
    })}
  </Grid>
);

export default Products;
