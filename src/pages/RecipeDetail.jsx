import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.meals) {
          setRecipe(data.meals[0]);
        }
      });
  }, [id]);

  return (
    <div>
      <Header/>
      {recipe ? (
        <div>
          <h1>{recipe.strMeal}</h1>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h3>Catégorie : {recipe.strCategory}</h3>
          <h3>Origine : {recipe.strArea}</h3>
          <p>{recipe.strInstructions}</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
      <Footer/>
    </div>
  );
}

export default RecipeDetail;
