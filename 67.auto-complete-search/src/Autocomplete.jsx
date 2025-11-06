import React, { useState, useEffect } from 'react';
import './Autocomplete.css';

function Autocomplete({ suggestions }) {
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // This effect should fetch/filter suggestions
   const id=setTimeout(()=>{
     if (inputValue) {
      setLoading(true);
      const filtered = suggestions.filter(
        suggestion => suggestion.toLowerCase().includes(inputValue)
      );
      setFilteredSuggestions(filtered);
      setLoading(false);
    }else{
        setFilteredSuggestions([]);
    }
   },300)
   return ()=>clearTimeout(id)
  }, [inputValue,suggestions]);


  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    // This should update the input and hide suggestions
    setInputValue(suggestion)
    setShowSuggestions(false);

  };


  return (
    <div className="autocomplete-container">
      <input
        type="text"
        className="autocomplete-input"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type to search..."
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && inputValue && (
        <ul className="suggestions-list">
          {loading ? (
            <li className="suggestion-item loading">Loading...</li>
          ) : (
            filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((suggestion, index) => (
                <li
                  key={suggestion}
                  className="suggestion-item"
                  // Wire up the click handler
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))
            ) : (
              <li className="suggestion-item loading">No results found.</li>
            )
          )}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;