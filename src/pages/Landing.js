import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="main-splash">
      <div className="main-nav">
        <Link to="/random">
          {" "}
          <h2 className="main-tile">Random</h2>
                  </Link>
        <Link to="/List">
          {" "}
          <h2 className="main-tile">List</h2>
        </Link>
        <Link to="/Bar">
          {" "}
          <h2 className="main-tile">Bar</h2>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
