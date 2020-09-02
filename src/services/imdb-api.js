import Axios from 'axios'
import qs from 'qs'

const API_KEY = 'bbff28cd'
const BASE_URL = 'http://www.omdbapi.com/'

export async function getMovieResultFromImdb(query) {
  console.log(query)
  const queryParam = {
    s: query,
    apikey: API_KEY
  }
  const result = await Axios.get(`${BASE_URL}?${qs.stringify(queryParam)}`)
  return result.data.Search
}

export async function getMovieDetailFromImdb(movieId) {
  const queryParam = {
    i: movieId,
    apiKey: API_KEY
  }
  const result = await Axios.get(`${BASE_URL}?${qs.stringify(queryParam)}`)
  return result.data
}