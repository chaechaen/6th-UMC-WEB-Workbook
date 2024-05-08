import React from "react";
import { useState } from "react";
import "./Movie.css";

function Movie({ title, poster_path, vote_average, id, overview }) {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const posterURL = `${baseURL}${poster_path}`; // poster_path 슬래시 포함
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="movie-container"
      onMouseEnter={() => setIsHovered(true)} // 마우스가 요소 위로 진입했을 때 실행되는 이벤트 핸들러
      onMouseLeave={() => setIsHovered(false)} // 마우스가 요소를 빠져나갈 때 실행되는 이벤트 핸들러
    >
      <img src={posterURL} alt={title} />
      {isHovered && ( // 마우스가 호버되었을 때 렌더링
        <div className="hover-info">
          <h5>{title}</h5>
          <span>{overview}</span>
          <p>{id}</p>
        </div>
      )}

      {!isHovered && ( // 마우스가 호버되지 않았을 때 렌더링
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
