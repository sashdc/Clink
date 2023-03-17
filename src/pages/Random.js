import React, { useState, useEffect } from "react";
import "../styles/recipe.css";
import NavTabs from "../components/NavTabs";
import Recipe from "../components/Recipe";
import "animate.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



const Random = () => {
  
    return (
      <div>
        <img className="background" src="./images/pour.jpg" />

          <NavTabs />
          <Recipe />
      </div>
    );
  
};

export default Random;
