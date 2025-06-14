import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import defaultPoster from "../assets/default_poster.png";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const posterUrl =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : defaultPoster;

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card-link">
      <motion.div
        className="movie-card"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <img
          src={posterUrl}
          alt={movie.Title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultPoster;
          }}
        />

        <div className="movie-info">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default MovieCard;
