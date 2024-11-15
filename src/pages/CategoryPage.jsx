import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { category } = useParams();  // Récupère la catégorie depuis l'URL
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipesByCategory = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await response.json();
      if (data && data.meals) {
        setRecipes(data.meals.slice(0, 6)); // Limite à 6 recettes
      } else {
        setRecipes([]);  // Si aucune recette n'est trouvée pour cette catégorie
      }
    };

    if (category) {
      fetchRecipesByCategory();
    }
  }, [category]);

  return (
    <div>
      <h1>Recettes de {category}</h1>
      {recipes.length === 0 ? (
        <p>Aucune recette trouvée dans cette catégorie.</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <div key={recipe.idMeal} className="card">
              <a href={`/recipe/show/${recipe.idMeal}`} className="card-link">
                <div className="card-content">
                  <h2 className="card-title">{recipe.strMeal}</h2>
                  <img className="card-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
