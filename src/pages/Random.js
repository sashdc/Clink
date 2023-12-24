import React from "react";
import "../styles/recipe.css";
import NavTabs from "../components/NavTabs";
import Recipe from "../components/Recipe";
import "animate.css";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import Search from "../components/Search";

const Random = () => {
  return (
    <div>
      <img
        className="background"
        src="./images/pour.jpg"
        alt="drink being poured at a bar"
      />

      <NavTabs />
      <Search />
      <Recipe />
    </div>
  );
};

export default Random;
