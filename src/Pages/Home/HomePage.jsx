// HomePage.js
import React from 'react';
import CarouselComponent from '../../components/Home/CarouselComponent'; // Import the Carousel component


const HomePage = () => {
  // Carousel Data
  const carouselImages = [
    {
      src: "./assets/carouselImage/1.jpg",
      alt: "Recipes 1"
    },
    {
      src: "./assets/carouselImage/2.jpg",
      alt: "Recipes 2"
    },
    {
      src: "./assets/carouselImage/3.jpg",
      alt: "Recipes 3"
    }
  ];


  return (
    <div className="container">
      {/* Carousel Section */}
      <CarouselComponent images={carouselImages} />


    </div>
  );
};

export default HomePage;
