import axios from "axios";

const API_KEY = "75440bac"; // 🔑 Replace with your OMDb API key
const BASE_URL = "https://www.omdbapi.com/";

// Search by title keyword with optional pagination
export const searchMovies = async (query, page = 1) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${query}&page=${page}`);

// Fetch full details for a single movie by IMDb ID
export const getMovieDetails = async (id) =>
  axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
