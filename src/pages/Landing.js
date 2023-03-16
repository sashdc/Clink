import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import "animate.css";
// import shaker component

const Landing = () => {
  return (
    <div className="main-splash animate__animated animate__fadeIn">
 
      <div className="main-nav">
        <Link to="/random">
          
          <h2 className="main-tile tile-random">Random</h2>
                  </Link>
        <Link to="/List">
          <h2 className="main-tile tile-list">A-Z</h2>
        </Link>
        <Link to="/Bar">
        
          <h2 className="main-tile tile-bar">Bar</h2>
        </Link>
      </div>
      <div className="main-title">
        <h1 className="main-title-text">CLiNK</h1>
      </div>
    </div>
  );
};

export default Landing;
