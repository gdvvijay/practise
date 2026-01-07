import React, { useState, useRef, useEffect, useCallback } from 'react';
import './DraggableNote.css';

function DraggableNote() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isDragging, setIsDragging] = useState(false);
  
  const dragStartOffset = useRef({ x: 0, y: 0 });
  const noteRef = useRef(null);

  const handleMouseDown = useCallback((e) => {
    if (e.target.className !== 'note-header') return;

    setIsDragging(true);

    const noteRect = noteRef.current.getBoundingClientRect();
    dragStartOffset.current = {
      x: e.clientX - noteRect.left,
      y: e.clientY - noteRect.top,
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    setPosition({
      x: e.clientX - dragStartOffset.current.x,
      y: e.clientY - dragStartOffset.current.y
    });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={noteRef}
      className={`draggable-note ${isDragging ? 'dragging' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      onMouseDown={handleMouseDown}
    >
      <div className="note-header">Drag Me</div>
      <textarea defaultValue="You can type in here!"></textarea>
    </div>
  );
}

export default DraggableNote;