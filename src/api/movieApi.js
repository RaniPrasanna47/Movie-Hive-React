import axios from "axios";

const API_KEY = "75440bac";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);

export const getMovieDetails = async (imdbID) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
