import React from 'react';
import ProductGallery from './ProductGallery';
import './App.css';

// You will need to get these images and place them in your /public folder.
// For example: /public/images/shoe1.jpg, /public/images/shoe-thumb1.jpg
const productImages = {
  mainImages: [
    'https://wallpaperaccess.com/full/3036723.jpg',
    'https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-photos-hd-011.jpg',
    'https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-photos-hd-007.jpg',
  ],
  thumbnails: [
    'https://wallpaperaccess.com/full/3036723.jpg',
    'https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-photos-hd-011.jpg',
    'https://www.kerala9.com/wp-content/uploads/2022/04/kgf-chapter-2-photos-hd-007.jpg',
  ]
};
/*
  Sample image URLs to use (from unsplash):
  - shoe1.jpg: https://images.unsplash.com/photo-1542291026-7eec264c27ff
  - shoe-thumb1.jpg: (same as shoe1)

  - shoe2.jpg: https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a
  - shoe-thumb2.jpg: (same as shoe2)

  - shoe3.jpg: https://images.unsplash.com/photo-1587563871167-16ea69119f38
  - shoe-thumb3.jpg: (same as shoe3)
*/

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Product Image Gallery</h1>
        <p>Click the thumbnails and hover over the main image to find the bugs.</p>
      </header>
      <main>
        <ProductGallery images={productImages} />
      </main>
    </div>
  );
}

export default App;