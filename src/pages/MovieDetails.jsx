import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/movieApi";
import { motion } from "framer-motion";
import defaultPoster from "../assets/default_poster.png";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then((res) => setMovie(res.data));
  }, [id]);

  const posterUrl =
    movie && movie.Poster !== "N/A" ? movie.Poster : defaultPoster;

  return movie ? (
    <motion.div
      className="details-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img
        src={posterUrl}
        alt={movie.Title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultPoster;
        }}
      />
      <div className="details-text">
        <h1>
          {movie.Title} ({movie.Year})
        </h1>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </motion.div>
  ) : (
    <p className="loading">Loading...</p>
  );
}

export default MovieDetails;
