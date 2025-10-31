import React from 'react';
import ImageCard from './ImageCard';

const ImageGallery = ({ images, onLike }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {/* Bug 5 Fix: Add the unique `key` prop here */}
      {images.map((image) => (
        <ImageCard key={image.id} image={image} onLike={onLike} />
      ))}
    </div>
  );
};

export default ImageGallery;