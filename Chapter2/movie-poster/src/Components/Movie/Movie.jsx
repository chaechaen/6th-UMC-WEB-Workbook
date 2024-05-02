import React from "react";
import { useState } from "react";

function Movie({ title, poster_path, vote_average, id, overview }) {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const posterURL = `${baseURL}${poster_path}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="movie-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={posterURL} alt={title} />
      {isHovered && (
        <div className="hover-info">
          <h5>{title}</h5>
          <span>{overview}</span>
          <p>{id}</p>
        </div>
      )}

      {!isHovered && (
        <div className="movie-info">
          <h5>{title}</h5>
          <span>{vote_average}</span>
          <p>{id}</p>
        </div>
      )}
    </div>
  );
}

export default Movie;
