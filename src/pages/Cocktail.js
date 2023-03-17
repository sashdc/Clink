// import React from 'react'
import React, { useState, useEffect } from "react";
import '../styles/recipe.css'
import "animate.css";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Recipe from "../components/Recipe";
import Shaker from "../components/Shaker";
import NavTabs from "../components/NavTabs";



const Cocktail = () => {

    return (
    <div>
              <img className="background" src="./images/pour.jpg" />

            <NavTabs />
            <Recipe />
    </div>
  )}


export default Cocktail