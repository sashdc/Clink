import React from "react";
import "../styles/recipe.css";
import NavTabs from "../components/NavTabs";
import Recipe from "../components/Recipe";
import "animate.css";
import Search from "../components/Search";

const Random = () => {
  return (
    <div>
     {/* <img
        className="background"
        src="../images/bar.webp"
        alt="a bar with bottles on the shelves lit with red neon bar sign"
      /> */}

      <NavTabs />
      <Search />
      <Recipe />
    </div>
  );
};

export default Random;
