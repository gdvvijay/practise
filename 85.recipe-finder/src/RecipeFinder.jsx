import React, {useState} from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import { fetchRecipesByIngredient } from './mockRecipeApi';

function RecipeFinder() {
  const [recipes, setRecipes] = useState([]);
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // This should trigger the API call
    setStatus('loading');
    fetchRecipesByIngredient(query).then(data => {
      setRecipes(data.recipes);
      setStatus('success');
    }).catch((err)=>{
        console.error(err)
        setStatus('error')
    })
  };

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery)
  };

  return (
    <div className="recipe-finder">
      <SearchBar
        value={query}
        onChange={handleQueryChange}
        onSearch={handleSearch}
      />
      <div className="content-area">
        {status === 'idle' && <p>Type an ingredient and click "Search" to find recipes!</p>}
        {status === 'loading' && <p>Loading...</p>}
        {status === 'error' && <p>Oops! Something went wrong.</p>}
         {status === 'success' && recipes.length === 0 && <p>No recipes found for "{query}".</p>}
        {status === 'success' && recipes.length > 0 && <RecipeList recipes={recipes} />}
      </div>
    </div>
  );
}

export default RecipeFinder;