import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard ";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      const data = await response.json();
      if (data && data.categories) {
        setCategories(data.categories.slice(0, 6));  // Limite à 6 catégories
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Catégories de Recettes</h1>
      <div className="category-grid">
        {categories.map((category) => (
          <CategoryCard key={category.strCategory} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
