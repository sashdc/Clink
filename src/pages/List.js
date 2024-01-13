import React from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";
import "animate.css";
import NavTabs from "../components/NavTabs";
import Search from "../components/Search";

const List = () => {
  // no X
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWYZ".split("");

  return (
    <div className="alpha-list ">
       <img
        className="background"
        src="../images/bar.webp"
        alt="a bar with bottles on the shelves lit with red neon bar sign"
      />
      <NavTabs />
      <Search />
      <div className="alpha-grid animate__animated animate__fadeIn">
        {letters.map((letter, index) => (
          <Link to={`/cocktails/${letter}`}>
            <button className="alpha-button " key={index}>
              {letter}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
