import React from 'react';
import './RecipeList.css';

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <a key={recipe.id} href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="recipe-card">
          <img src={recipe.image} alt={recipe.title} />
          <h3>{recipe.title}</h3>
        </a>
      ))}
    </div>
  );
}

export default RecipeList;