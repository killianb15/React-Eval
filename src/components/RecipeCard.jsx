import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Card.css';

function RecipeCard({ recipe }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/recipe/show/${recipe.idMeal}`}
      className="card-link"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card ${isHovered ? 'expand' : ''}`}>
        <h2 className="card-title">{recipe.strMeal}</h2>
        <div className="card-content">
          <img
            className="card-image"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
