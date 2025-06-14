import { useState, useEffect } from "react";
import { searchMovies } from "../api/movieApi";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query) {
      searchMovies(query).then((res) => {
        if (res.data.Response === "True") {
          setMovies(res.data.Search);
          setError(false);
        } else {
          setMovies([]);
          setError(true);
        }
      });
    }
  }, [query]);

  return (
    <div className="home">
      <SearchBar onSearch={setQuery} />
      {query === "" && (
        <motion.div
          className="welcome-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Explore the movies you like 🍿</h2>
        </motion.div>
      )}

      {error && (
        <motion.div
          className="error-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p>Movie does not exist.</p>
        </motion.div>
      )}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
