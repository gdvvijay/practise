import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';

function ImageCarousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // This effect should handle autoplay
    const timer = setInterval(() => {
     
        goToNext();
      
    }, 3000);
    return ()=>clearInterval(timer)
  }, []);

  const goToNext = () => {

    
        setCurrentIndex(prev=>{
         return prev < (slides.length-1) ? prev + 1 : 0
        });
    
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  const handleDotClick = (index) => {
    // This should go to a specific slide
    setCurrentIndex(index)
  };



  return (
    <div className="carousel-container">
      <div className="slider">
        {slides.map(slide => (
          <div
            className="slide"
            key={slide.url}
            
            style={{ backgroundImage: `url(${slide.url})`,backgroundSize:'100%', transform: `translateX(-${currentIndex * 100}%)`}}
          ></div>
        ))}
      </div>

      <button className="arrow left" onClick={goToPrevious}>❮</button>
      <button className="arrow right" onClick={goToNext}>❯</button>

      <div className="dots-container">
        {slides.map((slide, index) => (
          <div key={index} className={`dot ${currentIndex === index ? 'active' : ''}`} onClick={()=>handleDotClick(index)}></div>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;