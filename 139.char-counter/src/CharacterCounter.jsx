import React, { useState } from 'react';
import './CharacterCounter.css';

function CharacterCounter({ maxLength }) {
  const [text, setText] = useState('Some default text');
  const [charCount, setCharCount] = useState(text.length);

  const handleChange = (e) => {
    // This should update the text and character count
    // const newText = text;
    setText(e.target.value);
    setCharCount(e.target.value.length);
  };
  
  const isOverLimit = charCount >= maxLength;

  return (
    <div className="counter-container">
      <textarea
        className="text-input"
        value={text}
        placeholder="What's happening?"
        onChange={handleChange}
      />
      <div className="counter-feedback">
        <span className="char-count">{charCount}</span>
        {isOverLimit && <span className="error-message">Too long!</span>}
      </div>
    </div>
  );
}

export default CharacterCounter;