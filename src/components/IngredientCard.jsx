import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Card.css';

function IngredientCard({ ingredient }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/ingredient/${ingredient.strIngredient}`} // Lien vers la page spécifique de l'ingrédient
      className="card-link"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card ${isHovered ? 'expand' : ''}`}>
        <h2 className="card-title">{ingredient.strIngredient}</h2>
        <div className="card-content">
          {/* Image de l'ingrédient */}
          <img
            className="card-image"
            src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`} // Image de l'ingrédient
            alt={ingredient.strIngredient}
          />
        </div>
      </div>
    </Link>
  );
}

export default IngredientCard;
