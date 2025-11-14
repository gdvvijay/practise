import React, { useState, useRef, useEffect } from 'react';
import './MemeGenerator.css';

function MemeGenerator() {
  const [image, setImage] = useState(null);
  const [topText, setTopText] = useState('Top Text');
  const [bottomText, setBottomText] = useState('Bottom Text');
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    // This should handle the file input and set the image state
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => setImage(event.target.result);
    reader.readAsDataURL(file);
  };
  useEffect(() => {
    // This effect should draw the image and text onto the canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the text
    ctx.fillStyle = 'black';
    ctx.font = '40px Impact';
    ctx.textAlign = 'center';
    ctx.fillText(topText, canvas.width / 2, 50);
       const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 100, canvas.width, canvas.height - 200); // draw image
    };
    img.src =image
    ctx.fillText(bottomText, canvas.width / 2, canvas.height-5);
  }, [image, topText, bottomText]);


  return (
    <div className="meme-generator">
      <div className="controls">
        <input type="file" onChange={handleImageUpload} accept="image/*" />
        <input
          type="text"
          value={topText}
          onChange={(e)=>setTopText(e.target.value)}
          placeholder="Top Text"
        />
        <input
          type="text"
          value={bottomText}
          onChange={(e) =>setBottomText( e.target.value)}
          placeholder="Bottom Text"
        />
      </div>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        className="meme-canvas"
      ></canvas>
    </div>
  );
}

export default MemeGenerator;