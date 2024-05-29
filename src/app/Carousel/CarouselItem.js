'use client'
import React from 'react';
import './Carousel.css';

const CarouselItem = ({ item, isActive, onClick }) => {
    return (
        <div className='carouselAllItem'>
            <div className='circle1'></div >

            <div className={`carousel-item ${isActive ? 'active' : ''}`}
                onClick={onClick}
               >
                {item.content}
            </div>
            <div className='circle2'></div >
        </div>
    );
};

export default CarouselItem;