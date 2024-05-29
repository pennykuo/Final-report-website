'use client'
import React, { useState } from 'react';
import './Carousel.css';
import 'tailwindcss/tailwind.css';
import CarouselItem from './CarouselItem';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 6 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 6 ? 0 : prevIndex + 1));
  };

  const handleItemClick = (id) => {
    const position = id * window.innerHeight;
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    });
  };

  return (
    <div className="carouselCenter h-screen">
      <div className='carouselLogo'>
        Logo Logo Logo Logo Logo
      </div>

      <div className="carousel-container">
        <div className='carouselTitle'>
          Final Project
        </div>
        <div className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          <CarouselItem
            item={{ id: 1, content: 'Item 1' }}
            isActive={currentIndex === 0}
            onClick={() => handleItemClick(1)}
          />
          <CarouselItem
            item={{ id: 2, content: 'Item 2' }}
            isActive={currentIndex === 1}
            onClick={() => handleItemClick(2)}
          />
          <CarouselItem
            item={{ id: 3, content: 'Item 3' }}
            isActive={currentIndex === 2}
            onClick={() => handleItemClick(3)}
          />
          <CarouselItem
            item={{ id: 4, content: 'Item 4' }}
            isActive={currentIndex === 3}
            onClick={() => handleItemClick(4)}
          />
          <CarouselItem
            item={{ id: 5, content: 'Item 5' }}
            isActive={currentIndex === 4}
            onClick={() => handleItemClick(5)}
          />
          <CarouselItem
            item={{ id: 6, content: 'Item 6' }}
            isActive={currentIndex === 5}
            onClick={() => handleItemClick(6)}
          />
          <CarouselItem
            item={{ id: 7, content: 'Item 7' }}
            isActive={currentIndex === 6}
            onClick={() => handleItemClick(7)}
          />
        </div>

        <button onClick={handlePrev} className="carousel-button left">
          &lt;
        </button>
        <button onClick={handleNext} className="carousel-button right">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;