import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function SearchPage() {
  const { query } = useParams();  // Récupère le terme de recherche depuis l'URL
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      if (data && data.meals) {
        setRecipes(data.meals);  // Met à jour les recettes correspondant à la recherche
      } else {
        setRecipes([]);  // Si aucune recette n'est trouvée
      }
    };

    if (query) {
      fetchRecipes();
    }
  }, [query]);

  return (
    <div>
      <Header />
      <h1>Résultats de la recherche pour : {query}</h1>
      {recipes.length === 0 ? (
        <p>Aucune recette trouvée.</p>
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
      <Footer />
    </div>
  );
}

export default SearchPage;
