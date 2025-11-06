import React from 'react';
import ImageCarousel from './ImageCarousel';
import './App.css';

// You will need to get these images and place them in your /public folder.
// For example: save image as /public/image1.jpg, etc.
const slides = [
  { url: 'https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/amsterdamslide__800x600.jpg', title: 'Beach Sunset' },
  { url: 'https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/mag800-2__800x600.jpg', title: 'Mountain Range' },
  { url: 'https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/britcomdavidslide__800x600.jpg', title: 'Forest Trail' },
  { url: 'https://www.w3.org/TR/2019/NOTE-wai-aria-practices-1.1-20190207/examples/carousel/carousel-1/images/foyleswarslide__800x600.jpg', title: 'City at Night' },
];


function App() {
  return (
    <div className="container">
      <h1>Buggy Image Carousel</h1>
      <ImageCarousel slides={slides} />
    </div>
  );
}

export default App;