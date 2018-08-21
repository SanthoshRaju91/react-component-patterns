import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  actions: {
    display: "flex"
  },
  header: {
    fontWeight: "bold"
  },
  desc: {
    marginTop: "20px",
    fontSize: "12px"
  },
  actions: {
    display: "flex"
  },
  price: {
    marginLeft: "30px",
    marginTop: "5px",
    fontWeight: "bold",
    fontSize: "14px"
  }
});

const Product = props => (
  <Card className={props.classes.card}>
    <CardMedia
      className={props.classes.media}
      image="https://cdn.shopify.com/s/files/1/1662/7629/products/1_79313561-9ef0-4911-912a-122709aac8e3.jpg?v=1527600590"
      title="ATTIITUDE WHITE T-SHIRT WITH VERTICAL PIGMENT PRINT"
    />
    <CardContent>
      <Typography gutterBottom component="h2" className={props.classes.header}>
        ATTIITUDE WHITE T-SHIRT WITH VERTICAL PIGMENT PRINT
      </Typography>

      <Typography gutterBottom component="p" className={props.classes.desc}>
        An Iconic Piece From The French Underground Collection Features A
        Vertical Branding Between The Chest And Double I Branding On Both The
        Sleeves. This White T-Shirt Adds A Touch Of Style To The Look.
      </Typography>
    </CardContent>

    <CardActions className={props.classes.actions} disableActionSpacing>
      <IconButton aria-label="Add to favorites">
        <FavoriteIcon />
      </IconButton>

      <Typography gutterBottom component="h2" className={props.classes.price}>
        Price - 250
      </Typography>
    </CardActions>
  </Card>
);

export default withStyles(styles)(Product);
