import React, { useState, useRef, useEffect, useCallback } from 'react';
import './RichTextEditor.css';

function RichTextEditor() {
  // Initial HTML content. This will only be used once with dangerouslySetInnerHTML.
  const initialHtml = '<p>Hello <strong>world</strong>! Start typing here...</p>';

  const [activeStyles, setActiveStyles] = useState(new Set());
  const editorRef = useRef(null);
  // We don't need editorHtml in state if we're not constantly re-rendering it.
  // If you need the current HTML, you can read from editorRef.current.innerHTML

  // Function to apply formatting using document.execCommand
  const applyFormat = (command, value = null) => {
    if (editorRef.current) {
      editorRef.current.focus(); // Ensure editor has focus
    }
    document.execCommand(command, false, value);
    updateActiveStyles(); // Update button states after command
    // IMPORTANT: Do NOT update editorHtml state here.
    // Let the browser manage the content of contentEditable directly.
  };

  // Function to update the active state of toolbar buttons based on current selection
  const updateActiveStyles = useCallback(() => {
    const newActiveStyles = new Set();
    if (document.queryCommandState('bold')) {
      newActiveStyles.add('bold');
    }
    if (document.queryCommandState('italic')) {
      newActiveStyles.add('italic');
    }
    if (document.queryCommandState('underline')) {
      newActiveStyles.add('underline');
    }
    if (document.queryCommandState('insertUnorderedList')) {
      newActiveStyles.add('insertUnorderedList');
    }
    if (document.queryCommandState('justifyLeft')) {
      newActiveStyles.add('justifyLeft');
    }
    if (document.queryCommandState('justifyCenter')) {
      newActiveStyles.add('justifyCenter');
    }
    if (document.queryCommandState('justifyRight')) {
      newActiveStyles.add('justifyRight');
    }
    // Add more commands as needed
    setActiveStyles(newActiveStyles);
  }, []);

  // Event handler for clicks on toolbar buttons
  const handleToolbarButtonClick = (command) => {
    applyFormat(command);
  };

  // Attach and detach selectionchange listener
  useEffect(() => {
    document.addEventListener('selectionchange', updateActiveStyles);

    // Cleanup function
    return () => {
      document.removeEventListener('selectionchange', updateActiveStyles);
    };
  }, [updateActiveStyles]);

  // Handle initial content setup for contentEditable
  // This useEffect ensures initialHtml is set once the ref is available.
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML === '') {
      editorRef.current.innerHTML = initialHtml;
    }
    updateActiveStyles(); // Initial update of styles
  }, [initialHtml, updateActiveStyles]);


  // Helper function to get current content (e.g., for saving)
  const getCurrentContent = () => {
    return editorRef.current ? editorRef.current.innerHTML : '';
  };

  // Example: Log content when the editor loses focus
  const handleBlur = () => {
    console.log("Editor content on blur:", getCurrentContent());
    // You would typically save the content to a parent component's state or an API here.
  };


  return (
    <div className="editor-container">
      <div className="toolbar">
        <button
          className={activeStyles.has('bold') ? 'active' : ''}
          onClick={() => handleToolbarButtonClick('bold')}
          title="Bold"
        >
          <b>B</b>
        </button>
        <button
          className={activeStyles.has('italic') ? 'active' : ''}
          onClick={() => handleToolbarButtonClick('italic')}
          title="Italic"
        >
          <i>I</i>
        </button>
        <button
          className={activeStyles.has('underline') ? 'active' : ''}
          onClick={() => handleToolbarButtonClick('underline')}
          title="Underline"
        >
          <u>U</u>
        </button>

        <button
          className={activeStyles.has('insertUnorderedList') ? 'active' : ''}
          onClick={() => handleToolbarButtonClick('insertUnorderedList')}
          title="Unordered List"
        >
          •
        </button>
        
      </div>
      <div
        ref={editorRef}
        className="editable-area"
        contentEditable={true}
        // Removed dangerouslySetInnerHTML from here to prevent re-renders.
        // The content is now managed directly by the browser after initial setup.
        onInput={updateActiveStyles} // Still useful for active styles after typing/pasting
        onMouseUp={updateActiveStyles}
        onKeyUp={updateActiveStyles}
        onBlur={handleBlur} // Example: Get content when editor loses focus
      >
        {/* No children or dangerouslySetInnerHTML here. Initial content handled in useEffect. */}
      </div>
    </div>
  );
}

export default RichTextEditor;