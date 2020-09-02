import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InfoIcon from "@material-ui/icons/Info";
import {
  Container,
  Grid,
  Card,
  CircularProgress,
  CardActions,
  CardActionArea,
  Typography,
  CardContent,
  Button,
  CardMedia,
} from "@material-ui/core";

const defaultImage =
  "https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  cardRoot: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
}));

export default function MovieCard({ title, image, onClick }) {
  const classes = useStyles();
  return (
    <Grid item md={3}>
      <Card className={classes.cardRoot}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image === "N/A" ? defaultImage : image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            type="button"
            onClick={onClick}
          >
            Show More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}