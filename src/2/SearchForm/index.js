import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

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

const SearchForm = props => (
  <Card className={props.classes.formCard}>
    <CardContent>
      <div className={props.classes.form}>
        <form>
          <Typography component="p" className={props.classes.content}>
            Search for your product
          </Typography>

          <TextField id="full-width" placeholder="product" fullWidth />

          <Button
            variant="contained"
            size="large"
            color="primary"
            className={props.classes.searchBtn}
          >
            Search
          </Button>
        </form>
      </div>
    </CardContent>
  </Card>
);

export default withStyles(styles)(SearchForm);
