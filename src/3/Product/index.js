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
    maxWidth: 355
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
    fontSize: "12px",
    height: 200
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
      image={props.data.image}
      title="ATTIITUDE WHITE T-SHIRT WITH VERTICAL PIGMENT PRINT"
    />
    <CardContent>
      <Typography gutterBottom component="h2" className={props.classes.header}>
        {props.data.productName}
      </Typography>

      <Typography gutterBottom component="p" className={props.classes.desc}>
        {props.data.productDesc}
      </Typography>
    </CardContent>

    <CardActions className={props.classes.actions} disableActionSpacing>
      {props.data.isFav ? (
        <IconButton
          aria-label="Add to favorites"
          color="secondary"
          onClick={() => props.onFavourite(props.data)}
        >
          <FavoriteIcon />
        </IconButton>
      ) : (
        <IconButton
          aria-label="Add to favorites"
          onClick={() => props.onFavourite(props.data)}
        >
          <FavoriteIcon />
        </IconButton>
      )}

      <Typography gutterBottom component="h2" className={props.classes.price}>
        Price - ${props.data.price}
      </Typography>
    </CardActions>
  </Card>
);

export default withStyles(styles)(Product);
