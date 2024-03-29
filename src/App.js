import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "animate.css";

import Random from "./pages/Random";
// import Layout from "./components/Layout";
import React from "react";
import Landing from "./pages/Landing";
import List from "./pages/List";
import Bar from "./pages/Bar";
import Ingredient from "./pages/Ingredient";
import Cocktail from "./pages/Cocktail";
import CocktailAlpha from "./components/CocktailAlpha";
import SearchResults from "./pages/SearchResults";
import Favourites from "./pages/Favourites";


function App() {
  return (
    <div className="background-img">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/ingredients/:ingredient" element={<Ingredient />} />
          <Route path="/cocktails/:letter" element={<CocktailAlpha />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/:cocktail" element={<Cocktail />} />
          <Route path="/random" element={<Random />} />
          <Route path="/List" element={<List />} />
          <Route path="/Bar" element={<Bar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
