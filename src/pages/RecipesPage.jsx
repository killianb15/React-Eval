import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Appel de l'API pour récupérer les 6 premières recettes
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.meals) {
          // Limite le nombre de recettes à 6
          setRecipes(data.meals.slice(0, 6));
        }
      });
  }, []);

  return (
    <div>
      <Header />
      <h1>Recettes</h1>
      <Link to="/">
        <button>Retour à l'accueil</button>
      </Link>
      {recipes.length === 0 ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <p>Chargement des recettes</p>
        </div>
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

export default RecipesPage;
