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

  // const alcohol =()=> {
  //   if (cocktail.strAlcoholic === "Alcoholic") {
  //     return "Alcoholic"
  //   } else {
  //     return "Non-Alcoholic"
  //   }
  // }

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
            {/* if drnk is alcoholic show coktail, or mocktail if not */}
            {cocktail.strAlcoholic === "Alcoholic" ? <p className='cocktail-name'>{cocktail.strDrink} (Cocktail)</p> : <p className='cocktail-name'>{cocktail.strDrink} (Mocktail)</p>}
          {/* <li key={cocktail.idDrink}>{cocktail.strDrink}({cocktail.strAlcoholic})</li> */}
          
          </Link>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default CocktailAlpha