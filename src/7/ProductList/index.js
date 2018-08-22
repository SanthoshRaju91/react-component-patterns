import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "../Product";
import ProductContext from "../context";

const Products = ({ products = [], onFavourite, children }) => (
  <ProductContext.Consumer>
    {({ products }) => (
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
    )}
  </ProductContext.Consumer>
);

export default Products;
