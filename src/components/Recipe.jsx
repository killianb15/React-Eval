import { useState, useEffect } from "react";
import axios from "axios";

function Recipes() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const result = await axios(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        setMeals(result.data.meals.slice(0, 6)); 
      } catch (error) {
        console.error("Erreur lors de la récupération des recettes", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div>
      <h1>Les 6 premières Recettes</h1>
      {meals.length > 0 ? ( 
        <ul>
          {meals.map((meal) => (  
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </div>
  );
}

export default Recipes;
