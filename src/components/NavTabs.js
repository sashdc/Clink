import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navtabs.css";

const NavTabs = () => {
  const location = useLocation();
  const page = location.pathname;

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navtabs">
      <Link to="/">
        <h2 id="nav-btn">Home</h2>
      </Link>

      <Link to="/Favourites">
        {" "}
        <h2
          id="nav-btn"
          className={page === "/Favourites" ? "active-page" : ""}
        >
          Favourites
        </h2>
      </Link>

      <Link to="/List">
        {" "}
        <h2 id="nav-btn" className={page === "/List" ? "active-page" : ""}>
          A-Z
        </h2>
      </Link>
      <Link to="/Bar">
        <h2 id="nav-btn" className={page === "/Bar" ? "active-page" : ""}>
          {isSmallScreen ? "Bar" : "What's in your bar?"}
        </h2>
      </Link>
      {/* renders random again button when on random page, and random button otherwise */}
      {page === "/Random" ? (
        <Link to="/Random" onClick={() => window.location.reload()}>
          {" "}
          <h2 id="nav-btn" className={page === "/Random" ? "active-page" : ""}>
            {!isSmallScreen ? "Random Again" : "Random"}
          </h2>
        </Link>
      ) : (
        <Link to="/Random">
          {" "}
          <h2 id="nav-btn">Random</h2>
        </Link>
      )}
    </div>
  );
};

export default NavTabs;
