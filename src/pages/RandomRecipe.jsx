import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
function RandomRecipe() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRandomRecipe = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      if (data && data.meals) {
        setRecipe(data.meals[0]);  // On récupère la première recette
      }
    };

    fetchRandomRecipe();
  }, []);

  return (
    <div>
        <Header/>
      {recipe ? (
        <div>
          <h1>Recette Aléatoire</h1>
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>Catégorie : {recipe.strCategory}</h3>
          <h3>Origine : {recipe.strArea}</h3>
          <p>{recipe.strInstructions}</p>
        </div>
      ) : (
        <p>Chargement de la recette...</p>
      )}
      <Footer/>
    </div>
  );
}

export default RandomRecipe;
