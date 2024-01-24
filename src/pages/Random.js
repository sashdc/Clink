import React, { useState } from "react";
import "../styles/recipe.css";
import NavTabs from "../components/NavTabs";
import Recipe from "../components/Recipe";
import "animate.css";
import Search from "../components/Search";

const Random = () => {
  const [reloadRecipeComponent, setReloadRecipeComponent] = useState(false);

  const handleReloadRecipe = () => {
    setReloadRecipeComponent(!reloadRecipeComponent);
  };

  return (
    <div>
      <NavTabs onReloadRecipe={handleReloadRecipe} />
      <Search />
      <Recipe reloadRecipeComponent={reloadRecipeComponent} />
    </div>
  );
};

export default Random;
