import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import SearchForm from "../SearchForm";

const styles = {
  header: {
    padding: "0px",
    paddingBottom: "0px !important"
  },
  name: {
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: "2px",
    fontSize: "16px",
    padding: "20px"
  }
};

const Search = props => (
  <div className="search">
    <Card>
      <CardContent className={props.classes.header}>
        <Typography gutterBottom component="h3" className={props.classes.name}>
          Online Shop
        </Typography>
      </CardContent>
    </Card>

    <SearchForm onSearch={props.onSearch}>
      <SearchForm.Input />
      <SearchForm.Button />
    </SearchForm>
  </div>
);

export default withStyles(styles)(Search);
