import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/Movie/Movie.css";
import Movie from "../components/Movie/Movie";

function UpComing() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = " "; // 내 API 키 (TMDB에서 제공)
    const BASE_URL = "https://api.themoviedb.org/3"; // TMDB API의 기본 URL
    const endpoint = `/movie/upcoming?api_key=${API_KEY}`;

    axios
      .get(BASE_URL + endpoint) // TMDB API에 GET 요청 보냄
      // 응답 데이터는 reponse 객체에 포함되어 영화 목록이 포함된 response.data.results를 가져와 상태 업데이트
      .then((response) => {
        // 요청 성공시 실행
        setMovies(response.data.results);
        console.log("API 응답: ", response); // 응답 내용 찍어보기
      })
      .catch((error) => {
        // 요청 실패시 실행
        console.error("API 요청 중 오류 발생:", error); // 에러 메시지 출력
      });
  }, []);

  return (
    <div className="app-container">
      {movies.map((item) => (
        <Movie
          key={item.id}
          title={item.title}
          poster_path={item.poster_path}
          vote_average={item.vote_average}
          overview={item.overview}
        />
      ))}
    </div>
  );
}

export default UpComing;