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
      {/* <img
        className="background"
        src="../images/bar.webp"
        alt="a bar with bottles on the shelves lit with red neon bar sign"
      /> */}
      <div className="main-nav animate__animated animate__fadeIn">
        <Link to="/Random" onClick={playSound}>
          <div className="main-tile tile-random">
            <h2 className="tile-title">Random</h2>
          </div>
        </Link>
        <Link to="/List" onClick={playSound}>
          <div className="main-tile tile-list">
            {" "}
            <h2 className="tile-title">A-Z</h2>
          </div>
        </Link>
        <Link to="/Bar" onClick={playSound}>
          <div className="main-tile tile-bar">
            {" "}
            <h2 className="tile-title">Bar</h2>
          </div>
        </Link>
        <Link to="/Favourites" onClick={playSound}>
          <div className="main-tile tile-fav">
            {" "}
            <h2 className="tile-title">Favourites</h2>
          </div>
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
