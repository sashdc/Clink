import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import "animate.css";


const Landing = () => {
  return (
    <div className="main-splash animate__animated animate__fadeIn">
      <div className="main-nav">
        <Link to="/random">
          
          <h2 className="main-tile tile-random">Random</h2>
                  </Link>
        <Link to="/List">
     
          <h2 className="main-tile tile-list">List</h2>
        </Link>
        <Link to="/Bar">
        
          <h2 className="main-tile tile-bar">Bar</h2>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
