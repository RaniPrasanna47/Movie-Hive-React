import { Link } from "react-router-dom";
import defaultPoster from "../assets/default_poster.png";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const posterUrl =
    movie.Poster && movie.Poster !== "N/A"
      ? movie.Poster
      : defaultPoster;

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      <img
        src={posterUrl}
        alt={movie.Title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultPoster;
        }}
      />
      <div className="card-overlay">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
