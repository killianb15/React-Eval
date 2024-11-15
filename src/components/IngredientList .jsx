import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function IngredientList() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
      const data = await response.json();
      if (data && data.meals) {
        // Limite à 6 ingrédients
        setIngredients(data.meals);
      }
    };

    fetchIngredients();
  }, []);

  return (
    <div>
      <h1>Ingrédients</h1>
      <div className="ingredient-list">
        {ingredients.map((ingredient) => (
          <div key={ingredient.strIngredient} className="ingredient-item">
            <Link to={`/ingredient/${ingredient.strIngredient}`}>
              <img
                src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`}
                alt={ingredient.strIngredient}
                className="ingredient-image"
              />
              <h3>{ingredient.strIngredient}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IngredientList;
