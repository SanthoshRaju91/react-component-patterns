import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import DisableHOC from "./disableHOC";

const styles = {
  form: {
    width: "75%",
    margin: "0 auto"
  },

  content: {
    margin: "20 auto"
  },
  formCard: {
    marginTop: "20px"
  },
  searchBtn: {
    width: "100%",
    marginTop: "30px",
    marginBottom: "30px"
  }
};

const SearchForm = ({
  classes,
  value,
  disabled,
  onChangeHandler,
  onSubmitHandler
}) => (
  <Card className={classes.formCard}>
    <CardContent>
      <div className={classes.form}>
        <form onSubmit={onSubmitHandler}>
          <Typography component="p" className={classes.content}>
            Search for your product
          </Typography>

          <TextField
            id="full-width"
            placeholder="product"
            fullWidth
            value={value}
            onChange={e => onChangeHandler(e)}
          />

          <Button
            variant="contained"
            size="large"
            color="primary"
            disabled={disabled}
            className={classes.searchBtn}
            onClick={onSubmitHandler}
          >
            Search
          </Button>
        </form>
      </div>
    </CardContent>
  </Card>
);

export default withStyles(styles)(DisableHOC(SearchForm));
