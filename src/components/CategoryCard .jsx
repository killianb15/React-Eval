import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Card.css';

function CategoryCard({ category }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/category/${category.strCategory}`}
      className="card-link"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`card ${isHovered ? 'expand' : ''}`}>
        <h2 className="card-title">{category.strCategory}</h2>
        <div className="card-content">
          <img
            className="card-image"
            src={category.strCategoryThumb}
            alt={category.strCategory}
          />
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;
