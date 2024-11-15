import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import CategoryCard from "../components/CategoryCard ";
import IngredientCard from "../components/IngredientCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../Card.css";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Fetch des recettes
    const fetchRecipes = async () => {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const data = await response.json();
      if (data && data.meals) {
        setRecipes(data.meals.slice(0, 6)); // Limiter à 6 recettes
      }
    };

    // Fetch des catégories
    const fetchCategories = async () => {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const data = await response.json();
      if (data && data.categories) {
        setCategories(data.categories.slice(0, 6)); // Limiter à 6 catégories
      }
    };

    // Fetch des ingrédients
    const fetchIngredients = async () => {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
      const data = await response.json();
      if (data && data.meals) {
        setIngredients(data.meals.slice(0, 6)); // Limiter à 6 ingrédients
      }
    };

    // Appels des fetchs
    fetchRecipes();
    fetchCategories();
    fetchIngredients();
  }, []);

  return (
    <div>
      <Header />
      <h1>Accueil</h1>

      <h2>Les 6 premières Recettes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>

      <h2>Les 6 premières Catégories</h2>
      <div className="recipe-grid">
        {categories.map((category) => (
          <CategoryCard key={category.strCategory} category={category} />
        ))}
      </div>

      <h2>Les 6 premiers Ingrédients</h2>
      <div className="recipe-grid">
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.idIngredient} ingredient={ingredient} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
