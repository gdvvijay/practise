import React, { useState, useRef, useEffect } from 'react';
import './SignaturePad.css';

function SignaturePad() {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 3;
   
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const context=canvasRef.current.getContext('2d')
    const { offsetX, offsetY } = nativeEvent;
    setIsDrawing(true);
    context.beginPath()
    context.moveTo(offsetX, offsetY)
  };
  
  const finishDrawing = () => {
    setIsDrawing(false)
    const context=canvasRef.current.getContext('2d')
    context.closePath();
  };
  
  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    const context = canvasRef.current.getContext('2d');
    context.lineTo(offsetX, offsetY);
    context.stroke()
  };
  
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context=canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="signature-pad-container">
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
      />
      <button onClick={clearCanvas} className="clear-btn">Clear</button>
    </div>
  );
}

export default SignaturePad;