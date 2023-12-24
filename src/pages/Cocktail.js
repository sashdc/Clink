// import React from 'react'
import React from "react";
import "../styles/recipe.css";
import "animate.css";
// import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';
import Recipe from "../components/Recipe";
// import Shaker from "../components/Shaker";
import NavTabs from "../components/NavTabs";
import Search from "../components/Search";

const Cocktail = () => {
  return (
    <div>
      <Search />
      <img
        className="background"
        src="./images/pour.jpg"
        alt="a drink being poured at a bar"
      />

      <NavTabs />

      <Recipe />
    </div>
  );
};

export default Cocktail;
