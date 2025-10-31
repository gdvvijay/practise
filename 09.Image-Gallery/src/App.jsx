import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import LoadingSpinner from './LoadingSpinner';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Bug 1 Fix: The dependency array should be empty `[]` to run only once on mount.
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=6')
      .then((res) => res.json())
      .then((data) => {
        const imagesWithLikes = data.map((img) => ({ ...img, liked: false }));
        setImages(imagesWithLikes);
        // Bug 4 Fix: Set isLoading to false after the data is successfully fetched.
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch images:', error);
        setIsLoading(false); // Also stop loading on error.
      });
  }, []); // Corrected dependency array

  const handleLike = (imageId) => {
    // Bug 2 Fix: Create a new array instead of mutating the existing one.
    const updatedImages = images.map((img) => {
      if (img.id === imageId) {
        // Return a new object for the updated image
        return { ...img, liked: !img.liked };
      }
      return img;
    });
    setImages(updatedImages); // Set state with the new array to trigger a re-render
  };

  // Bug 4 Fix: Correct the conditional logic.
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1>Photo Gallery</h1>
      <p>Click on an image to like it!</p>
      <ImageGallery images={images} onLike={handleLike} />
    </div>
  );
};

export default App;