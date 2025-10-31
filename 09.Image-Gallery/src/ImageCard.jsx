import React from 'react';

const ImageCard = ({ image, onLike }) => {
  const cardStyle = {
    border: image.liked ? '4px solid #4CAF50' : '4px solid transparent',
    padding: '5px',
    borderRadius: '8px',
    cursor: 'pointer',
  };

  // Bug 3 Fix: The onClick prop needs a function definition, not a function call.
  // Use an arrow function to ensure `onLike` is only called when the click happens.
  const handleClick = () => {
    onLike(image.id);
  };

  return (
    <div onClick={handleClick} style={cardStyle}>
      <img
        src={image.download_url}
        alt={`Photo by ${image.author}`}
        width="300"
        height="200"
      />
      <p>Author: {image.author}</p>
    </div>
  );
};

export default ImageCard;