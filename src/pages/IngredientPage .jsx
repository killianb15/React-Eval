import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function IngredientPage() {
  const { ingredient } = useParams(); // Récupère l'ingrédient depuis l'URL
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Appel de l'API pour rechercher les recettes contenant cet ingrédient
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.meals) {
          setRecipes(data.meals); // Met à jour les recettes
        }
      });
  }, [ingredient]);

  return (
    <>
      <Header />
      <div className="ingredient-page">
        <h1>Recettes contenant l'ingrédient : {ingredient}</h1>
        <div className="button-group">
          <Link to="/">
            <button className="homepage-button">Retour à l'accueil</button>
          </Link>
          <Link to="/recipe/random">
            <button className="homepage-button">Recette Aléatoire</button>
          </Link>
        </div>

        {recipes.length === 0 ? (
          <p>Aucune recette trouvée avec cet ingrédient.</p>
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
      <Footer />
    </>
  );
}

export default IngredientPage;
