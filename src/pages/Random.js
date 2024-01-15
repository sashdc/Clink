import React from "react";
import "../styles/recipe.css";
import NavTabs from "../components/NavTabs";
import Recipe from "../components/Recipe";
import "animate.css";
import Search from "../components/Search";

const Random = () => {
  return (
    <div>
      <NavTabs />
      <Search />
      <Recipe />
    </div>
  );
};

export default Random;
