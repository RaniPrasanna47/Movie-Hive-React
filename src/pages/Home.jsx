import { useState, useEffect } from "react";
import { searchMovies, getMovieDetails } from "../api/movieApi";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import "./Home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const popularMovieIds = [
    "tt0111161", // The Shawshank Redemption
    "tt0068646", // The Godfather
    "tt0468569", // The Dark Knight
    "tt0108052", // Schindler's List
    "tt0167260", // Return of the King
    "tt0133093", // The Matrix
    "tt0120737", // Fellowship of the Ring
    "tt0109830", // Forrest Gump
  ];

  const fetchPopularMovies = async () => {
    const results = await Promise.all(
      popularMovieIds.map((id) => getMovieDetails(id).then((res) => res.data))
    );
    setMovies(results);
  };

  const fetchMatchingMovies = async () => {
    const pagesToSearch = [1, 2, 3];
    const allResults = [];

    for (const page of pagesToSearch) {
      const res = await searchMovies(query, page);
      if (res.data.Search) {
        allResults.push(...res.data.Search);
      }
    }

    const uniqueMovies = Array.from(
      new Map(allResults.map((m) => [m.imdbID, m])).values()
    );

    const filtered = uniqueMovies.filter((movie) =>
      movie.Title.toLowerCase().startsWith(query.toLowerCase())
    );

    setMovies(filtered);
  };

  useEffect(() => {
    if (query.trim()) {
      fetchMatchingMovies();
    } else {
      fetchPopularMovies();
    }
  }, [query]);

  return (
    <div className="home">
      <SearchBar onSearch={setQuery} />
      <h2 className="popular-heading">Popular Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;