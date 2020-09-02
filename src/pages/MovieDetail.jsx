import React, { useEffect, useState } from "react";
import {
  Grid,
  CircularProgress,
  Container,
  Button
} from "@material-ui/core";
import { getDetailsFromWikipedia } from '../services/wikipedia-api'

const MovieDetail = ({ history, match }) => {
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovieContent = async () => {
      setLoading(true);
      try {
        const content = await getDetailsFromWikipedia(match.params.title);
        const keys = Object.keys(content)
        console.log(keys)
        if (keys.length) {
          let video = content[keys[0]]

          console.log(JSON.stringify(video, null, 2));
          setMovie(video || {});
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false);
      }
    };
    fetchMovieContent();
  }, [match.params.title]);

  if (loading) {
    return <CircularProgress />
  }

  return (
    <>
      <Container maxWidth="sm">
        <h1>{movie.title}</h1>
      </Container>
      <Container maxWidth="sm">
        <p>{movie.extract}</p>
      </Container>
      <Button onClick={() => history.goBack()}> Go Back</Button>
    </>
  );
};

export default MovieDetail;
