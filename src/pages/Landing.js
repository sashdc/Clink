import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
// import shaker component
import clinkSound from "../assets/clinksound.mp3";
import Search from "../components/Search";

const Landing = () => {
  const playSound = () => {
    const audio = new Audio(clinkSound);
    audio.play();
  };

  return (
    <div className="main-splash ">
      <img
        className="background"
        src="../images/bar.webp"
        alt="a bar with bottles on the shelves lit with red neon bar sign"
      />
      <div className="main-nav animate__animated animate__fadeIn">
        <Link to="/Random" onClick={playSound}>
          <h2 className="main-tile tile-random">Random</h2>
        </Link>
        <Link to="/List" onClick={playSound}>
          <h2 className="main-tile tile-list">A-Z</h2>
        </Link>
        <Link to="/Bar" onClick={playSound}>
          <h2 className="main-tile tile-bar">Bar</h2>
        </Link>
        <Link to="/Favourites" onClick={playSound}>
          <h2 className="main-tile tile-fav">Favourites</h2>
        </Link>
      </div>
      <Search />
      <div className="main-title">
        <h1 className="main-title-text">CLiNK</h1>
      </div>
    </div>
  );
};

export default Landing;
