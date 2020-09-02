import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import {
  Container,
  InputBase,
  IconButton,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px 0",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  gridListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
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

export default function MovieFilter({ handleSubmit }) {
  const classes = useStyles();
  const [filter, setFilter] = useState("");
  const onChangeFilterHandler = (event) => {
    setFilter(event.currentTarget.value);
  };

  const submitHandler = event => {
    event.preventDefault()
    handleSubmit(filter)
  }

  return (
    <Container maxWidth="sm">
      <Paper component="form" onSubmit={submitHandler} className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search for Movies"
          inputProps={{ "aria-label": "search for movies" }}
          value={filter}
          onChange={onChangeFilterHandler}
        />
        <IconButton
          type="submit"
          aria-label="search"
          className={classes.iconButton}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
}