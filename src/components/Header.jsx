import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Gérer la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);  // Redirige vers la page de résultats de la recherche
    }
  };

  return (
    <header>
      <h1>Recette App</h1> {/* Titre du projet */}
      <nav>
        <Link to="/">Accueil  </Link>
        <Link to="/recipe">Voir les Recettes  </Link>
        <Link to="/recipe/random">Recette Aléatoire  </Link>
      </nav>

      {/* Formulaire de recherche */}
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Rechercher une recette..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}  // Met à jour la recherche au fur et à mesure
        />
        <button type="submit">Rechercher</button>
      </form>
    </header>
  );
}

export default Header;
