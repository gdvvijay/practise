import React, { useState, useRef, useEffect, useCallback } from 'react';
import './DraggableNote.css';

function DraggableNote() {
  const [position, setPosition] = useState({ x: 50, y: 50 }); // Start at an initial position
  const [isDragging, setIsDragging] = useState(false);
  
  // Use a ref to store the starting offset
  const dragStartOffset = useRef({ x: 0, y: 0 });
  const noteRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    // Bug 5 Fix: Only start drag if the header is clicked
    if (e.target.className !== 'note-header') return;

    setIsDragging(true);

    // Bug 3 Fix: Calculate the initial offset of the mouse from the note's top-left corner
    const noteRect = noteRef.current.getBoundingClientRect();
    dragStartOffset.current = {
      x: e.clientX - noteRect.left,
      y: e.clientY - noteRect.top,
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    // Position is the mouse position minus the initial offset
    setPosition({
      x: e.clientX - dragStartOffset.current.x,
      y: e.clientY - dragStartOffset.current.y
    });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    // Bug 2 Fix: Stop the dragging state.
    setIsDragging(false);
  }, []);

  // Bug 4 Fix: Attach mouse move and mouse up listeners to the *window*
  // so the drag continues even if the mouse leaves the note.
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    // Cleanup function to remove listeners
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);


  return (
    <div
      ref={noteRef}
      className={`draggable-note ${isDragging ? 'dragging' : ''}`}
      // Bug 1 Fix: Use `top` and `left` for positioning with 'px' units.
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
      // The onMouseMove and onMouseUp on the div itself are now removed,
      // as they are handled globally by the useEffect.
    >
      <div className="note-header">Draggable Note</div>
      <textarea defaultValue="You can type in here!"></textarea>
    </div>
  );
}

export default DraggableNote;