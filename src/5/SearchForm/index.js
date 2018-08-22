import React, { Component } from "react";
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

class SearchForm extends Component {
  static Text = props => (
    <Typography component="p" className={props.classes.content}>
      Search for your product
    </Typography>
  );

  static Input = props => (
    <TextField
      id="full-width"
      placeholder="product"
      fullWidth
      value={props.value}
      onChange={props.onChangeHandler}
    />
  );

  static Button = props => (
    <Button
      variant="contained"
      size="large"
      color="primary"
      className={props.classes.searchBtn}
      onClick={props.onSubmitHandler}
    >
      Search
    </Button>
  );

  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onChangeHandler = event => {
    this.setState({
      value: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();

    const { value } = this.state;
    this.props.onSearch(value);
  };

  render() {
    const { classes, children } = this.props;
    const { value } = this.state;
    return (
      <Card className={classes.formCard}>
        <CardContent>
          <div className={classes.form}>
            <form onSubmit={this.onSubmitHandler}>
              {React.Children.map(children, child => {
                return React.cloneElement(child, {
                  ...child.props,
                  classes,
                  value,
                  onChangeHandler: this.onChangeHandler,
                  onSubmitHandler: this.onSubmitHandler
                });
              })}
            </form>
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(SearchForm);
