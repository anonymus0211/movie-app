import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { getMovieResultFromImdb } from "../services/imdb-api";
import MovieCard from '../components/MovieCard'
import MovieFilter from "../components/MovieFilter";

const MovieList = ({ history }) => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(false)

  const handleFilterSubmit = async (filter) => {
    try {
      setLoading(true)
      const videosResult = await getMovieResultFromImdb(filter);
      setVideos(videosResult || []);
    } catch (err) {

    } finally {
      setLoading(false)
    }
  }

  const handleOnClick = (title) => history.push(`/movie/${title}`)

  return (
    <>
      <MovieFilter handleSubmit={handleFilterSubmit}/>
      {loading
        ? <CircularProgress />
        : !videos.length
          ? 'Please search for movies'
          : <Grid container spacing={2} alignItems="stretch">
            {videos.map((video, idx) => (
              <MovieCard
                onClick={() => handleOnClick(video.Title)}
                key={idx}
                title={video.Title}
                image={video.Poster}
              />
            ))}
          </Grid>
      }
    </>
  );
};

export default MovieList;
