import React, { useState } from 'react';
import './ProductGallery.css';

const ZOOM_LEVEL = 2.5;
const LENS_SIZE = 150;

function ProductGallery({ images }) {
  // Bug 4 Fix (Part 1): Start with the first image in the array.
  const [currentImage, setCurrentImage] = useState(images.mainImages[0]);
  const [zoom, setZoom] = useState({
    x: 0,
    y: 0,
    // Bug 4 Fix (Part 2): Use a boolean for state.
    isActive: false, 
  });
  
  // Bug 1 Fix (Part 1): Implement the logic for the click handler.
  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  const handleMouseMove = (e) => {
    // Bug 3 Fix (Part 1): Implement the logic to position the lens.
    const { left, top, width, height } = e.target.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;

    // Prevent the lens from going off the image
    x = Math.max(0, Math.min(x, width));
    y = Math.max(0, Math.min(y, height));

    setZoom({
      x: x,
      y: y,
      isActive: true
    });
  };
  
  const handleMouseLeave = () => {
    // Correctly update state to deactivate zoom
    setZoom({ isActive: false });
  };

  // --- Style for the zoom lens ---
  // Bug 3 Fix (Part 2): Calculate the background position and size for the zoom effect.
  const lensStyle = {
    left: `${zoom.x - LENS_SIZE / 2}px`,
    top: `${zoom.y - LENS_SIZE / 2}px`,
    backgroundImage: `url(${currentImage})`,
    backgroundSize: `${100 * ZOOM_LEVEL}%`, // e.g., 250%
    // Move the background image opposite to the lens movement
    backgroundPosition: `-${zoom.x * ZOOM_LEVEL - LENS_SIZE / 2}px -${zoom.y * ZOOM_LEVEL - LENS_SIZE / 2}px`
  };


  return (
    <div className="gallery-container">
      {/* Conditionally add a class to the wrapper for zoom */}
      <div 
        className={`main-image-wrapper ${zoom.isActive ? 'zoomed' : ''}`} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
      >
        <img src={currentImage} alt="Main product" className="main-image" />
        <div
          className="zoom-lens"
          style={lensStyle}
        />
      </div>
      <div className="thumbnail-strip">
        {images.thumbnails.map((thumb, index) => {
            const mainImageForThumb = images.mainImages[index];
            return (
              <img
                // Bug 5 Fix: Add a key
                key={mainImageForThumb}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                // Bug 2 Fix: Apply the active class if this is the current image
                className={`thumbnail ${currentImage === mainImageForThumb ? 'active' : ''}`}
                // Bug 1 Fix (Part 2): The onClick handler must be an arrow function that calls the handler.
                onClick={() => handleThumbnailClick(mainImageForThumb)}
              />
            )
        })}
      </div>
    </div>
  );
}

export default ProductGallery;