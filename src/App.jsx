import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipesPage from './pages/RecipesPage';
import RecipeDetail from './pages/RecipeDetail';
import HomePage from './pages/homepage';
import RandomRecipe from './pages/RandomRecipe';
import SearchPage from './pages/SearchPage';
import CategoryList from './components/CategoryList';
import CategoryPage from './pages/CategoryPage';
import IngredientList from './components/IngredientList ';
import IngredientPage from './pages/IngredientPage ';
import './App.css';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Recipe" element={<RecipesPage />} />
          <Route path="/recipe/show/:id" element={<RecipeDetail />} />
          <Route path="/recipe/random" element={<RandomRecipe />} />
          <Route path="/search/:query" element={<SearchPage />} />  
          <Route path="/category" element={<CategoryList />} />  
          <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/ingredients" element={<IngredientList />} />  {/* Liste des ingrédients */}
        <Route path="/ingredient/:ingredient" element={<IngredientPage />} />  {/* Page par ingrédient */}
        </Routes> 
      </BrowserRouter>
  );
}

export default App;
