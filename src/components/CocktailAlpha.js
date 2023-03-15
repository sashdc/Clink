import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import '../styles/cocktailAlpha.css';


const CocktailAlpha = () => {
  const [cocktails, setCocktails] = useState([]);
  const { letter } = useParams();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then(response => response.json())
      .then(data => setCocktails(data.drinks))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='cocktails'>
            <img className="background" src="../images/bottles.jpg"/>
      <Link to="/"> <h2 id="home-btn">Back Home</h2>
</Link>
      <h1 className='section-heading'>Cocktails beginning with {letter}</h1>
      {/* back to alphabet list */}
      <Link to="/list">Back to Alphabet List</Link>
      <div className=''>
      <ul className='cocktail-grid'>
        {cocktails.map(cocktail => (
           <div className='cocktail'><Link to={`/${cocktail.strDrink}`}>
            <img src={cocktail.strDrinkThumb} alt = {cocktail.strDrink} className='rounded' height='200px'/>
          <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
          
          </Link>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default CocktailAlpha