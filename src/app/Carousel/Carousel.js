'use client'
import React, { useState } from 'react';
import './Carousel.css';
import 'tailwindcss/tailwind.css';

const Carousel = () => {
  const items = [
    { id: 1, content: 'Item 1' },
    { id: 2, content: 'Item 2' },
    { id: 3, content: 'Item 3' },
    { id: 4, content: 'Item 4' },
    { id: 5, content: 'Item 5' },
    { id: 6, content: 'Item 6' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));

  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));

  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="carousel-container">

        <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
          <div className='carousel-circle circle1'>
          </div >

          <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
            {items[0].content}
          </div>
          <div className='carousel-circle'>
          </div >

          <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`}>
            {items[1].content}
          </div>
          <div className='carousel-circle'>
          </div >

          <div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`}>
            {items[2].content}
          </div>
          <div className='carousel-circle'>
          </div >

          <div className={`carousel-item ${currentIndex === 3 ? 'active' : ''}`}>
            {items[3].content}
          </div>
          <div className='carousel-circle'>
          </div >

          <div className={`carousel-item ${currentIndex === 4 ? 'active' : ''}`}>
            {items[4].content}
          </div>
          <div className='carousel-circle'>
          </div >

          <div className={`carousel-item ${currentIndex === 5 ? 'active' : ''}`}>
            {items[5].content}
          </div>
          <div className='carousel-circle'>
          </div >

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
