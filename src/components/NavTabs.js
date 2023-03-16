import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navtabs.css";

const NavTabs = () => {
  const location = useLocation();
  const page = location.pathname;
  console.log(location);

  return (
    <div className="navtabs">
      {/* render only if page location is not the same as link */}

      <Link to="/">
        {" "}
        <h2 id="nav-btn">Back Home</h2>
      </Link>

      {page === "/List" ? null : (
        <Link to="/List">
          {" "}
          <h2 id="nav-btn">A-Z</h2>
        </Link>
      )}
      {page === "/Bar" ? null : (
        <Link to="/Bar">
          {" "}
          <h2 id="nav-btn">What's in your bar?</h2>
        </Link>
      )}
      {page === "/Random" ? null : (
        <Link to="/Random">
          {" "}
          <h2 id="nav-btn">Random</h2>
        </Link>
      )}
    </div>
  );
};

export default NavTabs;
