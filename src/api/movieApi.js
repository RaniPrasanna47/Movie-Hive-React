import axios from "axios";

const API_KEY = "75440bac"; 
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query, page = 1) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);

export const getMovieDetails = async (id) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
