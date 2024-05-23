import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="welcome-banner">
        <h1 className="welcome-text">환영합니다</h1>
      </div>
      <div className="find-movies">
        <h2>Find your movies!</h2>
        <div className="search-container">
          <input type="text" placeholder="영화를 검색하세요" />
          <button type="button">검색</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
