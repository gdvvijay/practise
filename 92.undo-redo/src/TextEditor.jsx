import React, { useState, useEffect } from 'react';
import './TextEditor.css';

// Custom hook for debouncing
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

function TextEditor() {
  const [text, setText] = useState('');
  const [history, setHistory] = useState(['']); // Array to store text states
  const [currentIndex, setCurrentIndex] = useState(0); // Pointer to the current state in history
  
  // Bug 1 Fix: Debounce the text value. We only update the history after the user stops typing.
  const debouncedText = useDebounce(text, 500); // 500ms delay

  // Effect to handle saving history
  useEffect(() => {
    // Only add to history if the debounced text is different from the last saved state.
    if (debouncedText !== history[currentIndex]) {
      // Bug 4 Fix: If we type after undoing, we must discard the old "future" states.
      // We create a new history from the beginning up to the current pointer.
      const newHistory = [...history.slice(0, currentIndex + 1), debouncedText];
      setHistory(newHistory);
      // Bug 5 Fix: Move the pointer to the end of the new history.
      setCurrentIndex(newHistory.length - 1);
    }
  }, [debouncedText]);


  const handleChange = (e) => {
    // Just update the "live" text. The debounced effect will handle history.
    setText(e.target.value);
  };
  
  const handleUndo = () => {
    // Bug 2 Fix: Correctly decrement the index pointer.
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      // Update the live text to match the new history state
      setText(history[currentIndex - 1]);
    }
  };
  
  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      // Update the live text to match the new history state
      setText(history[currentIndex + 1]);
    }
  };


  return (
    <div className="editor-container">
      <div className="editor-controls">
        {/* Bug 3 Fix: The button should be disabled when currentIndex is 0. */}
        <button onClick={handleUndo} disabled={currentIndex === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={currentIndex === history.length - 1}>
          Redo
        </button>
      </div>
      <textarea
        className="text-area"
        // The value is the live text, not from history.
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
      />
    </div>
  );
}

export default TextEditor;